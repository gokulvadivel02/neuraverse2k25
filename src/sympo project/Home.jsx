
import React, { useEffect, useRef, useState } from 'react'

const Home = ({homeref}) => {

        const [sec,setsec]  = useState(60)
        const [min,setmin]  = useState(60)
        const [h,seth]=useState(24)
        const [d,setd]=useState(10)
        
        const second = useRef(null)
        const minute = useRef(null)
        const hour = useRef(null)
        const day = useRef(null)
        
          useEffect(()=>{
  
              second.current=setInterval(() => {
                  setsec(pre=>pre<=1? 60:pre-1)
              }, 1000);
  
  
              minute.current=setInterval(() => {
                  setmin(pre=>pre<=1? 60:pre-1)
              }, 60000);
  
  
            hour.current=setInterval(() => {
              seth(pre=>pre<=1? 24:pre-1)
            }, 3600000);
  
            day.current=setInterval(() => {
              setd(pre=>pre<1? 0:pre-1)
            }, 86400000);
  
          return () => {
            clearInterval(second.current);
            clearInterval(minute.current);
            clearInterval(hour.current);
            clearInterval(day.current);
          };
  
          },[])   

  return (
    <div className='mt-28 ' >
        <div id='home' ref={homeref} className='  flex flex-col text-center md:flex-col ml-15 mr-15 border-2 p-8 rounded-2xl
           bg-gray-800 opacity-90' >
          <h1 className='text-3xl font-extrabold  font-serif 
          text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-shadow-glow'>
            NEURAVERSE'2K25</h1>

          <h2 className='font-mono text-xl font-bold
          text-transparent bg-clip-text bg-linear-to-r/decreasing from-blue-500 to-teal-400'>Convert your ideas into action.</h2>

          <h1 className='m-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>PSV COLLEGE OF ENGINEERING AND TECHNOLOGY (krishnagiri) </h1>
          <h2 className='font-extrabold'>( department of artificial intelligence & data science )</h2>
          <p className='mt-4 font-bold'>Proudly presents </p>
          <h1 className='text-cyan-500 font-bold'>A NATIONAL LEVEL TECHINICAL SYMPOSIUM</h1>
          <h1 className='mt-4 font-semibold text-amber-300'>DATE</h1>
          <p className='font-extrabold drop-shadow-[0_0_20px_rgb(34,211,238)]'>12th may 2025</p>
          <h1 className= 'mt-4 text-amber-500 font-bold'>Going to start on ......</h1>

          <div className='flex gap-5  justify-center font-extrabold font-mono border-4 m-auto mt-8 p-4  w-fit'>
          <h1 className='border-2 p-1'>day:{d}</h1>
            <h1 className='border-2 p-1'>hour: {h}</h1>
            <h1 className='border-2 p-1'>min: {min}</h1>
            <h1 className='border-2 p-1'>sec:{sec}</h1>       
        </div>
        <button className='bg-amber-400 text-black border-solid border-4 rounded-lg w-fit m-auto mt-4 p-1'><a href="https://docs.google.com/forms/d/e/1FAIpQLSf0t2PcDzvKnOqjzCABHiwNsfWKIjlLKzKLSdFajL_9iVyW_Q/viewform?usp=sharing ">
        REGISTER</a></button>

        <div  className='  flex flex-col text-center md:flex-col  mt-8 border-2 p-8 rounded-2xl
           bg-gray-800 opacity-90'>
        <h1 className= 'mt-4 text-cyan-500 font-extrabold text-2xl drop-shadow-[0_0_20px_rgb(34,211,238)]'>Poster</h1>
        <img src="/images/poster.jpg" width={210}  alt="poster" className='border-2 p-2 rounded-lg rotate-90 m-auto' />
        <button className='bg-fuchsia-500  text-black border-solid border-4 rounded-lg w-30 m-auto font-extrabold p-1'><a href="poster.jpg" download='poster.jpg'>Download</a></button>
        </div>

        </div>

        <div className='  flex flex-col text-center md:flex-col m-auto ml-10 mr-10 mt-8 border-2 p-8 rounded-2xl bg-gray-800 opacity-90'>
          <h1 className='text-xl font-bold text-cyan-500'>About college</h1>
          <p className='mt-4 font-extrabold'>PSV college of Engineering and Technology, 
          "Success is built on a foundation of knowledge, hard work, and determination. At PSV Engineering and Technology, we lay that foundation."
          </p>
          <div className='m-8 '>
            <h1  className='text-xl font-bold text-cyan-500'>Accreditations</h1>
            <ul className='mt-4 font-extrabold'>
              <li> An autonomous institution</li>
              <li>ISO 9001-2015 Certified</li>
              <li> NAAC Accredited</li>
              <li>AICTE Approved</li>
              <li>Affiliated to Anna University, Chennai</li>
            </ul>
          </div>
        </div>

     </div>
  )
}

export default Home