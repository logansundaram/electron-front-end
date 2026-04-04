import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ChevronUp } from 'lucide-react'
import RecentEntry from './RecentEntry'

interface SearchBarExpandableProps {
  header: string
}

function SearchBarExpandable({ header }: SearchBarExpandableProps): React.JSX.Element {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
      <div
        onClick={() => setExpanded(!expanded)}
        className="rounded-lg px-2 py-2 hover:bg-zinc-200 w-full flex items-center"
      >
        <div className="text-sm">{header}</div>
        {expanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
      </div>
      {expanded ? (
        <div>
          <RecentEntry title="chat 1" />
          <RecentEntry title="chat 2" />
          <RecentEntry title="chat 3" />
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  )
}

export default SearchBarExpandable
