import { useState } from 'react';
import { SendOutlined, PictureOutlined,LogoutOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const [loggedOut, setLoggedOut] = useState(false)
  // const navigate =  useNavigate('')
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  const logout = ()=> {
    const check = window.localStorage.clear();
    setLoggedOut(true)
    if(loggedOut === check){
       return <LoginForm />
    }
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
      <button type="button" className="send-button">
       <LogoutOutlined  className="send-icon" onClick={logout}/>
      </button>
    </form>
    
  );
};

export default MessageForm;