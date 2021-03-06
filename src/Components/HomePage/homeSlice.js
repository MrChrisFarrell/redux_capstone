import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCompanies, fetchPromotions } from './homeAPI';

const initialState = {
    companies: null,
    companiesStatus: 'idle',
    promotions: [],
    promotionsStatus: 'idle',
  };

export const getCompaniesAsync = createAsyncThunk(
    'home/fetchCompanies',
    async (token) => {
    const response = await fetchCompanies(token);
    console.log(response.data);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
    }
);

export const getPromotionsAsync = createAsyncThunk(
    'home/fetchPromotions',
    async (token) => {
        const response = await fetchPromotions(token);
        console.log(response.data);
        return response.data;
    }
);

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
      builder
        .addCase(getCompaniesAsync.pending, (state, action) => {
          state.companiesStatus = 'loading';
        })
        .addCase(getCompaniesAsync.fulfilled, (state, action) => {
          state.companiesStatus = 'idle';
          state.companies = action.payload;
        })
        .addCase(getCompaniesAsync.rejected, (state, action) => {
            state.companiesStatus = 'failed';
        })
        .addCase(getPromotionsAsync.pending, (state, action) => {
            state.promotionsStatus = 'loading';
        })
        .addCase(getPromotionsAsync.fulfilled, (state, action) => {
            state.promotionsStatus = 'idle';
            state.promotions = action.payload;
        })
        .addCase(getPromotionsAsync.rejected, (state, action) => {
            state.promotionsStatus = 'failed';
        });
    },
  });
  
export const { } = homeSlice.actions;

export const selectCompanies = (state) => state.home.companies;
export const selectCompaniesStatus = (state) => state.home.companiesStatus;

export const selectPromotions = (state) => state.home.promotions;
export const selectPromotionsStatus = (state) => state.home.promotionsStatus;

export default homeSlice.reducer;