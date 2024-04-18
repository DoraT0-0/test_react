import './App.css'

function App() {
	function getDigitsSum(num){
		let sum
		for(i in num){
			sum += i
		}
		return sum
	}

	return <p>{getDigitsSum(12345)}</p>
	
}
export default App;
