import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
import MessageForm from './MessageForm'

const ChatFeed = (props) => {

    const {chats,activeChat, userName,messages}=props

    const chat =chats && chats[activeChat];

    // console.log(`current chat is  ${chat}, username  ${userName},${messages}`)
    // console.log(props)

    const renderMessages=()=>{

        //store keys of messages
        const keys=Object.keys(messages)
        return keys.map((key,index)=>{
            const message=messages[key]
            const lastMessage
        })
    }
    
    renderMessages()

    return ( 
        <div>Chatfeed</div>
     );
}
 
export default ChatFeed;