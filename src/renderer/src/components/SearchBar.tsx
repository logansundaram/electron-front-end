function SearchBar(): React.JSX.Element {
  return (
    <div className="m-1">
      <form>
        <input
          type="text"
          className="w-full min-w-0 rounded-lg bg-zinc-200 placeholder:text-xs placeholder:text-center p-1"
          placeholder="search chats/agents"
        ></input>
      </form>
    </div>
  )
}

export default SearchBar
