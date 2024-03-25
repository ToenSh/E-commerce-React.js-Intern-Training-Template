import { PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../../../types';
import { createAppSlice } from '../../../app/createAppSlice';
import {
  TChangePasswordRequest,
  TLoginRequest,
  TRegisterRequest,
} from '../types';
import { loginWithCredentials } from '../api/login';
import { registerUser } from '../api/register';
import JwtManager from '../utils/jwtManager';
import { changeUserPassword } from '../api/changePassword';

export interface UserSliceState {
  value: TUser | null;
}
const initialState: UserSliceState = {
  value: null,
};

export const userSlice = createAppSlice({
  name: 'user',
  initialState: initialState,
  reducers: (create) => ({
    set: create.reducer((state, action: PayloadAction<TUser>) => {
      state.value = action.payload;
    }),
    login: create.asyncThunk(
      async (payload: TLoginRequest) => {
        const response = await loginWithCredentials(payload);
        return response;
      },
      {
        fulfilled: (state, action) => {
          state.value = action.payload.user;
          JwtManager.setAccessToken(action.payload.accessToken);
        },
        rejected: (action) => {
          console.log(action);
        },
      }
    ),
    signup: create.asyncThunk(
      async (payload: TRegisterRequest) => {
        const response = await registerUser(payload);
        return response;
      },
      {
        fulfilled: (state, action) => {
          state.value = action.payload.user;
          JwtManager.setAccessToken(action.payload.accessToken);
        },
        rejected: (_state) => {
          console.log('register failed');
        },
      }
    ),
    logout: create.asyncThunk(
      async () => {
        JwtManager.clearToken(); // mockup api call
        return;
      },
      {
        fulfilled: (state) => {
          state.value = null;
        },
        rejected: (_state) => {
          console.log('register failed');
        },
      }
    ),
    changePassword: create.asyncThunk(
      async (payload: TChangePasswordRequest) => {
        const response = await changeUserPassword(payload);
        return response.data;
      },
      {
        fulfilled: () => {
          console.log('password updated successfully');
        },
        rejected: () => {
          console.log('there was an error updating the password');
        },
      }
    ),
  }),
  selectors: {
    selectUser: (state) => state.value,
  },
});

export const { set, login, signup, logout, changePassword } = userSlice.actions;

export const { selectUser } = userSlice.selectors;
