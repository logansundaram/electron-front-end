import Pill from "./Pill";
//todo: make the pill component color configurable so it more modular
import Button from "./Button";

//todo: make custom css classes using tailwind to speed up development, especially with the parent div classes that are the same for every class
function ModelEntry() : React.JSX.Element {
    return (
        <div className="bg-zinc-100 grid grid-cols-3 p-4 rounded-lg">
            <div className="grid">
                <div>
                    gpt-oss:20b
                </div>
                <div className="bg-green-400 p-1 text-xs rounded-lg w-fit">
                    local model
                </div>                
            </div>


            <div className="">
                <div>
                    metrics
                </div>

                <div className="flex gap-6 text-xs">
                    <div className="flex">
                        <div>
                            size
                        </div>
                        <div>
                            12gb
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            context
                        </div>
                        <div>
                            128k
                        </div>
                    </div>

                    <div className="flex">
                        <div>
                            type
                        </div>
                        <div>
                            chat
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-2 gap-2 justify-center">
                <Button content="use model"/>
                <Button content="configure"/>
            </div>
        </div>
    )
}


export default ModelEntry;