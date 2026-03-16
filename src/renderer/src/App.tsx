import Button from './components/Button'
import Sidebar from './components/Sidebar'
import ModelCard from './components/ModelCard'
import ToolCard from './components/ToolCard'


function App(): React.JSX.Element {
  return (
    <>
      <Button content="Click Me"/>
      <Sidebar/>
      <ModelCard/>
      <ToolCard title="calculator" type="local integration" description="this is the description of the calculator tool"/>
    </>
  )
}

export default App
