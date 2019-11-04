import { IRenderInfo } from "./IRenderInfo";

/**
 * TurnView 状态
 */
export interface ITurnViewState {
  prev?: IRenderInfo;
  current?: IRenderInfo;
  value?: string | number;
}
