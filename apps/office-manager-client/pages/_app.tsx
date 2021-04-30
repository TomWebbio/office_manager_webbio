import React, { useReducer } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';
import {
  CartContextProvider,
  cartReducer,
  initialCartState,
} from '../context/cart';

function CustomApp({ Component, pageProps }: AppProps) {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const cartContextValues = {
    cartState,
    cartDispatch,
  };

  return (
    <>
      <CartContextProvider value={cartContextValues}>
        <Head>
          <title>Welcome to office-manager-client!</title>
        </Head>
        <div className="app">
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </CartContextProvider>
    </>
  );
}

export default CustomApp;
