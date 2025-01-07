import "./styles.css";
import { useState } from 'react';

export default function App() {

const [name , setName] = useState('')

const handleChange = (event) =>{
      setName(event.target.value)


}
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" value={name} onChange={handleChange} />

      <button >{name}</button>
    </div>
  );
}

