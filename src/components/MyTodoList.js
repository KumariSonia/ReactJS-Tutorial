import React from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'

const MyTodoList = ({ addTodo, todos, onDelete }) => {
    return (
        <div>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
        </div>
    )
}

export default MyTodoList
