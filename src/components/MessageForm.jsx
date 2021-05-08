import { SendOutlined ,PictureOutlined} from '@ant-design/icons'
import {useState} from 'react'
import {sendMessage, isTyping } from 'react-chat-engine'

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds ,typer, setTyper} = props;

    const typerHandler=(val)=>{
      if(!typer){ 
         setTyper(val)  }

      setTimeout(()=>{
        setTyper(null)
      },1500)
    }

    const handleChange = (e) => {
      setValue(e.target.value);
      isTyping(props, chatId,(data)=>{typerHandler(data.person)});
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const text = value.trim();
  
      if (text.length > 0) {
        sendMessage(creds, chatId, { text });
      }
  
      setValue('');
    };

    const handleUpload=(event)=>{
        sendMessage(creds,chatId,{files:event.target.files,text:''})
    }

    return (  
        <form className="message-form" onSubmit={handleSubmit}>
        <input 
        className="message-input"
        placeholder="Send message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}/>

        <label htmlFor="upload-button">
        <span className="image-button">
        <PictureOutlined className="picture-icon"/>
         </span>
        </label>

        <input 
        type="file"
        multiple={false}
        id="upload-button"
        style={{display:'none'}}
        onChange={handleUpload}
        />

        <button type="submit" className='send-button'>
        <SendOutlined className="send-icon"/>
        </button>
        </form>
    );
}
 
export default MessageForm;