import prisma from "../app/lib/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export async function getOrders() {
  const currentUser = await getCurrentUser();
  try {
    const orders = await prisma.order
      .findMany({
       where: {
        userId: currentUser?.id,
      }
      });

    return orders
  } catch (error: any) {
    return null
  }
}
