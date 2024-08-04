// src/types/next-auth.d.ts

import "next-auth";

// Export the User interface
export interface User {
  id: number | string;
  name: string;
  email: string;
  password: string;
  image?: string;
}

// Extend NextAuth's types
declare module "next-auth" {
  interface Session {
    user: User;
  }

  // You might not need to redefine User here if it's exported above
  interface User {
    id: number | string;
    name: string;
    email: string;
    password: string;
    image?: string;
  }
}
