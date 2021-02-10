import { createSlice } from "@reduxjs/toolkit";

export const listItems = createSlice({
  name: "item",
  initialState: [
    {
      name: "Grilled Chicken Burger",
      src: require("../Assets/Images/Grilled_Chicken_Burger.png"),
      cost: 250,
      count: 0,
    },
    {
      name: "Paneer Burger",
      src: require("../Assets/Images/Paneer_Burger.png"),
      cost: 350,
      count: 0,
    },
    {
      name: "Cheese Burger",
      src: require("../Assets/Images/Cheese_Burger.png"),
      cost: 200,
      count: 0,
    },
    {
      name: "Veg Burger",
      src: require("../Assets/Images/Veg_Burger.png"),
      cost: 150,
      count: 0,
    },
    {
      name: "Fish Burger",
      src: require("../Assets/Images/Fish_Burger.png"),
      cost: 200,
      count: 0,
    },
  ],
  reducers: {
    increment: (state, action) => {
      let { name } = action.payload;
      let itemIndex = state.findIndex((item) => item.name === name);
      state[itemIndex].count += 1;
      return state;
    },
    decrement: (state, action) => {
      return state.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            count: action.payload.count - 1,
          };
        }
        return item;
      });
    },
  },
});

export const { increment, decrement } = listItems.actions;

export const items = (state) => state.item;

export default listItems.reducer;
