import React, { useEffect, useRef } from 'react'
import { useState } from 'react'


const Navbar = ({home,event,register,contact}) => {
    const [navopen,setnavopen] = useState(false)
    const [width,setwidth] = useState(window.innerWidth)
    
    useEffect(()=>{
      const set =()=>{
        setwidth(window.innerWidth)
      }
    },[])
   
    const opennav = () =>{
        setnavopen(!navopen)
    }

    const homescroll = (e)=>{
        e.preventDefault()
        home.current.scrollIntoView({ behavior: 'smooth' })
    }
    
    const eventscroll = (e)=>{
      e.preventDefault()
      event.current.scrollIntoView({ behavior: 'smooth' })
  }


const registerscroll = (e)=>{
  e.preventDefault()
  register.current.scrollIntoView({ behavior: 'smooth' })
}

const contactscroll = (e)=>{
  e.preventDefault()
  contact.current.scrollIntoView({ behavior: 'smooth' })
}

  return (
    
    <div className=' flex justify-center items-center gap-4 
       text-black p-4 fixed z-50 bg-black w-full opacity-90 rounded-xl'>
     {/* style={{background : 'url("")'}} */} 
        <img src="/images/psvlogo.jpg" width='70px'
                    className='rounded-full  '/>

        <div className=' font-extrabold'>
        <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 
            font-serif text-shadow-glow ' >
            NEURAVERSE'2K25
        </h1>
        <p className=' text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  mask-radial-from-neutral-100  '  >convert your ideas into action.</p>
        </div>

      {(navopen || width >= 768) &&  (     
          <nav className={`
            ${navopen ? 'absolute z-50 top-24  bg-black text-white w-52 rounded-lg p-4 font-serif'  : 'hidden'}
            md:block ml-5
          `} >
              <ul className=' flex flex-col md:flex-row  items-center  text-sm gap-4 font-extrabold 
                text-transparent bg-clip-text bg-linear-to-r/longer from-indigo-500 to-teal-400'>
                <button className='ml-32 pb-1 pr-1 pl-1 md:hidden 'onClick={()=>setnavopen(!navopen)} >x</button>
                  <li className=' ' ><a onClick={homescroll} href="">HOME</a></li>
                  <li className='' ><a  onClick={eventscroll} href="">EVENTS</a></li>
                  <li className='' ><a onClick={registerscroll} href="">REGISTER</a></li>
                  <li className='' ><a onClick={contactscroll} href="">CONTACT</a></li>
                  <button className='bg-amber-400 text-black border-solid border-4 rounded-lg w-20 m-4'><a href="https://docs.google.com/forms/d/e/1FAIpQLSf0t2PcDzvKnOqjzCABHiwNsfWKIjlLKzKLSdFajL_9iVyW_Q/viewform?usp=sharing ">REGISTER</a></button>
              </ul>
          </nav>        
  )}

    <button className=' md:hidden  rounded-lg p-1 text-white  ' onClick={opennav}><img src="menu.jpg" width={50} /></button>
    </div>
    
  )
}

export default Navbar