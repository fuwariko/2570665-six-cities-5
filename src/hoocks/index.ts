import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, State} from '../DataTypes/state.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
