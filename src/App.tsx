import React from 'react';
import './App.css';
import Form from './Components/Form';
import Todo from './Components/Todo';

const App : React.FC = () => {
  	return (
		<div className="app">
			{/* <Todo 
				title = "Todo App"
			/> */}
			<Form 
				onSubmitUsername = {(name) => console.log(name)}			
			/>
		</div>
  );
}

export default App;
