import './App.css'
import React, { useState } from 'react';

function Celsia(num) {
	return 5/9*(num - 32);
}

function App() {
	const [F, setF] = useState(0);
	
	function handleChange(event) {
		setF(event.target.value);
	}
	
	return <div>
		<input value={F} onChange={handleChange} />
		<p>{Celsia(F)}</p>
	</div>;
}
export default App