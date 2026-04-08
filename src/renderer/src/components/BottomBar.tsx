function BottomBar(): React.JSX.Element {
  return (
    <div className="bg-black w-full fixed bottom-0 text-white text-sm flex">
      <div className="flex gap-2 ml-auto px-2">
        <div>14 tok/sec</div>
        <div>gpt-oss:20B</div>
        <div>complex</div>
        <div>search, calculator</div>
      </div>
    </div>
  )
}

export default BottomBar
