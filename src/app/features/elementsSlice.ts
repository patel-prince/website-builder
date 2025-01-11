import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IElement {
  name: string
  tagname: string
}

export interface ElementState {
  elements: IElement[]
}

const initialState: ElementState = {
  elements: []
}

const elementSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    elementCreated(state, action: PayloadAction<IElement>) {
      state.elements = [...state.elements, action.payload]
    }
  }
})

export const { elementCreated } = elementSlice.actions
export const elementReducer = elementSlice.reducer
