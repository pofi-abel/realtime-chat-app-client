import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extract-time';
import useConversation from '../../zustand/useConversation';

type Props = {
    message: Record<string, any>;
};

const Message = ({ message }: Props) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();

    const fromMe = message.senderId === authUser?._id;
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-sky-500" : "";
    const formattedTime = extractTime(message.createdAt);
    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profilePic} alt="---" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1  iteems-center'>{formattedTime}</div>
        </div>
    );
};

export default Message;