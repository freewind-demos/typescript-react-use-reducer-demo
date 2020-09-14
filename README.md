TypeScript React "useReducer" Demo
=================================

`useReducer`跟`useState`有点像，但是多了一个中间层，把对state的更改抽了出来，
使用action/dispatch的方式显示发送

注意：跟`useState`一样，一旦给了初始值，则独立维护状态，不会自动使用新render的初始值再次初始化。
所以如果希望当外界传入的初始state变化时跟着变化，需要做一个特别的action（如`reset`）来处理

```
npm install
npm run demo
```
