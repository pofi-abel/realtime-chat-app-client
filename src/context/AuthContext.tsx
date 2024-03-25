import { PropsWithChildren, createContext, useContext, useState } from "react";
import { STORAGE_KEYS } from "../utils/keys";

type AuthContextValue = {
    authUser: User | null;
    setAuthUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextValue>({
    authUser: null,
    setAuthUser: () => { },
});

export const useAuthContext = () => {
    return useContext(AuthContext);
};

type AuthContextProviderProps = PropsWithChildren;
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [authUser, setAuthUser] = useState<User | null>(
        JSON.parse(localStorage.getItem(STORAGE_KEYS.chat_user) as string) || null
    );

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
