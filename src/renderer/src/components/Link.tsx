import { type LucideIcon } from 'lucide-react' //

interface LinkProps {
  text: string
  icon: LucideIcon
  framer?: string
}

function Link({ text, icon: Icon, framer }: LinkProps) {
  return (
    <div className="flex h-min items-center gap-2 rounded-lg p-2 hover:bg-zinc-200">
      <Icon />
      <div>
        <div className="text-sm">{text}</div>
        <div className="text-xs">{framer}</div>
      </div>
    </div>
  )
}

export default Link
