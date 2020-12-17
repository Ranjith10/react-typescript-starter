import React from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';

const App : React.FC = () => {
  	return (
		<div className="app">
			<TodoInput 
				title = "Todo App"
			/>
		</div>
  );
}

export default App;
