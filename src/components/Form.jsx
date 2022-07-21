import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Form({ input, setInput, todos, setTodos, onEdit, setOnEdit }) {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => {
            return todo.id === id ? { title, id, completed } : todo
        })

        setTodos(newTodo)
        setOnEdit("")
    }

    useEffect(() => {
        if (onEdit) {
            setInput(onEdit.title);
        } else {
            setInput("")
        }
    }, [setInput, onEdit]);

    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!onEdit) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        } else {
            updateTodo(input, onEdit.id, onEdit.completed);
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder='Enter a Todo ...' className='task-input'
                value={input} required onChange={onInputChange}
            />
            <button className='button-add' type='submit'>
                {onEdit ? "Up" : "Add"}
            </button>
        </form>
    )
}

export default Form