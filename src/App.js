import {ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {
  if(!localStorage.getItem('username')){
    return <LoginForm/>
  }

 
    return ( 
        <div>
       <ChatEngine
       height="100vh"
       projectID="965f9b24-0f6f-40aa-b488-59b7642aa717"
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
       />
       
       </div>
     );
}
 
export default App;