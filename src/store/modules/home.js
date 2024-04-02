import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    location: '青岛'
  },
  reducers: {
    setLocation(state, { payload }) {
      console.log('payload', payload);
      state.location = payload
    }
  }
})

export const { setLocation } = homeSlice.actions
export default homeSlice.reducer
