import './App.css'
import React, { useState } from 'react';


function App() {

	function num(num_){
		let n = num_, b = 0
		while(n != 0){ 
			b += n % 10
			n = Math.floor(n / 10)
		}
		return b
	}

	const [value1, setValue1] = useState(0);
	const [result, setResult] = useState(0);
	return <div>
		<input value={value1} onChange={event => setValue1(event.target.value)} /> 
		
		<button onClick={() => setResult(num(value1))}>btn</button> 

		<p>result: {result}</p>
	</div>;
}
export default App 