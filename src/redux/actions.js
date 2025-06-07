// actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_PLANT_COUNT = 'SET_PLANT_COUNT'; // Add this constant

// Counter action creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const setPlantCount = (count) => ({
  type: SET_PLANT_COUNT,
  payload: count,
});

// Thunk action to fetch plant data from local JSON file
export const fetchPlantData = createAsyncThunk(
  'plants/fetchPlantData',
  async () => {
    const response = await fetch('/plantData.json'); // Fetch from public folder
    if (!response.ok) {
      throw new Error('Failed to fetch plant data');
    }
    const data = await response.json();
    return data;
  }
);
