import React from 'react';
import Todo from './Todo';

const TodoList = ({filteredTodos, todos, setTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        text={todo.text} 
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>

    );
};

export default TodoList;