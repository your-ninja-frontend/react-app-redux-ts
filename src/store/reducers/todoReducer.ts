import { TodoAction, TodoActionTypes, TodoState } from '../../types/todo';

const initialState: TodoState = {
	todos: [],
	page: 1,
	error: null,
	limit: 10,
	loading: false,
};

export const todoReducer = (
	state = initialState,
	actions: TodoAction | any
): TodoState => {
	switch (actions.type) {
		case TodoActionTypes.FETCH_TODOS:
			return { ...state, loading: true };
		case TodoActionTypes.FETCH_TODOS_SUCCESS:
			return { ...state, loading: false, todos: actions.payload };
		case TodoActionTypes.FETCH_TODOS_ERROR:
			return { ...state, loading: false, error: actions.payload };
		case TodoActionTypes.SET_TODO_PAGE:
			return { ...state, page: actions.payload };
		default:
			return state;
	}
};
