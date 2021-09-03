import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchToken, fetchUser } from './loginAPI';

const initialState = {
    token: {},
    tokenStatus: 'idle',
    user: {},
    userStatus: 'idle',
  };

export const loginAsync = createAsyncThunk(
    'login/fetchToken',
    async (username, password) => {
    const loginInfo = {'username':username, 'password':password};
    const response = await fetchToken(loginInfo);
    console.log(response.data);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
    }
);

export const getUserAsync = createAsyncThunk(
    'login/fetchUser',
    async (username, token) => {
        const response = await fetchUser(username, token);
        console.log(response.data);
        return response.data;
    }
);

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
      builder
        .addCase(loginAsync.pending, (state, action) => {
          state.tokenStatus = 'loading';
        })
        .addCase(loginAsync.fulfilled, (state, action) => {
          state.tokenStatus = 'idle';
          state.token = action.payload;
        })
        .addCase(loginAsync.rejected, (state, action) => {
            state.tokenStatus = 'failed';
        })
        .addCase(getUserAsync.pending, (state, action) => {
            state.userStatus = 'loading';
        })
        .addCase(getUserAsync.fulfilled, (state, action) => {
            state.userStatus = 'idle';
            state.user = action.payload;
        })
        .addCase(getUserAsync.rejected, (state, action) => {
            state.userStatus = 'failed';
        });
    },
  });
  
export const { } = loginSlice.actions;

export const selectToken = (state) => state.login.token;

export const selectUser = (state) => state.login.user;

export default loginSlice.reducer;