import React from 'react'

const Register = ({registerref}) => {
  return (
    <div ref={registerref} className='  flex flex-col text-center  md:flex-col w-[300px] border-2 p-8 rounded-2xl m-auto 
    bg-gray-800 opacity-90'>
      <h1 className='ml-8 mb-4 my-4 text-2xl text-center font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgb(34,211,258)] '>Registration</h1>
      <img src="qrcode.png" width={200} className='ml-[15%] mt-8' />
      <button className='bg-amber-400 text-black border-solid border-4 rounded-lg w-fit m-auto mt-8 p-1'><a href="https://docs.google.com/forms/d/e/1FAIpQLSf0t2PcDzvKnOqjzCABHiwNsfWKIjlLKzKLSdFajL_9iVyW_Q/viewform?usp=sharing ">
      REGISTER</a></button>
    </div>
  )
}

export default Register