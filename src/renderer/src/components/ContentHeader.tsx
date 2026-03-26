import { LayoutGrid } from "lucide-react";
import { TextAlignJustify } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface ContentHeaderProps{
    title: string;
    framer: string;
    grid?: boolean;
    setGrid?: Dispatch<SetStateAction<boolean>>;
}


function ContentHeader({title, framer, grid, setGrid} : ContentHeaderProps): React.JSX.Element {
    return (
        <div className="p-4 grid grid-cols-6">
            <div className="col-span-5">
                <div className="text-2xl p">
                    {title}
                </div>
                <div>
                    {framer}
                </div>
            </div>
            {setGrid && (
                <div className="flex justify-center gap-2 p-2">
                    <LayoutGrid
                        className={grid ? "text-black" : "text-zinc-400"}
                        onClick={() => setGrid(true)}
                    />
                    <TextAlignJustify
                        className={grid === false ? "text-black" : "text-zinc-400"}
                        onClick={() => setGrid(false)}
                    />
                </div>
            )}
        </div>
    )
}


export default ContentHeader
