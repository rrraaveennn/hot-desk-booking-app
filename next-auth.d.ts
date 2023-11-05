import { DefaultSession } from "next-auth";
import { Role } from "@prisma/client";

declare module "next-auth" {
    interface Session {
        user: {
            id?: string | null | undefined;
            firstName?: string | null | undefined;
            lastName?: string | null | undefined;
            email?: string | null | undefined;
            role?: string | null | undefined;
            image?: string | null | undefined;
            role?: string | null | undefined;
        }
    }

    interface Profile {
        id: string;
        firstName: string;
        lastName: string;
        email?: string;
        image?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string | null | undefined;
        firstName?: string | null | undefined;
        lastName?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
        role?: string | null | undefined;
    }
}
  