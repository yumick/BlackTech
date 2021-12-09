import { server } from "../../server";

export const loginUser = async (data: any) => {
  const response = await server.post("auth/login", data);
  return response.data;
};
