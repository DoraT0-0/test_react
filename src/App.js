import './App.css'
import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [value, setValue] = useState('')

	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});
	
	function changeHandler(value){
		let copy = [...notes, value];
		setNotes(copy);
	}
	return <div>
		<ul>
			<input value={value} onChange={event => setValue(event.target.value)}/>
			<button onClick={() => changeHandler(value)}>+</button>
			{result}
		</ul>
	</div>;
}
export default App 