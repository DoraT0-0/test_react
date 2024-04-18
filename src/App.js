import './App.css'
import React, { useState } from 'react';

function App() {
	const [value, setValue] = useState('');
	const [value2, setValue2] = useState('');
	
	return <div>
		<input value={value} onChange={event => setValue(event.target.value)} /> 
		<br/>
		<input value={value2} onChange={event => setValue2(event.target.value)} /> 
		<br/>
		<p>text1: {value}</p>
		<p>text2: {value2}</p>
	</div>;
}
export default App