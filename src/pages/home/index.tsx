import MessageContainer from "../../components/messages/message-container";
import Sidebar from "../../components/sidebar";
type Props = {};

const Index = (props: Props) => {
    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-0">
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default Index;