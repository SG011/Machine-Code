'use client';

import { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ConversationList from './components/ConversationList';
import NewChatButton from './components/NewChatButton';

const Home = () => {
  const [conversations, setConversations] = useState<Array<{ id: string; title: string }>>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);

  const handleNewChat = () => {
    const newChatId = Date.now().toString();
    setConversations([...conversations, { id: newChatId, title: `Chat ${conversations.length + 1}` }]);
    setActiveChat(newChatId);
  };

  return (
    <main className="flex h-screen bg-gray-100">
      {/* Left sidebar with conversations */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <NewChatButton onClick={handleNewChat} />
        <ConversationList 
          conversations={conversations}
          activeChat={activeChat}
          onSelectChat={setActiveChat}
        />
      </div>

      {/* Main chat area */}
      <div className="flex-1">
        {activeChat ? (
          <ChatWindow chatId={activeChat} />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a chat or create a new one
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
