import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from './store'

export const useAppSelecter: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useCounterSelector = () => useAppSelecter((s) => s.counter)
export const useElementSelector = () => useAppSelecter((s) => s.element)
