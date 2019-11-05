import { IRenderInfo } from "./IRenderInfo";
import { ITurnViewProps } from "./ITurnViewProps";

export type ITurnDriverRender = (
  content: React.ReactNode,
  props?: ITurnViewProps
) => React.ReactNode | JSX.Element;

export type ITurnDriverInit = (current: IRenderInfo, prev: IRenderInfo) => void;

export type ITrunDriverTrun = (
  current: IRenderInfo,
  prev: IRenderInfo
) => void | Promise<void>;

export type ITurnDriverDone = (current: IRenderInfo, prev: IRenderInfo) => void;

/**
 * 驱动信息
 */
export interface ITurnDriver {
  /**
   * 初始化，渲染组件创建时会触发
   */
  init: ITurnDriverInit;

  /**
   * 切换方法，执行转场时触发，支持返回 promise，
   * 此方法执行完成后，将卸载上一个元素
   */
  turn: ITrunDriverTrun;

  /**
   * 在动画完成时，触发发执行
   */
  done?: ITurnDriverDone;

  /**
   * 渲染方法，用于自定义转场容器
   */
  render?: ITurnDriverRender;
}
