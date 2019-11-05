import React from "react";
import ReactDOM from "react-dom";
import { CSSDriver, randomColor, TurnView } from "..";
import { HashRouter, Link, Route, RouteProps, Switch } from "react-router-dom";
import "./demo2.less";

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
  renderView({ location }: RouteProps) {
    return (
      <TurnView value={location.pathname} driver={new CSSDriver()}>
        <Switch location={location}>
          <Route path="/" component={Home} exact={true} />
          <Route path="/a" component={PageA} exact={true} />
          <Route path="/b" component={PageB} exact={true} />
        </Switch>
      </TurnView>
    );
  }

  renderLinks() {
    return (
      <div className="links">
        <Link className="link" to="/" >
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
          <Route render={this.renderView} />
          {this.renderLinks()}
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("root"));
