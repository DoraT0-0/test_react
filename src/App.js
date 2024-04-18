import './App.css'

function App() {
	function func(arg1, arg2, event) {
		console.log(arg1, arg2, event);
	}
	
	return <div>
		<button onClick={event => func(event, 'eee','eee2')}>act</button> 
	</div>;
}
export default App;
