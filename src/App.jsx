import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'
import './index.css';


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // some logic here
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup);
  
return (
    <div className="App">
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
     {featPupId !==null&& <p>{featPupId}</p>}
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}
export default App


