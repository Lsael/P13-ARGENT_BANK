import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLoggedInTrue: (state) => {
      state.value = true
    }
  }
})

export const { setIsLoggedInTrue } = loginSlice.actions

export default loginSlice.reducer