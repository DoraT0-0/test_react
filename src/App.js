import './App.css'

function App() {
	function getDigitsSum(num){
		let sum
		for(i in num){
			sum += i
		}
		return sum
	}

	return <div>{getDigitsSum(123)}</div>
	
}
export default App;
