
import React,{createContext,useState} from 'react'
import Count from './Count'
import Display from './Display'

export const news = createContext();

const App = () => {
    const[data,setData]=useState([]);

  return (
    <news.Provider value={[data,setData]}>
      <center>
        <Count />
        <Display /> 
      </center>
    </news.Provider>
  )
}

export default App


