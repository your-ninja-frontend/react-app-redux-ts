import React from 'react';
import UserList from './components/UserList';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div>
			<UserList></UserList>
			<hr></hr>
			<TodoList></TodoList>
		</div>
	);
};

export default App;
