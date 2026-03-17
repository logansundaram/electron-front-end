import ModelCard from "./ModelCard"


function ModelPage(): React.JSX.Element{
    return (
        //hardcoded 40 widebar width
        //need to add a header component later
        <div className="gap-4 ml-40 p-10">


            <div className="p-4">
                <div className="text-6xl">
                    models
                </div>
                <div>
                    view all local and cloud models.
                </div>
            </div>

            <div className="p-4">
                <div className="p-4">
                    <div className="text-2xl p">
                        local models
                    </div>
                    <div>
                        models ran on your machine. no data shared, ever.
                    </div>
                </div>
                <div className="grid grid-cols-3 p-4 grid-rows-2 gap-4">
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                </div>
            </div>


            <div className="p-10">
                <div className="text-2xl">
                    cloud models
                </div>
                <div>
                    for when the best and smartest LLM's are required.
                </div>
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