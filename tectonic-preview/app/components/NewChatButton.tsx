interface NewChatButtonProps {
  onClick: () => void;
}

const NewChatButton = ({ onClick }: NewChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors mb-4"
    >
      New Chat
    </button>
  );
};

export default NewChatButton; 