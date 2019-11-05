import React from "react";
import ReactDOM from "react-dom";
import { addClass, addEndEvent, removeClass, removeEndEvent } from "./util";
import { CSSAnimation } from "./CSSAnimation";
import { ICSSAnimation } from "./ICSSAnimation";
import { IRenderInfo, ITurnDriver, ITurnViewProps, random } from "../TurnView";
import { isNullOrUndefined } from "util";

export function findElement(ref: any) {
  return ReactDOM.findDOMNode(ref) as HTMLElement;
}

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
    if (current) addClass(findElement(current.ref), "turn-item");
    if (prev) addClass(findElement(prev.ref), "turn-item");
  };

  turn = (current: IRenderInfo, prev: IRenderInfo) => {
    return new Promise<void>(resolve => {
      let count = 0;
      const done = () => {
        if (++count < 2) return;
        if (current) removeEndEvent(findElement(current.ref), done);
        if (prev) removeEndEvent(findElement(prev.ref), done);
        resolve();
      };
      if (current) {
        addEndEvent(findElement(current.ref), done);
        addClass(findElement(current.ref), this.animation.enter);
      }
      if (prev) {
        addEndEvent(findElement(prev.ref), done);
        addClass(findElement(prev.ref), this.animation.leave);
      }
    });
  };

  done = (current: IRenderInfo, prev: IRenderInfo) => {
    if (current) {
      removeClass(findElement(current.ref), this.animation.enter);
    }
    if (prev) {
      removeClass(findElement(prev.ref), this.animation.leave);
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
