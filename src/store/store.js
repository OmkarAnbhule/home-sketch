import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import localforage from "localforage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import userReducer from "./slices/userSlice";

// Configure LocalForage
localforage.config({
    driver: [
        localforage.INDEXEDDB, // Preferred method
        localforage.LOCALSTORAGE, // Fallback
        localforage.WEBSQL, // Final fallback
    ],
    name: "homesketch",
    storeName: "homesketch",
    version: 1.0,
    description: "home sketch store",
});

localforage
    .ready()
    .then(() => console.log("LocalForage is ready for use"))
    .catch((err) => console.error("Error initializing LocalForage:", err));

// Combine reducers
const combinedReducer = combineReducers({
    user: userReducer,
});

const rootReducer = (state, action) => {
    if (action.type === "RESET") {
        return combinedReducer(undefined, action);
    }
    return combinedReducer(state, action);
};

const persistConfig = {
    key: "redux",
    storage: localforage,
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Create persistor
export const persistor = persistStore(store);
