import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const TodoList: React.FC = () => {
	const { page, error, limit, loading, todos } = useTypedSelector(
		(state) => state.todo
	);
	const { fetchTodos, setTodoPage } = useActions();
	const pages = [1, 2, 3, 4, 5];
	useEffect(() => {
		fetchTodos(page, limit);
	}, [page]);

	if (loading) {
		return <h1>Загрузка...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<div>
			{todos.map((todo) => (
				<div key={todo.id}>
					{todo.id} - {todo.title}
				</div>
			))}
			{pages.map((p) => (
				<div
					key={p}
					onClick={() => setTodoPage(p)}
					style={{
						border: p === page ? '2px solid red' : '1px solid black',
						display: 'inline-block',
						padding: 10,
						marginRight: 10,
					}}
				>
					{p}
				</div>
			))}
		</div>
	);
};

export default TodoList;
