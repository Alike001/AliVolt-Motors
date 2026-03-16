import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: ["Falcon Ev", "Storm EV", "Horizon EV"]
}

const carSlice = createSlice({
  name: "car" ,
  initialState,
  reducer: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer