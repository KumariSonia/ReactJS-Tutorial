import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    const onAddTodo = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("title or description of todo can't be null")
        }
        addTodo(title, description)
    }

    return (
        <div className='container my-3'>
            <h3>Add A Todo</h3>
            <Form onSubmit={onAddTodo}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter todo title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="Enter todo description" />
                </Form.Group>
                <Button variant="btn btn-sm btn-success" type="submit">
                    Add Todo
                </Button>
            </Form>
        </div>
    )
}

export default AddTodo
