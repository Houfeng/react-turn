import { ITurnDriver } from "./ITurnDriver";

/**
 * TurnView 属性
 */
export interface ITurnViewProps {
  /**
   * 当前值，改变 value 将触发切换
   * 同时 value 将作为渲染元素的 key
   */
  value?: string | number;

  /**
   * 容器的 className
   * 如果 dirver 实现了 render，或将受到 dirver 的影响
   */
  className?: string;

  /**
   * 容器的 style
   * 如果 dirver 实现了 render，或将受到 dirver 的影响
   */
  style?: React.CSSProperties;

  /**
   * 子元素
   */
  children?: React.ReactElement;

  /**
   * 渲染子元素函数
   */
  render?: () => React.ReactElement;

  /**
   * 动画驱动器
   */
  driver?: ITurnDriver;

  /**
   * 超时时间
   * 如果 diver 的 turn 方法无返回，将在超过 timeout 时进行元素清量
   * 并触发动画完成事件
   */
  timeout?: number;

  /**
   * 开始事件，在动画开始时触发
   */
  onStart?: () => void;

  /**
   * 执行事件，在动画开始时触发
   */
  onTurn?: (turning?: boolean) => void;

  /**
   * 完成事件，在动画完成后触发
   */
  onDone?: () => void;
}
