import ToolCard from "./ToolCard";
import PageHeader from "./PageHeader";
import ContentHeader from "./ContentHeader";


function ToolPage(): React.JSX.Element {
    return (
        <div className="gap-4 ml-40 p-10">
            <PageHeader hero="tools" framer="view all tools"/>

            <ContentHeader title="local tools" framer="tools that will operate on machine, guardrails come preinstalled"/>
            <ToolCard title="calculator" type="local integration" description="this is the description of the calculator tool"/>

        </div>
    )
}


export default ToolPage