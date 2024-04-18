import './App.css'
import React, { useState } from 'react';

function App() {
	const [but, setBut] = useState(false);
	const [userstatus, setuserstatus] = useState('---')

	return <div>
		<span>{userstatus}</span>
		<br/>
		<button onClick={() => {setBut(!but); setuserstatus(but ? 'разбанен': 'забанен')}}>{but ? 'разбанить': 'забанить'}</button>
	</div>;
}
export default App