import Link from './Link'
import SysterMonitor from './SystemMonitor'
import { MessagesSquare, Pencil } from 'lucide-react'
import { Settings } from 'lucide-react'
import { Hammer } from 'lucide-react'
import { Brain } from 'lucide-react'
import { Bot } from 'lucide-react'
import { TrendingUpDown } from 'lucide-react'

import React, { Dispatch, SetStateAction } from 'react'

interface SidebarProps {
  setPage: Dispatch<SetStateAction<string>>
}

//todo, trim the framer to make it shorter or cut it all together

function Sidebar({ setPage }: SidebarProps): React.JSX.Element {
  return (
    <div
      id="sidebar"
      className="fixed top-0 left-0 flex h-screen w-40 flex-col rounded-r-lg bg-zinc-100 p-4 text-black"
    >
      <div id="header" className="text-blue-950 row-span-1 p-2 text-xl">
        <button>saturday.ai</button>
      </div>
      <SysterMonitor />
      <div id="workspace" className="">
        <div className="text-sm">workspace</div>
        <button onClick={() => setPage('chat')} className="text-left">
          <Link text="chats" icon={MessagesSquare} framer="light work and queries" />
        </button>
        <button onClick={() => setPage('project')} className="text-left">
          <Link text="projects" icon={Bot} framer="in-depth and cross session work" />
        </button>
        <button onClick={() => setPage('builder')} className="text-left">
          <Link text="builder" icon={Pencil} framer="add additional functionality" />
        </button>
      </div>

      <div className="" id="capabilities">
        <div className="text-sm">capabilities</div>
        <button onClick={() => setPage('workflow')} className="text-left">
          <Link text="workflows" icon={TrendingUpDown} framer="view agentic workflows" />
        </button>
        <button onClick={() => setPage('tool')} className="text-left">
          <Link text="tools" icon={Hammer} framer="view tools and integrations" />
        </button>
        <button onClick={() => setPage('model')} className="text-left">
          <Link text="models" icon={Brain} framer="view local and cloud models" />
        </button>
      </div>
      <div id="footer" className="mt-auto p-2">
        <Settings onClick={() => setPage('configure')} className="rounded-lg hover:bg-zinc-200" />
      </div>
    </div>
  )
}

export default Sidebar
