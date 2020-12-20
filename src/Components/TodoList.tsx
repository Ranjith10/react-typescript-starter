import React, { useState } from 'react'
import styled from 'styled-components'

type Actions = 
    | {type: 'add-todo', text: string} 
    | {type: 'remove-todo', id: number}
    | {type: 'toggle-completed', id: number}
    | {type: 'clear-completed'}

interface TodoItem {
    todo: string,
    isCompleted: boolean,
}

interface Props {
    todoList: TodoItem [],
    dispatch: (value : Actions) => void,
    setFilter: (value: string) => void,
    filter: string,
    length: number,
    pendingCount: number,
}

interface StyleProps {
    completed: boolean,
}

interface TabProps {
    active: boolean,
}

const TodoList:React.FC<Props> = ({todoList, dispatch, setFilter, filter, length, pendingCount}) => {
    const itemsText = pendingCount === 1 ? 'Item' : 'Items'

    return (
        <TodoListContainer>
            {
                length > 0 && todoList.map((item, index) => {
                    return (
                        <TodoElement key={index} completed={item.isCompleted}>
                            <div style={{display: 'flex'}}>
                                <CheckBox type='Checkbox' checked={item.isCompleted} onChange={() => dispatch({type: 'toggle-completed', id: index})}/>                            
                                {item.todo}
                            </div>
                            <div style={{cursor: 'pointer'}} onClick={() => dispatch({type: 'remove-todo', id: index})}>&#10006;</div>
                        </TodoElement>
                    )
                })
            }
            {
                length > 0 &&
                <TodoFooter>
                   {pendingCount} {itemsText} Pending 
                   <div>
                       <Tab onClick={() => setFilter('All')} active={filter === 'All'}>All</Tab>
                       <Tab onClick={() => setFilter('Active')} active={filter === 'Active'}>Active</Tab>
                       <Tab onClick={() => setFilter('Completed')} active={filter === 'Completed'}>Completed</Tab>
                   </div>
                   <div style={{cursor: 'pointer'}} onClick={() => dispatch({type: 'clear-completed'})}>Clear Completed</div>
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
const TodoElement = styled.div<StyleProps>`
    display: flex;
    width: calc(100% - 40px);
    padding: 10px 20px;
    text-transform: CAPITALIZE;
    font-weight: 600;
    color: ${props => props.completed ? 'gray' : '#000'};
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
    justify-content: space-between;
    border-bottom: 1px solid #ededed;
`

const TodoFooter = styled.div`
    display: flex;
    width: calc(100% - 40px);
    padding: 10px 20px;
    text-transform: CAPITALIZE;
    justify-content: space-between;
    border-top: 1px solid #ededed;
`

const CheckBox = styled.input`
    display: flex;
    justify-content: center;
    height: 25px;
    margin: 0 10px 0 0;
    cursor: pointer;
`
const Tab = styled.span<TabProps>`
    margin: 0 10px 0 0;
    cursor: pointer;
    padding: 1px 5px;
    border: ${props => props.active ? '1px solid gray' : '1px solid #fff' };
    border-radius: 4px;
    :hover&{
        border: 1px solid gray;
    }
`