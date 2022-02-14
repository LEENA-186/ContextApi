import React ,{useContext} from 'react'
import {news} from './App'

const Count = () => {
    const[data, setData] = useContext(news)
  return (
    <div className="card">
       <div className="card-body">
      <h2>Count:{data.length}</h2>
      </div>
    </div>
  )
}

export default Count
