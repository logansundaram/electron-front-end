import { type LucideIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

interface LinkProps {
  text: string
  icon: LucideIcon
  setPageLink: Dispatch<SetStateAction<string>>
  page: string
}

function Link({ text, icon: Icon, setPageLink, page }: LinkProps) {
  return (
    <button
      onClick={() => setPageLink(page)}
      className="flex items-center gap-2 rounded-lg text-left px-4 py-2 hover:bg-zinc-200 w-full"
    >
      <Icon size={14} />
      <div className="text-sm">{text}</div>
    </button>
  )
}

export default Link
