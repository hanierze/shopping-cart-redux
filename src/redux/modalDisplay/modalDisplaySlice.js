import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",

  initialState: {
    showModal: false,
  },

  reducers: {
    showModal: (state) => {
        state.showModal = true;
    },
    hideModal: (state) => {
        state.showModal = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const selectModal = (state) =>  state.modalState.showModal;
export default modalSlice.reducer;
