import ModelCard from "./ModelCard"
import ModelEntry from "./ModelEntry"
import ContentHeader from "./ContentHeader"
import PageHeader from "./PageHeader"
import { useState } from "react"


/*interface changePageProps{
    check: boolean;
}*/


function ModelPage(): React.JSX.Element{
    const [grid, setGrid] = useState(true);

    const gridView = (
        <div className="grid grid-cols-3 p-4 gap-4 place-items-center">
            <ModelCard/>
            <ModelCard/>
            <ModelCard/>
            <ModelCard/>
            <ModelCard/>
            <ModelCard/>
        </div>
    )

    const tableView = (
        <div className="p-4 grid gap-2">
            <ModelEntry/>
            <ModelEntry/>
            <ModelEntry/>
            <ModelEntry/>
        </div>
    )

    return (
        //hardcoded 40 widebar width
        //need to add a header component later
        <div className="gap-4 ml-40 p-10">

            <PageHeader hero="models" framer="view all local and cloud models"/>
            <div className="p-4">
                <ContentHeader
                    title="local models"
                    framer="models ran on your machine. no data shared, ever."
                    grid={grid}
                    setGrid={setGrid}
                />
                {grid ? gridView : tableView}
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
