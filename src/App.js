import {ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed.js'

const App = () => {
    return ( 
        <div>
       <ChatEngine
       height="100vh"
       projectID="965f9b24-0f6f-40aa-b488-59b7642aa717"
       userName="Aditi"
       userSecret="123456789"
       renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
       />
       </div>
     );
}
 
export default App;