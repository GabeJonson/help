import axios, { AxiosPromise } from 'axios';

const request = axios.create({
  baseURL: '/',
});

export const getUsersList = () => request('users');

export const postUser = (userName: string, userBirth: string): AxiosPromise =>
  request.post(`user`, {
    userName,
    userBirth,
  });

export const putUser = (
  userId: string,
  userName: string,
  userBirth: string,
): AxiosPromise =>
  request.put(`user/${userId}`, {
    userName,
    userBirth,
  });

export const deleteUser = (userId: string): AxiosPromise =>
  request.delete(`user/${userId}`);
