interface RecentEntryProps {
  title: string
}

function RecentEntry({ title }: RecentEntryProps): React.JSX.Element {
  return <div className="hover:bg-zinc-200 text-xs px-4 py-2 rounded-lg">{title}</div>
}

export default RecentEntry
