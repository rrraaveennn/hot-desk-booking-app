"use server"

import { getSession } from "@/app/api/auth/[...nextauth]/route"
import z from "zod";
import prisma from "@/lib/db";
import { DeskStatus } from "@prisma/client";

const FormSchema = z.object({
    dob: z.date({
      required_error: "Invalid date.",
    }),
});

async function getBookings() {
    const session = await getSession();
    

    const data = await prisma.booking.findMany({
        where: {
            userId: session?.user.id!
        },
        include: {
            desk: true
        }
    });

    return data;
}


async function addBooking() {
    const session = await getSession();

    if (!session?.user) {
        return {
            message: "UNAUTHORIZED"
        }
    }

    // await prisma.booking.create({
    //     data: {
    //         deskId: "654fb47b6b85b672200e695a" as string,
    //         userId: session.user.id as string,
    //     }
    // })
}

async function getAvailableDesks(value: z.infer<typeof FormSchema>) {
    const parsed = FormSchema.safeParse(value);

    if (parsed.success) {
        const data = await prisma.booking.findMany({
            include: {
                desk: true
            }
        });

        const filteredDates = data.map((item) => {
            return ((item.bookedAt.getDate() === value.dob.getDate()) &&
                (item.bookedAt.getMonth() === value.dob.getMonth())
                &&
                (item.bookedAt.getFullYear() === value.dob.getFullYear()) &&
                (item.desk.status === DeskStatus.available) && item)
        });

        if (!filteredDates[0]) {
            return {
                message: "No Bookings"
            }
        }
        return filteredDates
    }
    return {
        message: "Validation Failed"
    }
}


export {
    getAvailableDesks,
    getBookings
}


/**
 * ACTIONS:
 * getDesks
 * getDeskById
 * getAvailableDesks
 * getDisabledDesks
 * getBookings
 * getBookingById
 * addBooking
 * addDesk
 * deleteBooking
 * editBookingById
 * editDeskById
 * editUserById
 * getUsers
 * getUserById
 * deleteUserById
 */