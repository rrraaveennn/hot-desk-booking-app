import { NextResponse } from "next/server";
import z, { unknown } from "zod";
import prisma from "@/lib/db";

interface Param {
    params: {
        date: Date;
    }
}

async function GET(req: Request, {params}: Param) {
    try {
        // Date format problem
        const date = String(params.date)

        // Gets the bookings with the desks
        const data = await prisma.booking.findMany({
            where: {
                bookedAt: date
            },
            select: {
                id: true,
                deskId: true,
                startedAt: true,
                bookedAt: true,
                endedAt: true,
                desk: {
                    select: {
                        name: true,
                        status: true
                    }
                }
            }
        });

        console.log()
        return NextResponse.json({
            data,
            message: !data && "no desks"
        });
    } catch (error) {
        console.error(error)
        return NextResponse.json({
            message: error
        });
    }
}

export {
    GET
}