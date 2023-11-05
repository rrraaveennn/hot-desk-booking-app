import { NextResponse } from "next/server";
// import { Resend } from "resend";

export async function POST(req: Request) {
    // Email Verification soon...


    return NextResponse.json({
        message: "Hello World"
    });
}