'use client';

import { Provider } from 'react-redux';
import { persistor, store } from '@/app/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorToast from './ErrorToast';

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={null}> */}
      <ErrorToast />
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
}
