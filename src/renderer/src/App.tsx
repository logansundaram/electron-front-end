import Sidebar from './components/Sidebar'
import ModelPage from './components/ModelPage'
import ToolPage from './components/ToolPage';
import { useState } from 'react'

function App(): React.JSX.Element {
  const [render, setRender] = useState("Home");

  return (
    <>
      <Sidebar/>
      <ModelPage/>
      <ToolPage/>
    </>
  )
}

export default App
