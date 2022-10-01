import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

const URL = 'https://makeup-api.herokuapp.com/api/v1/products.json'

function App() {
const [brand, setBrand] = useState('')
const [name, setName] = useState('')
const [description, setDescription] = useState('')
const [websitelink, setWebsitelink] = useState('')
const [taglist, setTaglist] = useState('')


 // useEffectillä haetaan api vaan kerran backendistä


  function search() {
    axios.get(URL)
    .then((response) => {
      //console.log(response)
      const makeup = response.data
      setBrand(makeup.brand)
      setName(makeup.name)
      setDescription(makeup.description)
      setWebsitelink(makeup.websitelink)
      setTaglist(makeup.taglist)
     
      
    }).catch(error => {
      alert(error)

    })
  }
  
 
 return (
    <div style={{margin:50}}>
      <div className="App">
        <div className='container'>
          <h3> The Makeup Seacher</h3>
          <input type="text" onChange={e=> setName(e.target.value)}></input>
          <button onClick={search}>Search</button>
          <div>
            <output>
              {brand}
              {name}
              {description}
              {websitelink}
              {taglist}
            </output>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default App;