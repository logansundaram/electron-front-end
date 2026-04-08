import PageHeader from './PageHeader'
import InputPill from './InputPill'
import RecentChats from './RecentChats'

function ProjectPage(): React.JSX.Element {
  return (
    //hardcoded width need to be fixed
    <div className="min-h-screen ml-15">
      <RecentChats />
      <PageHeader hero="chat" framer="for one-off convos and light work" />
      <InputPill />
    </div>
  )
}

export default ProjectPage
