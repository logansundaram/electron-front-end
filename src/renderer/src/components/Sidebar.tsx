import Link from './Link'
import SysterMonitor from './SystemMonitor'
import SearchBar from './SearchBar'
import { Search } from 'lucide-react'
import { MessagesSquare, Pencil } from 'lucide-react'
import { ListTodo } from 'lucide-react'
import { Settings } from 'lucide-react'
import { Hammer } from 'lucide-react'
import { Brain } from 'lucide-react'
import { Bot } from 'lucide-react'
import { TrendingUpDown } from 'lucide-react'
import SearchBarExpandable from './SidebarExpandable'
import React, { Dispatch, SetStateAction } from 'react'

interface SidebarProps {
  setPage: Dispatch<SetStateAction<string>>
}

//todo, trim the framer to make it shorter or cut it all together

function Sidebar({ setPage }: SidebarProps): React.JSX.Element {
  return (
    <div
      id="sidebar"
      className="fixed top-0 left-0 flex h-screen w-40 flex-col rounded-r-lg bg-zinc-100 p-2 text-black"
    >
      <div className="">
        <div id="header" className="text-blue-950 py-2 px-4 text-xl">
          <button>saturday.ai</button>
        </div>
        <div className="">
          <Link text="chat" icon={MessagesSquare} setPageLink={setPage} page="chat" />
          <Link text="agent" icon={Bot} setPageLink={setPage} page="project" />
          <hr className="bg-black m-1" />
          <Link text="builder" icon={Pencil} setPageLink={setPage} page="builder" />
          <Link text="workflows" icon={TrendingUpDown} setPageLink={setPage} page="workflow" />
          <Link text="tools" icon={Hammer} setPageLink={setPage} page="tool" />
          <Link text="models" icon={Brain} setPageLink={setPage} page="model" />
          <hr className="bg-black m-1" />
          <Link text="search" icon={Search} setPageLink={setPage} page="chat" />
        </div>
      </div>

      <SearchBarExpandable header="recent agents" />

      <SearchBarExpandable header="recent chats" />
      <div id="footer" className="mt-auto rounded-lg bg-zinc-200">
        <SysterMonitor />
        <div className="hover:bg-black hover:text-white">
          <Link text="settings" icon={Settings} setPageLink={setPage} page="configure" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
