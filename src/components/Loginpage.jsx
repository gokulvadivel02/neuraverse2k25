import React, { useState } from 'react'

const Loginpage = () => {
    const [form,setform] = useState([{
        username :'',
        password :''
    }])

    const handlesubmit=(e)=>{
        e.preventDefault()

        if (username != "" && password != "") {
            alert('login success')
        }
    }

    const handlechange=(e)=>{
        const { name, value } = e.target;
        setform((prev) => ({
            ...prev,
      [name]: value,
    }));
    }

  return (

    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" 
            name='username'
            value={form.username}
            placeholder='username' 
            onChange={handlechange}/>

            <input type="text" 
            name='password'
            value={form.password}
            placeholder='password' 
            onChange={handlechange}/>
            <button type='submit' onSubmit={handlesubmit}>submit</button>
        </form>

        <h1>{form.username} </h1>
        <h1> {form.password}</h1>

    </div>
  )
}

export default Loginpage