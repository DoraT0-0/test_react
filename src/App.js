import './App.css'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

function App() {
	function id() {
		const id = nanoid()
		console.log(id);
	}

	const prods = [
		{id: id(), name: 'product1', cost: 100},
		{id: id(), name: 'product2', cost: 200},
		{id: id(), name: 'product3', cost: 300},
	];

	const rows = prods.map(function(item) {
		return <ul key={item.id}>
			<li>{item.name}</li>
			<li>{item.cost}</li>
		</ul>;
	});
	
	return <div>
		{rows}
	</div>;
}
export default App;