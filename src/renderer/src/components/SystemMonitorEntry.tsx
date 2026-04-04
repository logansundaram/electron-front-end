interface SystemMonitorEntryProps {
  component: string
  useage: number
}

function SystemMonitorEntry({ component, useage }: SystemMonitorEntryProps): React.JSX.Element {
  return (
    <div className="text-xs flex">
      <div>{component}</div>
      <div className="flex-1 text-center">{useage}</div>
    </div>
  )
}

export default SystemMonitorEntry
