import './App.css'
import React, { useState } from 'react';


function App() {
	const [checked1, setChecked1] = useState(true);
	const [checked2, setChecked2] = useState(true);
	const [checked3, setChecked3] = useState(true);
	

	return <div>
		<span>JS: </span><input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} /> <br/>
		<span>HTML: </span><input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} /> <br/>
		<span>CSS: </span><input type="checkbox" checked={checked3} onChange={() => setChecked3(!checked3)} /> <br/>

		<p>JS: {checked1 ? 'yes': 'no'}</p>
		<p>HTML: {checked2 ? 'yes': 'no'}</p>
		<p>CSS: {checked3 ? 'yes': 'no'}</p>
	</div>;
}
export default App 