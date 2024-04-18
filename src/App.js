import './App.css'
import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [value, setValue] = useState('')
	const [i, seti] = useState(0)
	function doSmth(value) {
		let copy = [...notes]
		copy[i] = value
		setNotes(copy)
	}

	const result = notes.map((note, index) => {
		return <li key={index} onClick={() => {seti(index)}}>
			{note}
		</li>;
	});
	
	return <div>
		<ul>
			<input value={value} onBlur={() => doSmth(value)} onChange={event => setValue(event.target.value)}/>
			{result}
		</ul>
	</div>;
}
export default App 