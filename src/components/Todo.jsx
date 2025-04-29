import React from 'react'
import { useState } from 'react'

const Todo = () => {
  const [todo,settodo] = useState([])
  const [input,setinput] = useState('')

  const handle = (e)=>{
    e.preventDefault()
    if(input!=""){
    settodo([...todo,input])
      setinput('')
    }
  }

  const remove=(remove)=>{
      const update=(todo.filter((_,index)=> index !== remove))
      settodo(update)
  }

  return (
    <div className='bg-black text-white h-screen '>
      <h3 className='text-2xl text-center text-amber-200 p-6'> My Todo</h3>
      <section className='text-center '>
        <form onSubmit={handle}>
          <input type="text" 
          value={input} 
          placeholder='what u wanna do'
          onChange={e=>setinput(e.target.value)} 
          className='m-4 p-2 border-solid border-2 border-amber-300 rounded-xl' />
          <button type='submit' className='p-1 border-solid border-2 border-amber-200 rounded-xl' >submit</button>
        </form>
        {todo.map((to,index)=>(
          <li key={index} className='text-amber-600'>
            {to }
            <button className='h-8 w-8 pb-1 m-2 ml-8 border-solid border-2 border-amber-200 rounded-full' onClick={()=>remove(index)}>x</button>
          </li>
        ))}
      </section>
    </div>
  )
}

export default Todo