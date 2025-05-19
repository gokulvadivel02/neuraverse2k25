import React, { useState } from 'react'

const Cal = () => {
    const [num,setnum] = useState([])
    const [show,setshow] = useState([]) 

    const handlesubmit = (e) => {
        e.preventDefault()
        if(num != ''){
          setshow(pre => [...pre,num])
          setnum('')
        }  
    }

    const handlechange = (e) => {
      setnum(e.target.value)
      
    }

  return (
    <div>
        <form onSubmit={handlesubmit} >
            <input type="text" value={num} onChange={handlechange} className='border-2' />
            <button type='submit'>submit</button>
        </form>
        <h1>{show.map((s,index)=>(
          <li key={index}>{s}</li>
        ))}</h1>
    </div>
  )
}

export default Cal