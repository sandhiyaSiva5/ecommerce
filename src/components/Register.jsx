import React, { useState } from 'react'
import "./Register.scss"
import axios from 'axios'
const Register = () => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        number: '',
        password: ""
    })

    const handleChange =(e) =>{
        setDetails({...details , [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const response =await axios.post("http://localhost:8080/api/auth/register", details)
        console.log(response);
        
    }

    return (
        <div id="register">
            <div className='content'>
                <h2 className="">Sign up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="field">
                        <p>Usename :</p>
                        <input type="text" name='name' onChange={handleChange} />
                    </div>
                    <div className="field">
                        <p>Email :</p>
                        <input type="text" name='email' onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <p>Number :</p>
                        <input type="text" name='number' onChange={handleChange} />
                    </div>
                    <div className="field">
                        <p>password :</p>
                        <input type="text" name='password' onChange={handleChange}/>
                    </div>
                    <div>
                        <button type='submit'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;