import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from 'socket.io-client';


interface SocketContextValue {
    // @ts-ignore
    socket: SocketIOClient.Socket | null;
    onlineUsers: string[]; 
}

export const SocketContext = createContext<SocketContextValue>({
    socket: null,
    onlineUsers: [],
});

export const useSocketContext = () => {
    return useContext(SocketContext);
};

type SocketContextProviderProps = PropsWithChildren;
export const SocketContextProvider = ({ children }: SocketContextProviderProps) => {
    // @ts-ignore
    const [socket, setSocket] = useState<SocketIOClient.Socket | null>();
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io(import.meta.env.SERVER_URI, {
                query: {
                    userId: authUser._id
                }
            });
            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

        } else {
            if (socket) {
                socket?.close();
                setSocket(socket);
            }
        }

        return () => socket?.close();
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};