import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, DispatchState } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<DispatchState>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector