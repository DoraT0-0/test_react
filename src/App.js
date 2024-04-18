import './App.css'
import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [value, setValue] = useState('')
	function doSmth(index) {
		setValue(notes[index])
	}

	const result = notes.map((note, index) => {
		return <li key={index} onClick = {() => doSmth(index)}>
			{note}
		</li>;
	});
	
	return <div>
		<ul>
			<input value={value} onChange={event => setValue(event.target.value)}/>
			{result}
		</ul>
	</div>;
}
export default App 