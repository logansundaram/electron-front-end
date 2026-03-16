import Link from "./Link"
import { Settings } from 'lucide-react'
import { Settings2 } from "lucide-react"
import { Hammer } from "lucide-react"

function Sidebar(): React.JSX.Element {

  return (
    <div id="sidebar" className="fixed top-0 left-0 h-screen bg-zinc-50 p-4 grid grid-rows-6 text-black w-40">
        <div id="header" className="text-blue-900 row-span-1 p-2">
            <button>
                saturday.ai
            </button>
        </div>
        <div id="links" className="grid grid-rows row-span-4">
            <Link text="threads" framer="chats and agents"/>
            <Link text="projects" framer="for in depth work"/>
            <Link text="tools" framer="local tools and API's"/>
            <Link text="models" framer="local/cloud models"/>
            <Link text="workflows" framer="agentic workflows"/>
            <Link text="builder" framer="add functionality"/>
        </div>
        <div id="footer" className="row-span-1 p-2 grid-rows-6 grid">
            <div className="flex justify-between row-start-6">
                <Settings/>
                <Settings2/>
                <Hammer/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
