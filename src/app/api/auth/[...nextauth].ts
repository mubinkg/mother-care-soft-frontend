import NextAuth , {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions : NextAuthOptions = {
    session:{
        strategy:"jwt"
    },
    providers:[
        CredentialsProvider({
            name: "Credentails",
            
            async authorize(credentials, req){
                
                const {email, password} = credentials;
                
                return {}
            }
        })
    ]
}