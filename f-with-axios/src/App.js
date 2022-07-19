import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [data , setData ] = useState({hits: []})
  useEffect(() => {
    const fetchData = async() => {
      const results = await axios('http://hn.algolia.com/api/v1/search?query=react')
      setData(results.data)
      console.log(results.data)
    }

    fetchData()
  }, [] )

  return (
    <>

            <ul>
              {data.hits.map(item => (
                <li key={item.objectID}> 
                  <a href={item.url}> {item.title} </a>
                 </li>
              ))}
            </ul>
  
   </>
  )
}

export default App