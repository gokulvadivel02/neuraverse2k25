import React, { useRef } from 'react'
import Navbar from './sympo project/Navbar'
import Home from './sympo project/Home'
import Events from './sympo project/Events'
import Register from './sympo project/Register'
import Contact from './sympo project/Contact'

const App = () => {
  const mainhomeref = useRef(null)
  const maineventref = useRef(null)
  const mainscheduleref = useRef(null)
  const mainregisterref = useRef(null)
  const maincontactrref = useRef(null)
  
  return (
    <div className='bg-black text-white h-fit w-fit ' 
    style={{background : 'url("/images/bggif001.gif")'}}   >
      
      <Navbar home={mainhomeref} event={maineventref} schedule={mainscheduleref} 
      register={mainregisterref} contact={maincontactrref} /> <br /> 
      <Home homeref={mainhomeref}/>
      <Events eventref={maineventref}/>
      <Register registerref={mainregisterref}/>
      <Contact contactref= {maincontactrref}/>
    </div>
  )
}

export default App