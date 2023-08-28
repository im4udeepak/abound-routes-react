import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
} from "redux-persist";

import storage from "redux-persist/lib/storage/session"; // defaults to sessionStorage for web
import allReducer from "./feature/allSlice";
import { allApis } from "./services/allApis";

// const persistConfig = {
//     key: "root",
//     storage,
// };
const rootReducer = combineReducers({
    all: persistReducer({ key: "all", storage }, allReducer),
    [allApis.reducerPath]: allApis.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(allApis.middleware),
});

export const persistor = persistStore(store);