import './App.css'
import React, { useState } from 'react';


function App() {
	const [value, setValue] = useState('');
	
	return <div>
		<select value={value} onChange={event => setValue(event.target.value)}>
			<option value="1">0-12</option>
			<option value="2">13-17</option>
			<option value="3">18-25</option>
			<option value="4">25...</option>
		</select>
		<p>
			{value === '1' && 'вы выбрали от 0 до 12 лет'}
			{value === '2' && 'вы выбрали от 13 до 17 лет'}
			{value === '3' && 'вы выбрали от 18 до 25 лет'}
			{value === '4' && 'вы выбрали старше 25 лет'}
		</p>
	</div>;
}
export default App 