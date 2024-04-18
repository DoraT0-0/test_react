import './App.css'
import React, { useState } from 'react';


function App() {
	const [checked, setChecked] = useState(true);
	const [result, setResult] = useState(true);
	

	return <div>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} /> <br/>
		<button onClick={() => setResult(checked)}>Button</button>
		<p>{result ? 'Привет':"Пока"}</p>
	</div>;
}
export default App 