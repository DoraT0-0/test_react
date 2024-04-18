import './App.css'
import React, { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);
	
	return <div>
		<span>{count}</span>
		<br/>
		<button onClick={() => setCount(count + 1)}>+</button>
		<br/>
		<button onClick={() => setCount(count - 1)}>-</button>
	</div>;
}
export default App