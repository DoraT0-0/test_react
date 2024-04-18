import './App.css'
import React, { useState } from 'react';


function App() {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [value3, setValue3] = useState(0);
	const [value4, setValue4] = useState(0);
	const [value5, setValue5] = useState(0);
	return <div>
		<input value={value1} onChange={event => setValue1(+event.target.value)} />
		<input value={value2} onChange={event => setValue2(+event.target.value)} />
		<input value={value3} onChange={event => setValue3(+event.target.value)} />
		<input value={value4} onChange={event => setValue4(+event.target.value)} />
		<input value={value5} onChange={event => setValue5(+event.target.value)} />
		<p>result: {(value1 + value2 + value3 + value4 + value5)/5}</p>
	</div>
}
export default App