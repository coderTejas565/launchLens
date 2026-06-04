import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })

        return NextResponse.json({
            success: true,
            data: projects,
        })
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch projects"
            },
            {
                status: 500
            }
        );
    }
}



export async function POST(req: Request){
    try {
        const body = await req.json();

        const project = await prisma.project.create({
            data: body,
        })

        return NextResponse.json({
            success: true,
            data: project,
        })
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: "Failed to create project"
            },
            {
                status: 500
            }
        )
    }
}