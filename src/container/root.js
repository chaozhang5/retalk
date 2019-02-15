import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let count = this.props.count;
		return (
			<div>
				<h1>现在数量为：{count}</h1>
				<button onClick={() => {
					this.props.actions.addCount(count)
				}}>数量+1</button>
				<button onClick={() => {
					this.props.actions.reduceCount(count);
				}}>数量-1</button>
				<button onClick={() => {
					this.props.actions.addCountAsync(count);
				}}>2秒之后 + 1</button>
			</div>
		)
	}
}

export default connect(
	state => ({
    userInfo: state.UserModel.userInfo, // 引入user model中的userinfo数据
    count: state.IndexModel.count // 引入index model中的count数据
  }),
  model => ({
    actions: {
      login: model.UserModel.login, // 引入user model中的用户登录action
      loginOut: model.UserModel.loginOut, // 引入user model中的用户退出action
      addCount: model.IndexModel.addCount, // 引入index model中的addCount
      reduceCount: model.IndexModel.reduceCount, // 引入index model中的reduceCount
      addCountAsync: model.IndexModel.addCountAsync // 引入index model中的addCountAsync
    }
  })
)(App);