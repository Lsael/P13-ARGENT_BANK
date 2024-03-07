import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDatas: {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    userId: undefined,
  },
  token: false
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDatas: (state, action) => {
      state.userDatas = action.payload
      return state
    },
    setToken: (state, action) => {
      state.token = action.payload
      return state
    }
  }
})

export const { setUserDatas, setToken } = userSlice.actions

export default userSlice.reducer