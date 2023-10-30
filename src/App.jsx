import { useState } from 'react'
import {List} from './Components/List.jsx'
import './App.css'


function App() {
  const [inputValue, setInputValue] = useState('')
  const [results, setResults] = useState([])
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    fetch( 'https://api.tvmaze.com/search/shows?q='+inputValue)
    .then((res) => res.json())
    .then(data => setResults(data))
    
  }
  console.log(results)


 



  return (
    <>
    <article className='container text-center'>
    <h1 className='m-5'>Millau TV APP</h1>
      <div className="input-group input-group-lg"> 
      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={handleInputChange}/>
      </div>
      <List results={results} />
    </article>     
    </>
  )
}

export default App
