# 简介

React Turn 是一个「功能强、体积小、易使用」的「转场动画」组件，
对 Route Router 有较好的支持。

# 安装
```bash
npm i react-trun --save
```

# 使用

## 单独使用
最简单的使用方式就是一个普通的 div 一样

```jsx
import { TurnView } from "react-turn";

<TurnView value={current} driver={new CSSDriver()}>
  <div>{current}</div>
</TurnView>
```
在 `TurnView` 的 `value` 发生变化时，将会通过指定的「转场动画」完成子元素的切换。

注意，动画是由 `driver` 负责完成的，在 `react-turn` 包中内建了 `CSSDriver`，这个 driver 包括了 68 种切换效果。

CSSDriver 可在构造时通过一个 `number` 类型的参数指定动画效果，参数为动效的编号（0~67），示例代码如下

```jsx
import { TurnView } from "react-turn";

<TurnView value={current} driver={new CSSDriver(1)}>
  <div>{current}</div>
</TurnView>
```

完成整的示例：[https://codesandbox.io/s/turn-demo-wh51f](https://codesandbox.io/s/turn-demo-wh51f)


## 在 Router 中使用

在一个基于 React 开发的 SPA 应用中，我们常用使用 `react-router` 来管理页面路由，
并在各个页面间切换，通过 `react-turn` 可轻松为路由切换添加转场动效。

```jsx
import { TurnSwitch } from "react-turn";
import { Switch, Route } from"react-router-dom";

//关联 React Router
TurnSwitch.associate(Switch, Route);

//然后用 TurnSwitch 替代 Switch 即可
<TurnSwitch>
  <Route path="/" component={Home} exact={true} />
  <Route path="/a" component={PageA} exact={true} />
  <Route path="/b" component={PageB} exact={true} />
</TurnSwitch>
```

其中 `TurnSwitch` 的属性同 `Switch` 基乎一样，仅多了一个 `turn` 用于指定转场动相关的设定，
`turn` 和 `TrunView` 的属性一致。

完成的示例：[https://codesandbox.io/s/turn-route-demo1-dh8wx](https://codesandbox.io/s/turn-route-demo1-dh8wx)

当然，也可以不使用 `TurnSwitch`，而直接在 React Router 中使用 `TurnView`，
可参考这个示例：[https://codesandbox.io/s/turn-route-demo2-y6u7y](https://codesandbox.io/s/turn-route-demo2-y6u7y)

# 如果开发 Driver

TODO://