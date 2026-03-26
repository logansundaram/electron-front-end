import ToolCard from "./ToolCard";
import PageHeader from "./PageHeader";
import ContentHeader from "./ContentHeader";


function ToolPage(): React.JSX.Element {
    return (
        <div className="gap-4 ml-40 p-10">
            <PageHeader hero="tools" framer="view all tools"/>

            <div>
                <ContentHeader title="local tools" framer="tools that will operate on machine, guardrails come preinstalled"/>
                <div className="grid grid-cols-3 gap-5 p-5">
                    <ToolCard title="calculator" type="local integration" description="this is the description of the calculator tool"/>
                    <ToolCard title="calculator" type="local integration" description="this is the description of the calculator tool"/>
                    <ToolCard title="calculator" type="local integration" description="this is the description of the calculator tool"/>
                </div>
            </div>

            <div>
                <ContentHeader title="API tools" framer="tools that call an API"/>
                <div className="grid grid-cols-3">
                    <ToolCard title="calculator" type="local integration" description="this is the description of the calculator tool"/>
                    <ToolCard title="calculator" type="local integration" description="this is the description of the calculator tool"/>
                    <ToolCard title="calculator" type="local integration" description="this is the description of the calculator tool"/>
                </div>
            </div>

        </div>
    )
}


export default ToolPage