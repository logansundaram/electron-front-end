interface PillProps{
    content: string;
}


function Pill({content} : PillProps){
    return (
        <div className="">
            {content}
        </div>
    )
}


export default Pill