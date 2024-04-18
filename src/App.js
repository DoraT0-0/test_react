import './App.css'
import React, { useState } from 'react';


function App() {
	const [value, setValue] = useState('');
	
	
	return <div>
		<select value={value} onChange={event => setValue(event.target.value)}>
			<option>Москва</option>
			<option>Екатеренбург</option>
			<option>Омск</option>
			<option>Воронеж</option>
		</select>
		<p>
			ваш выбор: {value}
		</p>
	</div>;
}
export default App 