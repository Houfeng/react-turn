import React from "react";
import { CSSDriver, TurnView } from "..";
import { Switch, Route } from "react-router-dom";
import { ITurnViewProps } from "../TurnView";

export interface ITurnSwitchProps extends ITurnViewProps {}

export function TurnSwitch(props: ITurnSwitchProps) {
  const { children } = props;
  return (
    <Route
      render={({ location }) => {
        return (
          <TurnView value={location.pathname} driver={new CSSDriver()}>
            <Switch location={location}>{children}</Switch>
          </TurnView>
        );
      }}
    />
  );
}
