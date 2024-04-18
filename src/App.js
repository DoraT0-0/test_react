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
	return <div>
		<p>{obj.year}</p>
		<p>{obj.month}</p>
		<p>{obj.day}</p>
		<p>{getDayOfWeek(data_)}</p>
	</div>;
}
export default App 