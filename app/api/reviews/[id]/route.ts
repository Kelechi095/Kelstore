import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "../../../lib/prismadb";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const reviews = await prisma.reviews.findMany({
    where: {
      productId: params.id,
    },
  });

  return NextResponse.json(reviews);
}
