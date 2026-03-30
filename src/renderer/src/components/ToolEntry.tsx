import Button from "./Button";


interface ToolCardProps{
    title: string;
    type: string;
    description: string;
}

function ToolCard({title, type, description} : ToolCardProps): React.JSX.Element{
    return (
        <div className="grid justify-center bg-zinc-100 grid-rows-4 gap-2 p-5 w-fit h-min rounded-lg">
            <div>
                <div>
                    {title}
                </div>
                <div className="text-xs bg-zinc-300 w-fit p-1 rounded-lg">
                    {type}
                </div>
            </div>
            <div className="grid grid-rows-2">
                <div>
                    {description}
                </div>
            </div>

            <div className="grid grid-cols-2">
                <div>
                    <div>
                        success rate
                    </div>
                    <div>
                        100%
                    </div>
                </div>
                <div>
                    <div>
                        latency
                    </div>
                    <div>
                        5ns
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <Button content="configure"/>
                <Button content="delete tool"/>
            </div>
        </div>
    )
}


export default ToolCard