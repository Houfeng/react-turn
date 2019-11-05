import React from "react";
import { IRenderInfo } from "./IRenderInfo";
import { ITurnViewProps } from "./ITurnViewProps";
import { ITurnViewState } from "./ITurnViewState";
import { sleep } from "./util";

/**
 * 转场动画视图组件
 */
export class TurnView extends React.Component<ITurnViewProps> {
  /**
   * 组件状态
   */
  state: ITurnViewState = {};

  /**
   * 渲染上一次的内容
   */
  renderPrev() {
    const { prev } = this.state;
    return prev && prev.element;
  }

  /**
   * 渲染当前内容
   */
  renderCurrent() {
    const { current } = this.state;
    return current && current.element;
  }

  /**
   * 渲染元素片段
   */
  renderFragment() {
    return (
      <React.Fragment>
        {this.renderCurrent()}
        {this.renderPrev()}
      </React.Fragment>
    );
  }

  /**
   * 使用 Driver 渲染方法
   */
  renderByDriver() {
    const { driver, className = "", ...others } = this.props;
    return driver.render(this.renderFragment(), {
      className: `turn-view ${className}`.trim(),
      ...others
    });
  }

  /**
   * 使用默认的渲染方法
   */
  renderByDefault() {
    const { className = "", style } = this.props;
    return (
      <div className={`turn-view ${className}`.trim()} style={style}>
        {this.renderFragment()}
      </div>
    );
  }

  /**
   * 渲染组件
   */
  render() {
    const { driver } = this.props;
    return driver && driver.render
      ? this.renderByDriver()
      : this.renderByDefault();
  }

  /**
   * 在组件更新时
   * @param prevProps 上一次渲染时的属性
   */
  async componentDidUpdate(prevProps: ITurnViewProps) {
    if (prevProps.value !== this.props.value) {
      await this.turn();
    }
  }

  /**
   * 是否正在转场中
   */
  turning = false;

  /**
   * 执行转场动画
   */
  turn = async () => {
    const { driver, timeout = 1200, onStart, onTurn, onDone } = this.props;
    if (this.turning) {
      console.warn("Cannot trigger again before last completion");
    }
    this.turning = true;
    if (onStart) onStart();
    if (onTurn) onTurn(this.turning);
    if (driver) {
      const { current, prev } = this.state;
      const pending: any = driver.turn(current, prev);
      await (pending ? pending : sleep(timeout));
      if (driver.done) driver.done(current, prev);
    }
    await this.destroyPrev();
    this.turning = false;
    if (onTurn) onTurn(this.turning);
    if (onDone) onDone();
  };

  /**
   * 销毁上次渲染信息
   */
  destroyPrev = () => {
    this.setState({ prev: null });
  };

  /**
   * 通过 nextProps 计算 state
   * @param nextProps 下一次渲染时的属性
   * @param prevState 上一次的状态
   */
  static getDerivedStateFromProps(
    nextProps: ITurnViewProps,
    prevState: ITurnViewState
  ) {
    if (nextProps.value === prevState.value) return null;
    const { value, driver, children, render } = nextProps;
    const prev = { ...prevState.current };
    const current: IRenderInfo = { key: String(value) };
    const element = children || render();
    current.element = React.cloneElement(element, {
      key: value,
      className: `turn-item ${element.props.className || ""}`.trim(),
      ref: (instance: any) => {
        if (instance) current.ref = instance;
        if (instance && driver) driver.init(current, prev);
        if (element.props && element.props.ref) element.props.ref(instance);
      }
    });
    return { prev, current, value };
  }
}
