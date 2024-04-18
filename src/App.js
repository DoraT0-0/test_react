import './App.css'
import React, { useState } from 'react';


function App() {
	const [value, setValue] = useState('');
	
	function sum(val){
		let n = val, sum = 0
		while(n !== 0){
			sum += n % 10
			n = Math.floor(n/10)
		}
		return sum
	}

	return <div>
		<textarea value={value} onChange={event => setValue(event.target.value)} /> 
		<p>{sum(value)}</p>
	</div>;
}
export default App 