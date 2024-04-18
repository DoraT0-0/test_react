import './App.css'
import React, { useState } from 'react';

const initDate = {
	year:  2025,
	month: 12,
	day:   31,
}

function App() {
	function getDayOfWeek(date) {
		const dayOfWeek = new Date(date).getDay();
		return isNaN(dayOfWeek) ? null :
		  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
	}
	const [obj, setObj] = useState(initDate);
	let data_ = obj.year+'-'+obj.month+'-'+obj.day
	function handleChange(prop, event) {
		setObj({...obj, ...{[prop]: event.target.value}});
	}
	return <div>
		<input value={obj.day} onChange={event => handleChange('day', event)} /> 
		<input value={obj.month} onChange={event => handleChange('month', event)} /> 
		<input value={obj.year} onChange={event => handleChange('year', event)} /> 
		
		<br />
		<p>{getDayOfWeek(data_)}</p>
	</div>;
}
export default App 