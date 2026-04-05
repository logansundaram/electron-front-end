import { Search } from 'lucide-react'
import { MessagesSquare, Pencil } from 'lucide-react'
import { Hammer } from 'lucide-react'
import { Brain } from 'lucide-react'
import { Bot } from 'lucide-react'
import { TrendingUpDown } from 'lucide-react'
import { Settings } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

import SidebarIcon from './SidebarIcon'

interface SidebarPropsv1 {
  setPage: Dispatch<SetStateAction<string>>
}

function Sidebarv1({ setPage }: SidebarPropsv1): React.JSX.Element {
  return (
    <div
      id="sidebar"
      className="fixed top-0 left-0 flex h-screen w-15 flex-col rounded-r-lg bg-slate-400 items-center p-2"
    >
      <SidebarIcon icon={MessagesSquare} setPageLink={setPage} page="chat" />
      <SidebarIcon icon={Bot} setPageLink={setPage} page="project" />
      <SidebarIcon icon={Pencil} setPageLink={setPage} page="builder" />
      <SidebarIcon icon={TrendingUpDown} setPageLink={setPage} page="workflow" />
      <SidebarIcon icon={Hammer} setPageLink={setPage} page="tool" />
      <SidebarIcon icon={Brain} setPageLink={setPage} page="model" />
      <SidebarIcon icon={Search} setPageLink={setPage} page="chat" />
      <div className="mt-auto">
        <SidebarIcon icon={Settings} setPageLink={setPage} page="configure" />
      </div>
    </div>
  )
}

export default Sidebarv1
