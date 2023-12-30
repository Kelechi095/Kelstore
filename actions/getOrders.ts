import prisma from "../app/lib/prismadb";
import axios from "axios";

export async function getOrders() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
      },

      orderBy: {
        dateCreated: "desc",
      },
    });

    return orders;
  } catch (error: any) {
    return null;
  }
}
