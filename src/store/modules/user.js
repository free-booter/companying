import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentAddress: {},
    currentPerson: {}
  },
  reducers: {
    setCurrentAddress(state, { payload }) {
      state.currentAddress = payload
    },
    setCurrentPerson(state, { payload }) {
      state.currentPerson = payload
    }

  }
})

export const { setCurrentAddress, setCurrentPerson } = userSlice.actions
export default userSlice.reducer
