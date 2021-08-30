import {Search} from '@material-ui/icons'
import { useState } from 'react';
import './App.css';


function App() {
  const [query,setQuery]=useState("")
  const handleChange=(e)=>setQuery(e.target.value.trim())

  let result
  const pathGet = (arr1, query) => {
  var path = findPath(arr1, query);
  return path == null ? '' : 'a.' +path.join('.');
};

function findPath(obj, query) {
  for (var key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      var result = findPath(obj[key], query);
      if (result) {
        result.unshift(key);
        return result;
      }
    } else if (obj[key] === query) 
      return [key];
  }
}

const onSubmit=(e)=>{
  e.preventDefault()
 result= pathGet(arr1,query)
}
  return (
    <>
    <div className="App">
      <Search/>
     <form onSubmit={()=>onSubmit(arr1)} ><input type="text" value={query}  placeholder="Search Here" onChange={handleChange}/></form> 
    </div>
    <div>{result}</div>
    </>
    
  );
}

export default App;

const arr1 = {
  user: {
    id: 1,
    name: {
      firstName: "James",
      lastName: "Ibori"
    },
    location: {
      city: "Ikoyi",
      state: "Lagos",
      address: "One expensive house like that"
    }
  }
};
