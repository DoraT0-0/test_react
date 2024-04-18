import './App.css'
import React, { useState } from 'react';


function App() {
	const [value, setValue] = useState('text');
	
	return <div>
		<input defaultValue={value} />
	</div>;
}
export default App 