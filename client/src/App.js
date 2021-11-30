import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './components'

import 'stream-chat-react/dist/css/index.css';
import './App.css';

const apiKey = process.env.REACT_APP_API_KEY

const client = StreamChat.getInstance(apiKey)
const authToken = false



function App() {
  if(!authToken) return <Auth />

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer 

        />
        <ChannelContainer 

        />
      </Chat>
      Hello world
    </div>
  );
}

export default App;
