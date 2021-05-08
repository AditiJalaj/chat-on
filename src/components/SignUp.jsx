import axios from 'axios'
import {useState} from 'react'
import {Link, BrowserRouter,useHistory} from 'react-router-dom'
import LoginForm from './LoginForm'

const SignUp = () => {
    const history=useHistory()
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')

    const handleSignUp=async(e)=>{
        e.preventDefault()

        await axios.post("https://api.chatengine.io/users/",
        {username,
        secret:password
        },
        {
            headers:{
                "PRIVATE-KEY":"846c7116-bd3d-4b73-b4e7-c16d9ddec8d1"
            }
        }
        )
        .then((res)=>{
            console.log("I'm a new user",res)
            history.push('/login')
           
        })
    }
    return ( 
        <div className="wrapper">
        <div className="form">
        <h1 className="title">Chat-On</h1>
        <form >
        <input type="text" value={username}
        onChange={(e)=>setUserName(e.target.value)}
        className="input"
        placeholder="Username..."
        required
        />

        <input type="password"
         value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="input"
        placeholder="Password..."
        required
        />
        <div align="center">
        <button  type="submit" onClick={handleSignUp}
        className='button'>
        <span>SIGN UP</span></button>
        </div>
       
        </form>
        <BrowserRouter>
        <Link to='login' component={LoginForm}>Login</Link>
        </BrowserRouter>
        
        </div></div>
     );
}
 


export default SignUp;