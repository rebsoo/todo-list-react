import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };
    const submitTodoHandler = (event) => {
        // this will prevent the page to refresh everytime we add a todo
        event.preventDefault(); 
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText("");
    };

    const statusHandler = (event) => {
        setStatus(event.target.value);
    };

    return (
        <form>
            <input 
             value={inputText} 
             onChange={inputTextHandler} 
             className="todo-input" 
             type="text" 
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );
};

export default Form;