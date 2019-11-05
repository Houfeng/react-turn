import React from "react";
import { CSSDriver, TurnView } from "..";
import { ITurnViewProps } from "../TurnView";

export interface ITurnSwitchProps {
  turn?: ITurnViewProps;
  [name: string]: any;
}

export class TurnSwitch extends React.Component<ITurnSwitchProps> {
  static OriginSwitch: any = null;
  static OriginRoute: any = null;

  static associate = (originSwitch: any, originRoute: any) => {
    TurnSwitch.OriginSwitch = originSwitch;
    TurnSwitch.OriginRoute = originRoute;
  };

  renderView = ({ location }: any) => {
    const { OriginSwitch } = TurnSwitch;
    if (!OriginSwitch) throw new Error(`Please associate Switch`);
    const { children, turn, ...others } = this.props;
    return (
      <TurnView driver={new CSSDriver()} value={location.pathname} {...turn}>
        <OriginSwitch {...others} location={location}>
          {children}
        </OriginSwitch>
      </TurnView>
    );
  };

  render() {
    const { OriginRoute } = TurnSwitch;
    if (!OriginRoute) throw new Error(`Please associate Route`);
    return <OriginRoute render={this.renderView} />;
  }
}
