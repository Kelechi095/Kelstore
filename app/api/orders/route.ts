import prisma from "../../lib/prismadb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { amount, status, products, totalItems } = await request.json();

  await prisma.order.create({
    data: {
      userId: currentUser?.id,
      amount,
      status,
      totalItems,
      products
    }
  })

  return NextResponse.json("Order created successfully");
}

