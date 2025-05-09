interface Conversation {
  id: string;
  title: string;
}

interface ConversationListProps {
  conversations: Conversation[];
  activeChat: string | null;
  onSelectChat: (chatId: string) => void;
}

const ConversationList = ({ conversations, activeChat, onSelectChat }: ConversationListProps) => {
  return (
    <div className="space-y-2">
      {conversations.map((conversation) => (
        <button
          key={conversation.id}
          onClick={() => onSelectChat(conversation.id)}
          className={`w-full text-left p-2 rounded-lg transition-colors ${
            activeChat === conversation.id
              ? 'bg-blue-100 text-blue-700'
              : 'hover:bg-gray-100'
          }`}
        >
          {conversation.title}
        </button>
      ))}
    </div>
  );
};

export default ConversationList; 