import React, { useState, useReducer } from 'react'
import styled from 'styled-components'

interface Props {
    title: string
}

interface TodoItem {
    todo: string,
    isCompleted: false,
}

type State = TodoItem []

type Actions = 
    | {type: 'add-todo', text: string} 
    | {type: 'remove-todo', id: number}
    | {type: 'complete-todo', id: number}
    | {type: 'clear-completed'}

const TodoReducer = (state: State, action: Actions): State => {
    switch (action.type) {
        case 'add-todo' :
            return [...state, {todo: action.text, isCompleted: false}]
        case 'remove-todo' :
            return state.filter((val, index) => index!== action.id)
        case 'complete-todo' :
            return [...state]
        case 'clear-completed' :
            return [...state]
        default: 
            return state
    }
}

const TodoInput : React.FC<Props> = ({title}) => {

    const [todoText, setTodoText] = useState<string>('')
    const [todoList, dispatch] = useReducer(TodoReducer, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch({type: 'add-todo', text: todoText})        
        setTodoText('')
    }
    console.log({todoList})
    return (
        <InputContainer className="todo-input-container">
            <Label>{title}</Label>
            <Form onSubmit = {handleSubmit}>            
                <TodoInputElement 
                    placeholder = 'What needs to be done ?'  
                    name = 'todoInput'
                    onChange = {e => setTodoText(e.target.value)}              
                    type='text'
                    value = {todoText}
                />
            </Form>
        </InputContainer>
    )
}

export default TodoInput

const Label = styled.label`
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 30px 0;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

const TodoInputElement = styled.input`
    height: 30px;
    padding: 5px 10px;
    width: 50%;
    outline: none;
    font-weight: bold;
    font-size: 16px;
`
const Form = styled.form`
    width: 100%;
    justify-content: center;
    display: flex;
`
