import './App.css'
import React, { useState } from 'react';

function App() {
	const [name, setName] = useState('Name');
	const [sur, setSur] = useState('Sur');
	const [age, setAge] = useState(19);
	return <div>
		<span>{name}</span>
		<br/>
		<span>{sur}</span>
		<br/>
		<span>{age}</span>
	</div>
};
export default App;