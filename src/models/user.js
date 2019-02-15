const model = {
	/** store数据 **/
	state: {
		userInfo: {}
	},

	/** actions **/
	actions: {
		// 模拟用户登录
    async login(params = {}) {
      const user = { id: params.id, username: params.username };
      this.setState({ userInfo: user });
      return user;
    },

    // 模拟用户退出
    async loginOut(params = {}) {
      this.setState({ userInfo: {} });
      return {};
    }
	}
}

export default model;