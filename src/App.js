import './App.css'
import React, { useState } from 'react';

const initNotes = [
	{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];

function App() {
	const [notes, setNotes] = useState(initNotes);
	
	function doSmth() {
		let copy = [...notes, {
			id: 'JAmjRlfQT8rLTm5tG2m12',
			prop1: 'value31',
			prop2: 'value32',
			prop3: 'value33',}];
		setNotes(copy);
	}

	const result = notes.map(note => {
		return <li key={note.id}>
			<span>{note.prop1}</span>
			<span>{note.prop2}</span>
			<span>{note.prop3}</span>
		</li>;
	});
	
	return <div>
		<ul>
			{result}
		</ul>
		<button onClick={doSmth}>+</button>
	</div>;
}

export default App 