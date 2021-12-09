import { server } from "../../server";

export const getAllProducts = async () => {
  const response = await server.get("products");
  return response.data;
};

export const getSingleProducts = async (id: any) => {
  const response = await server.get(`products/${id}`);
  return response.data;
};

// Get products filtered by category

export const getProductsFilteredByCat = async (catName: string) => {
  const response = await server.get(`products/category/${catName}`);
  return response.data;
};
