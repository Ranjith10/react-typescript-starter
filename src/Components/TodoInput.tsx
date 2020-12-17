import React from 'react'
import styled from 'styled-components'

interface Props {
    title: string
}

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

const TodoInput : React.FC<Props> = ({title}) => {
    return (
        <InputContainer className="todo-input-container">
            <Label>{title}</Label>
            <TodoInputElement 
                placeholder = 'What needs to be done ?'                
                type='text'
            />
        </InputContainer>
    )
}

export default TodoInput
