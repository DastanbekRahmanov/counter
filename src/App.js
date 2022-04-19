import './App.css'
import {Button} from './component/Button'
import { Count } from './/Count/Count'
import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0)
	return <div className='App'>
		<Count counter = {count}/>
		<Button setCount={setCount} title='+'/>
		<Button setCount={setCount} title='-'/>
	</div>
}

export default App
