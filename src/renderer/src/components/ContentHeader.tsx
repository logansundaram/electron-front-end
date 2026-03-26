import { LayoutGrid } from "lucide-react";
import { TextAlignJustify } from "lucide-react";

interface ContentHeaderProps{
    title: string;
    framer: string;
    setGrid: Dispatch<SetStateAction<string>>;
}


function ContentHeader({title, framer, setGrid} : ContentHeaderProps): React.JSX.Element {
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
            <div className="flex justify-center gap-2 p-2">
                <LayoutGrid/>
                <TextAlignJustify/>
            </div>
        </div>
    )
}


export default ContentHeader