import './App.css'
import React, { useState } from 'react';


function App() {
	const [value, setValue] = useState(1);
	
	function changeHandler(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<span>Python</span>
		<input
			type="radio"
			name="radio"
			value="Python"
			checked={value === 'Python' ? true : false}
			onChange={changeHandler}
		/>
		<br/>
		<span>JavaScript</span>
		<input
			type="radio"
			name="radio"
			value="JavaScript"
			checked={value === 'JavaScript' ? true : false}
			onChange={changeHandler}
		/>
		<br/>
		<span>C++</span>
		<input
			type="radio"
			name="radio"
			value="C++"
			checked={value === 'C++' ? true : false}
			onChange={changeHandler}
		/>
		<p>{value === 'JavaScript' ? value + ' Молодец!' :value}</p>
	</div>
}
export default App 