import axios from 'axios';
import { TRegisterRequest } from '../types';
import apiClient from '@/api/apiClient';

export async function registerUser(user: TRegisterRequest): Promise<any> {
  const { data } = await apiClient.post('register', user);
  return data;
}
