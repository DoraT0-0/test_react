import './App.css'
import React, { useState } from 'react';

function age_(num) {
	return 2024-num;
}

function App() {
	const [age, setAge] = useState(0);
	
	function handleChange(event) {
		setAge(event.target.value);
	}
	
	return <div>
		<input value={age} onChange={handleChange} />
		<p>{age_(age)}</p>
	</div>;
}
export default App