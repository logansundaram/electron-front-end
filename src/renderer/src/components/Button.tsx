//import { useState } from 'react'

interface ButtonProps{
    content: string,
}

function Button({content} : ButtonProps): React.JSX.Element {
  //const [versions] = useState(window.electron.process.versions)

  return (
    <button className="bg-black p-1 text-white text-xs rounded-lg hover:bg-white hover:text-black h-fit">
        {content}
    </button>
  )
}

export default Button
