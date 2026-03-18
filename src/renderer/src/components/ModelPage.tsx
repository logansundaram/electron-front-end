import ModelCard from "./ModelCard"
import ContentHeader from "./ContentHeader"
import PageHeader from "./PageHeader"


function ModelPage(): React.JSX.Element{
    return (
        //hardcoded 40 widebar width
        //need to add a header component later
        <div className="gap-4 ml-40 p-10">


            <PageHeader hero="models" framer="view all local and cloud models"/>

            <div className="p-4">
                <ContentHeader title="local models" framer="models ran on your machine. no data shared, ever."/>
                <div className="grid grid-cols-3 p-4 grid-rows-2 gap-4">
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                </div>
            </div>


            <div className="p-4">
                <ContentHeader title="cloud models" framer="for when the smartest LLM's are necessary"/>
                <div className="grid grid-cols-3 gap-2">
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                </div>
            </div>


        </div>
    )
}


export default ModelPage