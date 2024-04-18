import './App.css'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

function App() {
	function func() {
		const id = nanoid()
		console.log(id);
	}
	
	return <div>
		<button onClick={func}>act</button> 
	</div>;
}
export default App;