import { api } from "./client";
import { User } from "../types";

export async function register(input: {
  email: string;
  password: string;
  name?: string;
}) {
  const response = await api.post<{ user: User; token: string }>("/auth/register", input);
  return response.data;
}

export async function login(input: { email: string; password: string }) {
  const response = await api.post<{ user: User; token: string }>("/auth/login", input);
  return response.data;
}

export async function me() {
  const response = await api.get<{ user: User }>("/auth/me");
  return response.data.user;
}
