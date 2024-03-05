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
    },
    setIsLoggedInFalse: (state) => {
      state.value = false
    }
  }
})

export const { setIsLoggedInTrue, setIsLoggedInFalse } = loginSlice.actions

export default loginSlice.reducer