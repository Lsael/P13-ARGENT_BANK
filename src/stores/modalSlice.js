import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    newFirstname: "",
    newLastname: "",
    modaleState: false,
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setNewFirstname: (state, action) => {
      state.newFirstname = action.payload
    },
    setNewLastname: (state, action) => {
      state.newLastname = action.payload
    },
    setModalState: (state, action) => {
      state.modalState = action.payload
    }
  }
})

export const { setNewFirstname, setNewLastname, setModalState } = modalSlice.actions

export default modalSlice.reducer