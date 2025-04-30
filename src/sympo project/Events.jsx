import React, { useRef } from 'react'

const categories = [
  { image: '/images/ppt.jpg', label: 'Paper Presentation' },
  { image: '/images/quiz.jpg', label: 'Quiz' },
  { image: '/images/ps.jpg', label: 'Problem Solving' },
  { image: '/images/debug.jpg', label: 'Debugging' },
  { image: '/images/fd.jpg', label: 'Web Dev using AI' },
];

const nontech = [
  {image : '/images/code scramble.jpg',label:'Code scramble' },
  {image : '/images/logo.jpg' , label:'Logo identifier'},
  {image : '/images/photography.jpg', label : 'Photography'},
  {image : '/images/fine me.jpg', label : 'Find me.'},
  {image : '/images/esports.jpg', label : 'Esports'},
]

const Events = ({eventref}) => {
  
  return (
    
    <div id='events' ref={eventref}  className='m-10'>
      <h1 className='text-center mb-4 text-2xl font-extrabold text-gray-400 drop-shadow-[0_0_20px_rgb(34,211,238)]'>EVENTS</h1>
        <h1 className='ml-8 mb-4 text-xl font-extrabold text-cyan-600 drop-shadow-[0_0_20px_rgb(34,211,238)]'>TECH EVENTS</h1>

        <section className="flex justify-center items-center gap-8 p-6 bg-gray-800 flex-wrap border-2 rounded-xl opacity-90">
      {categories.map((cat, index) => (
        <div
          key={index}
          className="flex flex-col items-center transition-transform hover:scale-110 cursor-pointer"
        >
          <img src={cat.image} alt={cat.label} className="w-24 h-24 object-cover rounded-lg shadow-md" />
          <span className="mt-2 text-sm font-semibold font-mono text-gray-200">{cat.label}</span>
        </div>
      ))}
    </section>

    <h1 className='ml-8 mb-4 my-4 text-xl font-extrabold text-cyan-600 drop-shadow-[0_0_20px_rgb(34,211,258)]'>NONTECH EVENTS</h1>
    <section className="flex justify-center items-center gap-8 p-6 bg-gray-800 flex-wrap border-2 rounded-xl opacity-90">
      {nontech.map((cat, index) => (
        <div
          key={index}
          className="flex flex-col items-center transition-transform hover:scale-110 cursor-pointer"
        >
          <img src={cat.image} alt={cat.label} className="w-24 h-24 object-cover rounded-lg shadow-md" />
          <span className="mt-2 text-sm font-semibold font-mono text-gray-200">{cat.label}</span>
        </div>
      ))}
    </section>
        
    </div>
  )
}

export default Events