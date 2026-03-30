import Link from './Link'
import { Settings } from 'lucide-react'
import { Settings2 } from 'lucide-react'
import { Hammer } from 'lucide-react'
import { Brain } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

interface SidebarProps {
  setPage: Dispatch<SetStateAction<string>>
}

function Sidebar({ setPage }: SidebarProps): React.JSX.Element {
  return (
    <div
      id="sidebar"
      className="fixed top-0 left-0 h-screen bg-zinc-50 p-4 grid grid-rows-6 text-black w-40"
    >
      <div id="header" className="text-blue-900 row-span-1 p-2">
        <button>saturday.ai</button>
      </div>
      <div id="links" className="grid grid-rows-5 row-span-4">
        <button onClick={() => setPage('chat')} className="text-left">
          <Link text="chats" framer="chats and agents" />
        </button>
        <button onClick={() => setPage('project')} className="text-left">
          <Link text="projects" framer="for in depth work" />
        </button>

        <button onClick={() => setPage('workflow')} className="text-left">
          <Link text="workflows" framer="agentic workflows" />
        </button>
        <button onClick={() => setPage('builder')} className="text-left">
          <Link text="builder" framer="add functionality" />
        </button>
      </div>
      <div id="footer" className="row-span-1 p-2 grid-rows-6 grid">
        <div className="flex justify-between row-start-6">
          <Settings />
          <Brain onClick={() => setPage('model')} />
          <Hammer onClick={() => setPage('tool')} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
