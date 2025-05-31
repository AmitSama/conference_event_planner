import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img : "https://cdn.pixabay.com/photo/2022/02/20/02/29/projector-7023604_1280.jpg",
        name : "Projectors",
        cost : 200,
        quantity : 0,

    },
    {
        img : "https://cdn.pixabay.com/photo/2015/10/04/22/03/speakers-971975_1280.png",
        name : "Speakers",
        cost : 300,
        quantity : 0,
    },
    {
        img : "https://cdn.pixabay.com/photo/2018/08/27/18/37/microphone-3635677_1280.jpg",
        name : "Microphones",
        cost : 400,
        quantity : 0,
    },
    {
        img : "https://cdn.pixabay.com/photo/2019/03/14/08/21/whiteboard-4054377_1280.jpg",
        name : "Whiteboards",
        cost : 500,
        quantity : 0,
    },
    {
        img : "https://cdn.pixabay.com/photo/2017/08/06/22/17/building-2596951_1280.jpg",
        name : "Signage",
        cost : 600,
        quantity : 0,
    }
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
          item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
