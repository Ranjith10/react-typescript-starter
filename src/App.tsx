import React from 'react';
import './App.css';
import Todo from './Components/Todo';

const App : React.FC = () => {
  	return (
		<div className="app">
			<Todo 
				title = "Todo App"
			/>
		</div>
  );
}

export default App;
