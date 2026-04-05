import { type LucideIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

interface SidebarIconPorps {
  icon: LucideIcon
  setPageLink: Dispatch<SetStateAction<string>>
  page: string
}

function SidebarIcon({ icon: Icon, page, setPageLink }: SidebarIconPorps): React.JSX.Element {
  return (
    <div>
      <button
        onClick={() => setPageLink(page)}
        className="flex items-center gap-2 rounded-lg text-left p-2 hover:bg-zinc-200 w-full"
      >
        <Icon />
      </button>
    </div>
  )
}

export default SidebarIcon
