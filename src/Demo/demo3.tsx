import React from "react";
import ReactDOM from "react-dom";
import { randomColor, TurnSwitch } from "..";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import "./demo2.less";

TurnSwitch.associate(Switch, Route);

export class Home extends React.Component {
  state = { background: randomColor() };
  render() {
    const { background } = this.state;
    return <div style={{ background }}>Home</div>;
  }
}

export class PageA extends React.Component {
  state = { background: randomColor() };
  render() {
    const { background } = this.state;
    return <div style={{ background }}>Page A</div>;
  }
}

export class PageB extends React.Component {
  state = { background: randomColor() };
  render() {
    const { background } = this.state;
    return <div style={{ background }}>Page B</div>;
  }
}

export class Demo extends React.Component {
  renderLinks() {
    return (
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/a">
          PageA
        </Link>
        <Link className="link" to="/b">
          PageB
        </Link>
      </div>
    );
  }

  render() {
    return (
      <HashRouter>
        <div className="demo">
          <TurnSwitch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/a" component={PageA} exact={true} />
            <Route path="/b" component={PageB} exact={true} />
          </TurnSwitch>
          {this.renderLinks()}
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("root"));
