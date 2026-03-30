import PageHeader from './PageHeader'
import ProjectConfigurator from './ProjectConfigurator'
import InputPill from './InputPill'

function ProjectPage() {
  return (
    <div className="gap-4 ml-40 p-10">
      <PageHeader hero="projects" framer="for more in-depth and rigourous work" />
      <ProjectConfigurator />
      
    </div>
  )
}

export default ProjectPage
