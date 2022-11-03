import axios from "axios";
import { UserResponse } from "./UserResponse";

export const getUsersById = (id: number) => {
  return new Promise<UserResponse>((resolve, reject) => {
    axios
      .get(`/api/search/id?id=${id}`)
      .then((r) => resolve(r.data))
      .catch((e) => reject(e));
  });
};

export const getUsersByName = (name: string) => {
  return new Promise<UserResponse>((resolve, reject) => {
    axios
      .get(`/api/search/name?name=${name}`)
      .then((r) => resolve(r.data))
      .catch((e) => reject(e));
  });
};

export const getUsers = () => {
  return new Promise<UserResponse[]>((resolve, reject) => {
    axios
      .get(`/api/search`)
      .then((r) => resolve(r.data))
      .catch((e) => reject(e));
  });
};

export const addUser = (name: string, age: number) => {
  return new Promise<UserResponse>((resolve, reject) => {
    axios
      .post(`api/add`, { name, age })
      .then((r) => resolve(r.data))
      .catch((e) => reject(e));
  });
};
