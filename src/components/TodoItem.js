import React from 'react'
import { Button, Table } from 'react-bootstrap'

const TodoItem = ({todo,onDelete}) => {
  return (
    <div className='my-3'>
      <div>{todo.id}</div>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      <div> <Button variant="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</Button></div>
    </div>
  )
}

export default TodoItem
