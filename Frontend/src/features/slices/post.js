import { createSlice } from '@reduxjs/toolkit'
import { createPost } from '../actions/postActions';
const initialState = {
  loading: false,
  title:'',
  specification:'',
  description: '',
  dailyPrice: 0,
  weeklyPrice: 0,
  monthlyPrice: 0,
  depositAmount: 0,
  category: '',
  city: '',
  state: '',
  locality: '',
  error: null,
  success: false, // for monitoring the registration process.
  message:'',
}

const postSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addPostDetails: (state, action) => {
        state.title = action.payload.title;
        state.specification = action.payload.specification;
        state.description = action.payload.description;
    },
    addPostPrice: (state, action) => {
        state.dailyPrice = action.payload.dailyPrice;
        state.weeklyPrice = action.payload.weeklyPrice;
        state.monthlyPrice = action.payload.monthlyPrice;
        state.depositAmount = action.payload.depositAmount;
        state.category = action.payload.category;
    },
    addPostLocation: (state, action) => {
        state.city = action.payload.city;
        state.state = action.payload.state;
        state.locality = action.payload.locality;
    }
  },
  extraReducers: (builder) => {
    // register user
    builder.addCase(createPost.pending, (state) => {
      state.loading = true
      state.error = null
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false
      state.success = true
      state.message = action.payload;
    });
    builder.addCase(createPost.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    });

  }
})
export const { addPostDetails, addPostPrice, addPostLocation } = postSlice.actions;
export default postSlice.reducer