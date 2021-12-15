import React from 'react';
import { ChatEngine} from 'react-chat-engine'

const ChatEngine = () => {
return(
    <div>
      <ChatEngine
        height="100vh"
        projectID="f614164d-2d0d-4d6f-899c-816fa8b48dae"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps }/>}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    </div>
)
}
export default ChatEngine