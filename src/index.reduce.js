const ADD_CONUNT = 'add';
const REDUCE_CONUNT = 'reduce';

// reducer
export const counter = (state, action) => {
	switch(action.type) {
		case ADD_CONUNT:
			return state + 1;
		case REDUCE_CONUNT:
			return state - 1;
		default: 
			return 10;
	}
}

// action creator
export const addCount = () => {
	return {
		type: ADD_CONUNT
	}
}

export const reduceCount = () => {
	return {
		type: REDUCE_CONUNT
	}
}

export const addCountAsync = () => {
	return dispatch => {
		setTimeout( () => {
			dispatch(addCount())
		}, 2000)
	}
}
