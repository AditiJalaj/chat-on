import {useState} from 'react'
import axios from 'axios'


const LoginForm = () => {
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const authObject={
            'Project-ID':'965f9b24-0f6f-40aa-b488-59b7642aa717',
            'User-Name':username,
            'User-Secret':password
        }
        try{
            //username & pass -> chatengine->give messages
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});

            //works out ->logged in
             //store username and pass to localStorage
             localStorage.setItem('username',username)
             localStorage.setItem('password',password)

             //reloading to render diff pg-- line 7 of app.js
             window.location.reload()

        }catch(err)
        {//error->try with new username
        setError('Incorrect Credentials!')
        }
    }

    return ( 
        <div className="wrapper">
        <div className="form">
        <h1 className="title">Chat-On</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={username}
        onChange={(e)=>setUserName(e.target.value)}
        className="input"
        placeholder="Username..."
        required
        />

        <input type="password" value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="input"
        placeholder="Password..."
        required
        />
        <div align="center">
        <button  type="submit" className='button'>
        <span>start chat</span></button>
        </div>
        <h2 className='error'>{error}</h2>
        </form>

        <div align="center" style={{color:'white'}}>  Test username: Aditi / Jenny 
        <p>password : 123456789 </p> </div>
        </div></div>
     );
}
 
export default LoginForm;