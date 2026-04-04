import SystemMonitorEntry from './SystemMonitorEntry'

function SysterMonitor(): React.JSX.Element {
  return (
    <div className=" p-2">
      <div className="text-xs">model loaded: gpt-oss:20b</div>
      <div className="grid grid-cols-2 grid-rows-2">
        <SystemMonitorEntry component="cpu" useage={95} />
        <SystemMonitorEntry component="gpu" useage={65} />
        <SystemMonitorEntry component="vram" useage={45} />
        <SystemMonitorEntry component="ram" useage={35} />
      </div>
    </div>
  )
}

export default SysterMonitor
