import React from 'react'
import { Button, Table } from 'react-bootstrap'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let myStyle={
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h2>Todos List</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Desscription</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.length === 0 ? "No todos to display" :
            props.todos.map((todo) => {
              return (

                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td><Button variant="btn btn-sm btn-danger" onClick={() => { props.onDelete(todo) }}>Delete</Button></td>
                </tr>
              )
            })}

        </tbody>
      </Table>
    </div>
  )
}

export default Todos
