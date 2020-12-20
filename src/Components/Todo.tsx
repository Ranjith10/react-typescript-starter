import React, { useState, useReducer } from 'react'
import styled from 'styled-components'
import TodoList from './TodoList'

interface Props {
    title: string
}

interface TodoItem {
    todo: string,
    isCompleted: boolean,
}

type State = TodoItem []

type Actions = 
    | {type: 'add-todo', text: string} 
    | {type: 'remove-todo', id: number}
    | {type: 'clear-completed'}
    | {type: 'toggle-completed', id:number}

const TodoReducer = (state: State, action: Actions): State => {
    switch (action.type) {
        case 'add-todo' :
            return [...state, {todo: action.text, isCompleted: false}]
        case 'remove-todo' :
            return state.filter((val, index) => Number(index) !== action.id)
        case 'clear-completed' :
            return state.filter((val, index) => !val.isCompleted)
        case 'toggle-completed' :
            let tempState = [...state] 
            tempState.forEach((val, index) => {
                if(Number(index) === action.id) {
                    val['isCompleted'] = !val['isCompleted'] 
                }
            }) 
            return tempState   
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
    return (
        <>
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
            <TodoList 
                todoList = {todoList}
                dispatch = {dispatch}
            />
        </>
    )
}

export default TodoInput

const Label = styled.label`
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 30px 0;
    color: #ffffff;
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
