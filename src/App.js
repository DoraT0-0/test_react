import './App.css'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

function App() {
	function id() {
		const id = nanoid()
		console.log(id);
	}
	
	return <div>
		<button onClick={id}>act</button> 
	</div>;
}
export default App;