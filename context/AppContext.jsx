import { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return <AppContext.Provider>{children}</AppContext.Provider>;
};
