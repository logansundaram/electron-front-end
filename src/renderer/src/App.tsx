import Sidebar from './components/Sidebar'
import ChatPage from './components/ChatPage'
import ProjectPage from './components/ProjectPage'
import ToolPage from './components/ToolPage'
import ModelPage from './components/ModelPage'
import BuilderPage from './components/BuilderPage'
import ConfigurePage from './components/ConfigurePage'
import { useState } from 'react'
import WorkflowPage from './components/WorkflowPage'

function App(): React.JSX.Element {
  const [page, setPage] = useState('model')

  const changePage = (newPage) => {
    setPage(newPage)
  }

  return (
    <div>
      <Sidebar setPage={changePage} />
      {page == 'chat' ? (
        <ChatPage />
      ) : page == 'project' ? (
        <ProjectPage />
      ) : page == 'tool' ? (
        <ToolPage />
      ) : page == 'model' ? (
        <ModelPage />
      ) : page == 'workflow' ? (
        <WorkflowPage />
      ) : page == 'builder' ? (
        <BuilderPage />
      ) : page == 'configure' ? (
        <ConfigurePage />
      ) : (
        <div>404</div>
      )}
    </div>
  )
}

export default App
