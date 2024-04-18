import './App.css'
import React, { useState } from 'react';


function App() {
	const [checked, setChecked] = useState(true);
	
	let message;
	if (checked) {
		message = 
		<div>
			<h2>Ура, вам уже есть 18</h2>
			<p>
				здесь расположен контент только для взрослых
			</p>
		</div>;
	} else {
		message = 
		<div>
	</div>;
	}
	
	return <div>
		<input type="checkbox" checked={checked} 
			onChange={() => setChecked(!checked)} /> 
		<div>{message}</div>
	</div>;
}
export default App 