import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const feedbacks = await prisma.feedback.findMany({
            include: {
                project: true,
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        return NextResponse.json({
            success: true,
            count: feedbacks.length,
            data: feedbacks
        })
    } catch (error) {
        console.error("GET Feedback Error:", error)

        return NextResponse.json({
            success: false,
            message: "Failed to fetch feedback"
        },
        { status: 500}
    )
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const feedback = await prisma.feedback.create({
            data: {
                rating: body.rating,
                strengths: body.strengths,
                improvements: body.improvements,
                projectId: body.projectId
            }
        })

        return NextResponse.json(
            {
                success: true,
                message: "Feedback submitted sucessfully",
                data: feedback
            },
            { status: 201}
        )
    } catch (error) {
        console.error("POST Feedback Error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to submit feedback"
            },
            { status: 500 }
        )
    }
}