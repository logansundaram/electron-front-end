import SystemMonitorEntry from './SystemMonitorEntry'

function SysterMonitor(): React.JSX.Element {
  return (
    <div className="bg-zinc-800 rounded-lg p-2">
      <div className="text-xs text-white">system monitor</div>
      <SystemMonitorEntry component="cpu" useage={95} />
      <SystemMonitorEntry component="gpu" useage={65} />
      <SystemMonitorEntry component="vram" useage={45} />
    </div>
  )
}

export default SysterMonitor
