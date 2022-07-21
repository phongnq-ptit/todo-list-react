import React from 'react'

function TodoList({ todos, setTodos, onEdit, setOnEdit }) {

    const handleCompleted = (todo) => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item
            })
        )
    }

    const handleEdit = (todo) => {
        const findTodo = todos.find(item => item.id === todo.id)
        setOnEdit(findTodo)
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(item => item.id !== id));
    }

    return (
        <div>
            {
                todos.map(item => {
                    return (
                        <li className='list-item' key={item.id}>
                            <input type="text" value={item.title} className={`list ${item.completed ? "complete" : ""}`}
                                onChange={(event) => { event.preventDefault() }}
                            />
                            <div>
                                <button className='button-complete task-button' onClick={() => handleCompleted(item)}>
                                    <i className='fa fa-check-circle' ></i>
                                </button>
                                <button className='button-edit task-button' onClick={() => handleEdit(item)}>
                                    <i className='fa fa-edit' ></i>
                                </button>
                                <button className='button-delete task-button' onClick={() => handleDelete(item.id)} >
                                    <i className='fa fa-trash' ></i>
                                </button>
                            </div>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default TodoList