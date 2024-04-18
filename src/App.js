import './App.css'

function App() {
	function func(arg1, arg2, event) {
		console.log(arg1, arg2, event);
	}
	
	return <div>
		<button onClick={event => func('eee','eee2', 
			event)}>act</button> 
	</div>;
}
export default App;
