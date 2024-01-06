import prisma from "../app/lib/prismadb";

export async function getReviewsById(id: string | null) {
  try {
    if (id) {
      const reviews = await prisma.reviews.findMany({
        where: {
          productId: id,
        },
      });

      return reviews;
    }
  } catch (error: any) {
    return null;
  }
}
