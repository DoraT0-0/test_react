import './App.css'
import React, { useState } from 'react';


function App() {
	const [value, setValue] = useState('');
	
	function translit(val){
		let hash_table = {
			'А': 'A','Б': 'B','В': 'V','Г': 'G','Д': 'D','Е': 'E','Ё': 'E','Ж': 'ZH','З': 'Z','И': 'I','Й': 'I','К': 'K','Л': 'L','М': 'M','Н': 'N','О': 'O','П': 'P','Р': 'R','С': 'S','Т': 'T','У': 'U','Ф': 'F','Х': 'KH','Ц': 'TS','Ч': 'CH','Ш': 'SH','Щ': 'SHCH','Ы': 'Y','Ь': '-','Ъ': 'IE','Э': 'E','Ю': 'IU','Я': 'IA',
			'а': 'a','б': 'b','в': 'v','г': 'g','д': 'd','е': 'e','ё': 'e','ж': 'zh','з': 'z','и': 'i','й': 'i','к': 'k','л': 'l','м': 'm','н': 'n','о': 'o','п': 'p','р': 'r','с': 's','т': 't','у': 'u','ф': 'f','х': 'kh','ц': 'ts','ч': 'ch','ш': 'sh','щ': 'shch','ы': 'y','ь': '-','ъ': 'ie','э': 'e','ю': 'iu','я': 'ia',
		}
		let text = ''
		for(let i = 0;i<val.length;i++){
			if(val[i] in hash_table){
				text += hash_table[val[i]]
			}
		}
		return text
		
	}

	return <div>
		<textarea value={value} onChange={event => setValue(event.target.value)} /> 
		<p>{translit(value)}</p>
	</div>;
}
export default App 