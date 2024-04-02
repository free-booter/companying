import { createSlice } from '@reduxjs/toolkit';

const informationSlice = createSlice({
  name: 'information',
  initialState: {
    detailData: {}
  },
  reducers: {
    setDetailData(state, { payload }) {
      console.log('setDetailData', payload);
      state.detailData = payload
    }
  }
})

export const { setDetailData } = informationSlice.actions
export default informationSlice.reducer
