interface LinkProps{
    text: string;
    framer: string;
}

function Link({text, framer} : LinkProps){
    return (
        <div className="hover:bg-zinc-200 p-2 rounded-lg h-min">
            <div className="flex align-items-center">
                {text}
            </div>
            <p className="text-xs">
                {framer}
            </p>
        </div>

    )
}

export default Link
