// NextAuth configuration
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { User } from "@/types/next-auth"; // Make sure the path is correct

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "name@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials): Promise<User | null> => {
        console.log("Authorizing with credentials:", credentials); // Debugging log

        const users: User[] = [
          {
            id: 1,
            name: "Admin",
            email: "admin@admin.com",
            password: "admin",
          },
          { id: 2, name: "User", email: "user@user.com", password: "use" },
        ];

        if (!credentials) return null;

        const user = users.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );

        console.log("Found user:", user); // Debugging log
        return user || null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token as any; // Type assertion if needed
      return session;
    },
  },
});
