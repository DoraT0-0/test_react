import './App.css'
import React, { useState } from 'react';

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	
	function doSmth(index) {
		let copy = Object.assign([], notes);
		if(!index) copy.splice(0, 1) 
		else copy.splice(index, index)
		setNotes(copy);
	}

	const result = notes.map((note, index) => {
		return <><li key={index}>
			{note}
		</li><button onClick={() => doSmth(index)}>{index}</button></>;
	});
	
	return <div>
		<ul>
			{result}
		</ul>
	</div>;
}
export default App 