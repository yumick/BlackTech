import { server } from "../../server";

export const getAllUsers = async () => {
  const response = await server.get("users");
  return response.data;
};

export const getSingleUser = async (id: number) => {
  const response = await server.get(`users/${id}`);
  return response.data;
};

export const updateUser = async (id: number, data: any) => {
  const response = await server.patch(`users/${id}`, data);
  return response.data;
};
