import RecentChatEntry from './RecentChatEntry'

function RecentChats(): React.JSX.Element {
  return (
    <div className="bg-slate-500 fixed w-50 h-full">
      <div>recent chats</div>
      <div className="grid grid-rows-10">
        <RecentChatEntry />
        <RecentChatEntry />
        <RecentChatEntry />
        <RecentChatEntry />
        <RecentChatEntry />
        <RecentChatEntry />
        <RecentChatEntry />
        <RecentChatEntry />
      </div>
    </div>
  )
}

export default RecentChats
