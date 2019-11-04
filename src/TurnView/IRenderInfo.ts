/**
 * 渲染信息
 */
export interface IRenderInfo {
  /**
   * 当前 key (等于组件切换时的 value)
   */
  key?: string;

  /**
   * 渲染的子组件的实例引用
   */
  ref?: any;

  /**
   * 对应的渲染元素对象
   */
  element?: React.ReactElement;
}
