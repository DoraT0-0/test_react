import './App.css'

function App() {
	const arr = [1, 2, 3, 4, 5];
	
	const res = arr.map(function(item) {
		return <li>{item}</li>;
	});
	
	return <ul>
		{res}
	</ul>;
}

export default App;
