import React from 'react'
import styled from 'styled-components'

interface TodoItem {
    todo: string,
    isCompleted: false,
}

interface Props {
    todoList: TodoItem []
}

const TodoList:React.FC<Props> = ({todoList}) => {
    return (
        <TodoListContainer>
            {
                todoList.length > 0 && todoList.map((item, index) => {
                    return (
                        <TodoElement key={index}>
                            {item.todo}
                        </TodoElement>
                    )
                })
            }
            {
                todoList.length > 0 &&
                <TodoFooter>
                   {todoList.length} Items 
                </TodoFooter>
            }
        </TodoListContainer>
    )
}

export default TodoList

const TodoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 338px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
`
const TodoElement = styled.div`
    display: flex;
    width: calc(100% - 40px);
    margin: 10px 20px;
    text-transform: CAPITALIZE;
    font-weight: 600;
`

const TodoFooter = styled.div`
    display: flex;
    width: calc(100% - 40px);
    margin: 10px 20px;
    text-transform: CAPITALIZE;
`