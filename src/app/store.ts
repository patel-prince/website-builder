import { configureStore } from '@reduxjs/toolkit'

import { counterReducer } from './features/counterSlice'
import { elementReducer } from './features/elementsSlice'

export const store = configureStore({
  reducer: { counter: counterReducer, element: elementReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
