import { server } from "../../server";

export const getAllCart = async () => {
  const response = await server.get("carts");
  return response.data;
};

export const getSingleCart = async (id: number) => {
  const response = await server.get(`carts/${id}`);
  return response.data;
};
