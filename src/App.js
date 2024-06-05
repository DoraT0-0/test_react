import './App.css'
import React, { useState } from 'react';
import {nanoid} from 'nanoid'

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
	const [Prop1, setProp1] = useState();
	const [Prop2, setProp2] = useState();
	const [Prop3, setProp3] = useState();

	function doSmth() {
		let copy = [...notes, {
			id: nanoid(),
			prop1: Prop1,
			prop2: Prop2,
			prop3: Prop3,}];
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
		<input onChange={event => setProp1(event.target.value)}/>
		<input onChange={event => setProp2(event.target.value)}/>
		<input onChange={event => setProp3(event.target.value)}/>
		<button onClick={doSmth}>+</button>
	</div>;
}

export default App 