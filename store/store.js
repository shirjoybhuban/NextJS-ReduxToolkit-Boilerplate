import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import users from './slices/usersSlice';
import counter from './slices/counterSlice';
import { authSlice } from './slices/authSlice';

const combinedReducer = combineReducers({
	counter,
	users,
});

//master reducer for the server side rendereing
const masterReducer = (state, action) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			counter: {
				count: state.counter.count + action.payload.counter.count,
			},
			users: {
				users: [...action.payload.users.users, ...state.users.users],
			},
		};
		return nextState;
	} else {
		return combinedReducer(state, action);
	}
};

export const makeStore = () =>
	configureStore({
		reducer: {
			masterReducer,
			[authSlice.reducerPath]: authSlice.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(authSlice.middleware),
	});

export const wrapper = createWrapper(makeStore, { debug: true });
