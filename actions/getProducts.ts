import prisma from "../app/lib/prismadb";

export interface IProductParams {
  category?: string | null;
  searchTerm?: string | null;
}

export async function getProducts(params: IProductParams) {
  try {
    const { category, searchTerm } = params;

    let searchString = searchTerm;

    if (!searchTerm) {
      searchString = "";
    }

    let query: any = {};

    if (category) {
      query.category = category;
    }

    const products = await prisma.product.findMany({
      where: {
        ...query,
        OR: [
          {
            name: {
              contains: searchString,
              mode: "insensitive",
            },
            description: {
              contains: searchString,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    return products;
  } catch (error: any) {
    return null;
  }
}

export async function getProductsx() {
  try {
    const products = await prisma.product.findMany();

    return products;
  } catch (error: any) {
    return null;
  }
}
