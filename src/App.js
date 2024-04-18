import './App.css'
import React, { useState } from 'react';

function App() {
	const [name, setName] = useState('Name');
	const [sur, setSur] = useState('Sur');
	
	return <div>
		<span>{name}</span>
		<br/>
		<span>{sur}</span>
		<br/>
		<button onClick={() => {setName('name'); setSur('sur')}}>btn</button>
	</div>;
};
export default App;