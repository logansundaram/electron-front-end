import RecentChats from './RecentChats'

function ChatPage(): React.JSX.Element {
  return (
    //hardcoded width need to be fixed
    <div className="min-h-screen ml-15">
      <RecentChats />
    </div>
  )
}

export default ChatPage
