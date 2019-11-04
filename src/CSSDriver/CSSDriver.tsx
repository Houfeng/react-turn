import React from "react";
import { addClass, addEndEvent, removeClass, removeEndEvent } from "./util";
import { CSSAnimation } from "./CSSAnimation";
import { ICSSAnimation } from "./ICSSAnimation";
import { IRenderInfo, ITurnDriver, ITurnViewProps, random } from "../TurnView";
import { isNullOrUndefined } from "util";

export class CSSDriver implements ITurnDriver {
  public animation: ICSSAnimation;

  constructor(public type?: string | number) {
    if (isNullOrUndefined(type)) {
      type = random(0, CSSAnimation.length - 1);
    }
    const animation = isNaN(type as number)
      ? CSSAnimation.find(item => item.name === String(type))
      : CSSAnimation[Number(type)];
    this.animation = animation || CSSAnimation[0];
  }

  init = (current: IRenderInfo, prev: IRenderInfo) => {
    if (current) addClass(current.ref, "turn-item");
    if (prev) addClass(prev.ref, "turn-item");
  };

  turn = (current: IRenderInfo, prev: IRenderInfo) => {
    return new Promise<void>(resolve => {
      let count = 0;
      const done = () => {
        if (++count < 2) return;
        if (current) removeEndEvent(current.ref, done);
        if (prev) removeEndEvent(prev.ref, done);
        resolve();
      };
      if (current) {
        addClass(current.ref, this.animation.enter);
        addEndEvent(current.ref, done);
      }
      if (prev) {
        addClass(prev.ref, this.animation.leave);
        addEndEvent(prev.ref, done);
      }
    });
  };

  done = (current: IRenderInfo, prev: IRenderInfo) => {
    if (current) {
      removeClass(current.ref, this.animation.enter);
    }
    if (prev) {
      removeClass(prev.ref, this.animation.leave);
    }
  };

  render = (content: React.ReactNode, props?: ITurnViewProps) => {
    const { className = "", style } = props;
    return (
      <div className={className} style={style}>
        {content}
      </div>
    );
  };
}
