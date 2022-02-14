import React,{useContext,useState} from 'react'
import {news} from './App'
const Display = () => {
    const [data,setData] = useContext(news);
    const [name,setName] = useState('');
    const handleSubmit = e =>{
        e.preventDefault();
        setData([...data,{newstype:name}])//representing existing data 
    }
  return (
    <div className="card">
       <div className="card-body">
      {data.map(item=><h3>{item.newstype}</h3>)}
      <form className="form" onSubmit={handleSubmit}> 
          <input type="text" onChange={(e)=>setName(e.target.value)}placeholder="Enter your news intrests"/>
          <input type="Submit" value="Add"/>
          
      </form>
      </div>
    </div>
  )
}

export default Display
