const model = {
	/** store数据 **/
	state: {
		count: 10
	},

	/** actions **/
	actions: {
		addCount(params) {
			this.setState({
				count: params + 1
			})
		},

		reduceCount(params) {
			this.setState({
				count: params - 1
			})
		},

		addCountAsync(params) {
			setTimeout( ()=> {
				this.setState({
					count: params + 2
				})
			}, 2000)
		}

	}
}

export default model;