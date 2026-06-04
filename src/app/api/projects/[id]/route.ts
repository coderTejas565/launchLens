import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{id: string}>}) {
    const { id } = await params;

    const project = await prisma.project.findUnique({
        where: { id },
        include: {
            feedbacks: true,
        }
    });

    return NextResponse.json({
        success: true,
        data: project
    })
}

export async function PATCH(req: Request,{ params }: { params : Promise<{id: string}>}
) {
    const { id } = await params;
    const body = await req.json()

    const project = await prisma.project.update({
        where: { id },
        data: body,
    });

    return NextResponse.json({
        success: true,
        data: project
    })
}

export async function DELETE(req: Request, { params }: { params: Promise<{id: string}>}) {
    const { id } = await params;

    await prisma.project.delete({
        where: { id }
    });

    return NextResponse.json({
        success: true,
        message: "Project deleted"
    })
}