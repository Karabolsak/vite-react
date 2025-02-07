import { Client, Account, Databases } from "appwrite";

// Criando o cliente do Appwrite
const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // URL do Appwrite
    .setProject("67a557300000545da4eb"); // Substitua pelo ID do seu projeto

// Criando instâncias para autenticação e banco de dados
const account = new Account(client);
const database = new Databases(client);

export { client, account, database };
