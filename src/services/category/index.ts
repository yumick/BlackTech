import { server } from "../../server";

export const getAllCategory = async () => {
  const response = await server.get("products/categories");
  return response.data;
};
