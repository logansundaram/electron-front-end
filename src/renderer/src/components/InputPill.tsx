import { Plus } from 'lucide-react'

function InputPill(): React.JSX.Element {
  //need to be able to incorporate a workflow/modl/tool configurator
  //need to make UI choide on where to store the chat and project history
  return (
    <div className="fixed bottom-0 left-40 right-0 px-10 pb-10">
      <div className="mx-auto grid w-full max-w-3xl grid-cols-[auto_1fr] items-center gap-3 rounded-2xl bg-black p-3 text-white">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900"
        >
          <Plus />
        </button>
        <form action="" className="w-full">
          <input
            type="text"
            className="w-full bg-transparent focus:outline-none focus:ring-0"
            placeholder="input query"
          />
        </form>
      </div>
    </div>
  )
}

export default InputPill
