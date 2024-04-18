import './App.css'
import React, { useState } from 'react';

function App() {
	const [test, settest] = useState('---')
	
	return <div>
		<span>{test}</span>
		<br/>
		<button onClick={() => settest('разбанить')}>разбанить</button>
		<br/>
		<button onClick={() => settest('забанить')}>забанить</button>
	</div>;
};
export default App;