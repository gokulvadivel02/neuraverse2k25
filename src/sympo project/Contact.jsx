import React from 'react'

const Contact = ({contactref}) => {
  return (
    <div ref={contactref}  className='  flex flex-col text-center  md:flex-col w-[450px] border-2 p-8 rounded-2xl m-auto mt-8
    bg-gray-800 opacity-90'>
      <h1 className='m-auto text-2xl text-center font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgb(34,211,258)] '>contact</h1>
      
      <div className='  text-center border-2 p-8 rounded-2xl m-auto mt-8 
    bg-gray-800 opacity-90'>
          <h1 className='mt-4 mb-4 font-bold'>Staff coordinators</h1>
          <h1>Ms.s.Sowmiya :- " 89402 89688 "</h1>
          <h1>Mrs.k.Savitha :- " 95973 23432 "</h1>
        </div>

        <div className='  text-center border-2 p-8 rounded-2xl m-auto mt-8 
    bg-gray-800 opacity-90'>
          <h1 className='mt-4 mb-4 font-extrabold'>Student coordinators</h1>
          <h1>Ukeshkumar :- " 91595 10131 "</h1>
          <h1>Jayashree :- " 84280 25220 "</h1>
        </div>

      </div>
  )
}

export default Contact