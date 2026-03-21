import { useState} from 'react'
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';





export function ChatInput({chatMessages , setChatMessages}){

    const[inputText,setinputText] = useState('');

    function saveInputText(event){
      setinputText(event.target.value);

    }

    function sendMessage(){
      const newChatMessages = [
      ...chatMessages,
      {
        message : inputText,
        sender : 'user',
        id : crypto.randomUUID()
      }
    ]
 
      setChatMessages(newChatMessages);

   const response = Chatbot.getResponse(inputText);
   setChatMessages([
      ...newChatMessages,
      {
        message : response,
        sender : 'robot',
        id : crypto.randomUUID()
      }
    ]);

    setinputText('');
    }

    function handleKeyDown(event) {
          if (event.key === 'Enter') {
            sendMessage();
          }
        }
    
    return (
      // fragment prevents adding extra div and helps to group elements totgether
      <div className="chat-input-container">
          <input placeholder="send a message to ChatBot" size="30" onChange={saveInputText} onKeyDown={handleKeyDown} value={inputText} className="chat-input"/>
          <button onClick={sendMessage} className = "send-button">Send</button>
      </div>
    )
   }