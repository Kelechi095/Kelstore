import prisma from "../../lib/prismadb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { productId, review, rating } = body;

  const product = await prisma.reviews.create({
     data: {
      userId: currentUser.id,
      productId,
      review,
      rating,
      reviewerImage: currentUser.image,
      reviewerName: currentUser.name,
    },
  });
  return NextResponse.json(product);
}


