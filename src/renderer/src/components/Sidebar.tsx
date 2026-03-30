import Link from './Link'
import { MessagesSquare, Pencil } from 'lucide-react'
import { Settings } from 'lucide-react'
import { Hammer } from 'lucide-react'
import { Brain } from 'lucide-react'
import { Bot } from 'lucide-react'
import { Clock } from 'lucide-react'
import { TrendingUpDown } from 'lucide-react'

import React, { Dispatch, SetStateAction } from 'react'

interface SidebarProps {
  setPage: Dispatch<SetStateAction<string>>
}

{
  //todo: remove the framer prop from the links in the sidebar and change the lin component in Link.tsx
}
function Sidebar({ setPage }: SidebarProps): React.JSX.Element {
  return (
    <div
      id="sidebar"
      className="fixed top-0 left-0 h-screen bg-zinc-100 p-4 grid grid-rows-6 text-black w-40 rounded-r-lg"
    >
      <div id="header" className="text-blue-950 row-span-1 p-2 text-xl">
        <button>saturday.ai</button>
      </div>
      <div id="links" className="grid grid-rows-5 row-span-4">
        <button onClick={() => setPage('chat')} className="text-left">
          <Link text="chats" icon={MessagesSquare} framer="light work and queries" />
        </button>
        <button onClick={() => setPage('project')} className="text-left">
          <Link text="projects" icon={Bot} />
        </button>

        <button onClick={() => setPage('workflow')} className="text-left">
          <Link text="workflows" icon={TrendingUpDown} />
        </button>
        <button onClick={() => setPage('builder')} className="text-left">
          <Link text="builder" icon={Pencil} />
        </button>
        <button onClick={() => setPage('automations')} className="text-left">
          <Link text="automations" icon={Clock} />
        </button>
      </div>
      <div id="footer" className="row-span-1 p-2 grid-rows-6 grid">
        <div className="row-start-6 flex w-full items-center justify-center gap-4 rounded-lg bg-zinc-700 py-4 px-2">
          <Settings onClick={() => setPage('configure')} className="rounded-lg hover:bg-zinc-200" />
          <Brain onClick={() => setPage('model')} className="rounded-lg hover:bg-zinc-200" />
          <Hammer onClick={() => setPage('tool')} className="rounded-lg hover:bg-zinc-200" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
