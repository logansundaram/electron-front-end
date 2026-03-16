interface ToolCardProps{
    title: string;
    type: string;
    description: string;
}

function ToolCard({title, type, description} : ToolCardProps): React.JSX.Element{
    return (
        <div className="grid justify-center bg-zinc-100 m-10 grid-rows-2 gap-4">
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
        </div>
    )
}


export default ToolCard