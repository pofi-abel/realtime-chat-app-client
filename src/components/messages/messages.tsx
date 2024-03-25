import { useEffect, useRef } from 'react';
import { useGetMessages } from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/message.skeleton';
import Message from './message';
import { useListenMessages } from '../../hooks/useListenMessages';

type Props = {};

const Messages = (props: Props) => {

    const { messages, loading } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef(null);


    useEffect(() => {
        // @ts-ignore
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading && messages.length > 0 && messages.map((message: any) => (
                <div key={message?._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}
            {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && !messages.length && (
                <p className='text-center'>Send a message to start the conversation</p>
            )}
        </div>
    );
};

export default Messages;