import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { account } from "./appwriteConfig";

interface AuthContextType {
    user: any | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const currentUser = await account.get();
                setUser(currentUser);
            } catch {
                setUser(null);
            }
        };
        getUser();
    }, []);

    const login = async (email: string, password: string) => {
        await account.createEmailPasswordSession(email, password);
        const currentUser = await account.get();
        setUser(currentUser);
    };   

    const logout = async () => {
        await account.deleteSession("current");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de AuthProvider");
    }
    return context;
};
