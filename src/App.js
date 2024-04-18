import './App.css'
import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	
	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});
	
	function changeHandler(){
		let copy = [...notes, notes[notes.length - 1]+1];
		setNotes(copy);
	}

	return <div>
		<ul>
			<button onClick={() => changeHandler(0)}>+</button>
			{result}
		</ul>
	</div>;
}
export default App 