import conf from "../conf.js/conf";// Ensure the path is correct
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {  
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {

            console.log("error",error);
            return this.login({email, password});
        }
    }

    async login({ email, password }) {
        try {
            
         return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Error in login:",error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Error in getCurrentUser:",error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Error in logout:", error);
        }
    }
}

const authService = new AuthService();
export default authService;
