import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getSession } from "../auth/[...nextauth]/route";

async function GET(req: Request) {
    //session problem
    const session = await getSession();

    // const data = await prisma.user.findUnique({
    //     where: {
    //         id: session?.user.id!
    //     },
    //     select: {
    //         Booking: true
    //     }
    // });

    return NextResponse.json({
        session
    });
}

export {
    GET
}