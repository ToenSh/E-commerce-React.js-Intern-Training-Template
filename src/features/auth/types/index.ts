export type TLoginRequest = {
  email?: string;
  password?: string;
};
export type TRegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  age?: number;
};
export type TChangePasswordRequest = {
  userID: number;
  password: string;
};
