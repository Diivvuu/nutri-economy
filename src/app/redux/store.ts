import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // ✅ Use localStorage for persistence
import { persistStore } from 'redux-persist';
// import authReducer from './reducers/authReducer';
// import categoryReducer from './reducers/categoryReducers';
// import subCategoryReducer from './reducers/subCategoryReducers';
// import uploadReducer from './reducers/uploadReducers';
// import policiesReducer from './reducers/policiesReducers';
import errorReducer from './errorSlice';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['persistedUser'],
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userFeatures: userReducer,
    // category: categoryReducer,
    // subCategory: subCategoryReducer,
    // policies: policiesReducer,
    // upload: uploadReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
