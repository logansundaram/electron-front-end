import PageHeader from "./PageHeader";
import InputPill from "./InputPill";

function ChatPage() : React.JSX.Element{
    return (
        <div className="min-h-screen gap-4 ml-40 p-10 pb-36">
            <PageHeader hero="chat" framer="for one-off convos and light work"/>
            <InputPill/>
        </div>
    )
}

export default ChatPage;
