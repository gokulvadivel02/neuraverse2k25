import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Meals = () => {
    const [item,setitem] = useState([])

    useEffect(()=>{
        const food = axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res=>
            // console.log(res.data.meals)
            setitem(res.data.meals)
        )
        
    },[])
  return (
    <div className='h-full bg-black text-blue-300'>
        {item.map(({strMeal, strMealThumb, idMeal})=>(
            <section key={idMeal}
             className='inline-block w-[300px] m-8'>
            <img src={strMealThumb}
             className='border-solid border-amber-200 border-4' />
            <li className='mt-4'>{strMeal}</li>
            <li>{idMeal}</li>
            </section>
        ))}
    </div>
  )
}

export default Meals