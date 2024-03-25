import axios from 'axios';
import { TLoginRequest } from '../types';
import { TUser } from '../../../types';
import { jwtDecode } from 'jwt-decode';
export type TUserInfo = {
  user: TUser;
  accessToken: string;
};
export async function loginWithCredentials(
  credentials: TLoginRequest
): Promise<TUserInfo> {
  try {
    const { data } = await axios.post('login', credentials);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function me(token: string): Promise<TUser> {
  try {
    let userId = jwtDecode(token).sub;
    let result: TUser = await (await axios.get(`users/${userId}`)).data;
    return result;
  } catch (e) {
    throw e;
  }
}
