import './App.css'
import React, { useState } from 'react';


function App() {
	const texts = ['Москва', 'Екатеренбург', 'Омск', 'Воронеж'];
	const [value, setValue] = useState('');
	
	const options = texts.map((text, index) => {
		return <option key={index}>{text}</option>;
	});
	
	return <div>
		<select value={value} onChange={(event) => setValue(event.target.value)}>
			{options}
		</select>
		<p>
			ваш выбор: {value}
		</p>
	</div>;
}
export default App 