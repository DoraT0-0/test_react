import './App.css'
import React, { useState } from 'react';


function App() {

	function data(data1, data2){
		let _data1 = new Date(data1)
		let _data2 = new Date(data2)
		return _data1.getDate() - _data2.getDate() 
	}
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [result, setResult] = useState(0);
	
	return <div>
		<input value={value1} onChange={event => setValue1(event.target.value)} /> 
		<input value={value2} onChange={event => setValue2(event.target.value)} /> 
		
		<button onClick={() => setResult(data(value1, value2))}>btn</button> 

		<p>result: {result}</p>
	</div>;
}
export default App 