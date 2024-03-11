import axios from 'axios';
import { TChangePasswordRequest } from '../types';

export async function changeUserPassword({
  userID,
  password,
}: TChangePasswordRequest) {
  const { data } = await axios.patch(`/users/${userID}`, password);
  return data;
}
