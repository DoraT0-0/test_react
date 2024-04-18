import './App.css'
import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	function doSmth() {
		let copy = [...notes]
		copy.reverse()
		setNotes(copy)
	}

	const result = notes.map((note, index) => {
		return <li key={index}>
			{note}
		</li>;
	});
	
	return <div>
		<ul>
			<button onClick={() => doSmth()}>reverse</button>
			{result}
		</ul>
	</div>;
}
export default App 