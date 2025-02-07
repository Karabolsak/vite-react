import { account } from "./appwriteConfig";

// Interface para o retorno do usuário
interface User {
    $id: string;
    email: string;
}


// Registrar um usuário com e-mail e senha
export const registerUser = async (email: string, password: string): Promise<User | null> => {
    try {
        const user = await account.create("unique()", email, password);
        console.log("Usuário criado:", user);
        return user;
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        return null;
    }
};

// Login de usuário
export const loginUser = async (email: string, password: string): Promise<boolean> => {
    try {
        await account.createEmailPasswordSession(email, password);
        console.log("Login realizado com sucesso");
        return true;
    } catch (error) {
        console.error("Erro ao logar:", error);
        return false;
    }
};

// Logout do usuário
export const logoutUser = async (): Promise<boolean> => {
    try {
        await account.deleteSession("current");
        console.log("Logout realizado");
        return true;
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
        return false;
    }
};
