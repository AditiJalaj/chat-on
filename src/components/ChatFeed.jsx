import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
import MessageForm from './MessageForm'
import {useState,useEffect,useRef} from 'react'

const ChatFeed = (props) => {

    const {chats,activeChat,userName,messages}=props

    const chat =chats && chats[activeChat];

    const [typer,setTyper]=useState(null)


    //for scroll-to-bottom
    const dummyRef=useRef()
    useEffect(()=>{
        dummyRef.current && dummyRef.current.scrollIntoView({behavior:"smooth"})
    })
    
    const renderReadReceipts=(message, isMyMessage)=>{
        return(
            chat.people.map((person, index) => person.last_read === message.id && (
                 /* only rendering below if the person has read the msg*/ 
            <div key={`read_${index}`} className="read-receipt" style={{float: isMyMessage? 'right' : 'left', backgroundImage: person.person.avatar && `url(${person?.person?.avatar})` }} />
        ))
        )
    }
    
    //log the props
    // console.log(`current chat is  ${chat}, userName  ${userName},${messages}`)
    // console.log(props)

    const renderMessages=()=>{
        //store keys of messages
        const keys=Object.keys(messages)
        return keys.map((key,index)=>{
            const message=messages[key]
            const lastMessageKey= index===0?null : keys[index-1]
            const isMyMessage=userName===message.sender.username

            return(
                <div key={`msg_${index}`}
                 style={{width:"100%"}}>

                   <div className="message-block">
                    {
                    isMyMessage?
                    <MyMessage message={message}/>:
                    <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/> }
                </div>
                <div className="read-receipts"  
                style={{marginRight:isMyMessage?'18px':'0px', 
                marginLeft:isMyMessage?'0px':'18px'}}>

                 {renderReadReceipts(message,isMyMessage)}

                </div>
                </div>
            )
        })
    }
    
 

    if(!chat) return 'Loading..';

    return ( 
        <div className="chat-feed">
        <button className='sticky' onClick={()=>{
            localStorage.clear()
            window.location.reload()
        }}> LogOut </button>
        <div className="chat-title-container">
        
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
        {chat.people.map((person)=>
            `${person.person.username}`
        )}</div>
        </div>
        {renderMessages()}

        <div
        ref={dummyRef} 
         style={{height:'100px'}}>
        {typer?`${typer} is Typing...`:null } 
        </div>
        <div className="message-form-container">
             <MessageForm {...props} 
             
             chatId={activeChat}
             typer={typer}
             setTyper={setTyper}

             />
        </div>
        </div>
     );
}
 
export default ChatFeed;