import Button from './Button'

function ModelCard(): React.JSX.Element {
  return (
    <div
      id="model card"
      className="grid justify-center bg-zinc-100 grid-rows-4 gap-6 items-center rounded-lg w-fit p-6 min-w-80"
    >
      <div>
        <div>gpt-oss:20b</div>
        <div className="bg-green-400 p-1 text-xs rounded-lg w-fit">local model</div>
      </div>

      <div>
        <div>metrics</div>
        <div className="grid grid-cols-3 text-xs gap-2">
          <div>
            <div>parameters</div>
            <div>20B</div>
          </div>
          <div>
            <div>context length</div>
            <div>128k</div>
          </div>
          <div>
            <div>modality</div>
            <div>chat</div>
          </div>
        </div>
      </div>

      <div>
        <div>useage</div>
        <div className="grid grid-cols-3 text-xs gap-2">
          <div>
            <div>tok/sec</div>
            <div>n/a</div>
          </div>
          <div>
            <div>vram useage</div>
            <div>n/a</div>
          </div>
          <div>
            <div>latency</div>
            <div>n/a</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button content="use model" />
        <Button content="configure" />
      </div>
    </div>
  )
}

export default ModelCard
