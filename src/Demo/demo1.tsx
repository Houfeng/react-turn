import React from "react";
import ReactDOM from "react-dom";
import { binding, model } from "mota";
import { CSSAnimation, CSSDriver, randomColor, TurnView } from "..";
import "./demo1.less";

export class DemoModel {
  truning = false;
  current = 0;

  next = () => {
    this.current = Number(this.current) + 1;
    if (this.current > CSSAnimation.length - 1) {
      this.current = CSSAnimation.length - 1;
    }
  };

  prev = () => {
    this.current = Number(this.current) - 1;
    if (this.current < 0) {
      this.current = 0;
    }
  };
}

@model(DemoModel)
@binding
export class Demo extends React.Component {
  model: DemoModel;

  onTurn = (truning: boolean) => {
    this.model.truning = truning;
  };

  renderView() {
    const { current } = this.model;
    return (
      <TurnView
        value={current}
        driver={new CSSDriver(current)}
        onTurn={this.onTurn}
      >
        <div style={{ background: randomColor() }}>{Number(current) + 1}</div>
      </TurnView>
    );
  }

  renderSwitch() {
    const { truning, next, prev } = this.model;
    return (
      <div className="switch">
        <button disabled={truning} onClick={prev}>
          Prev
        </button>
        <select disabled={truning} data-bind="current">
          {CSSAnimation.map((_, index) => (
            <option key={index} value={index}>
              Animation {index + 1}
            </option>
          ))}
        </select>
        <button disabled={truning} onClick={next}>
          Next
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="demo">
        {this.renderView()}
        {this.renderSwitch()}
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("root"));
