import * as React from 'react'

interface FormElements extends HTMLFormControlsCollection {
    usernameInput: HTMLInputElement
}

interface UsernameFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

const Form = ({onSubmitUsername}: {onSubmitUsername: (username: string) => void}) => {

    const handleSubmit = (event: React.FormEvent<UsernameFormElement>) => {
        event.preventDefault()
        onSubmitUsername('sample')
    }

    return (
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor='usernameinput'>Username</label>
                <input id='usernameinput' type='text' />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form