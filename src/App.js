import './App.css'
import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	
	function doSmth(index) {
		let copy = Object.assign([], notes);
		copy[index] = notes[index]**2;
		setNotes(copy);
	}

	const result = notes.map((note, index) => {
		return <li key={index} onClick={() => doSmth(index)}>
			{note}
		</li>;
	});
	
	return <div>
		<ul>
			{result}
		</ul>
	</div>;
}
export default App 