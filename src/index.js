import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Router from "./router/router";
import "animate.css/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { WagmiConfig, createClient,configureChains } from "wagmi";
import { bsc } from "wagmi/chains";
import { publicProvider } from 'wagmi/providers/public';
import "./i18n";

import "./assets/fonts/Alata-Regular.ttf";
import "./assets/fonts/Inter-VariableFont_slnt,wght.ttf";


// Configure chains & providers with the Public provider.
const { chains, provider, webSocketProvider } = configureChains(
  [bsc],
  [publicProvider()]
 );

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider
});


const App = () => {

  return (
    <Provider store={store}>
      <WagmiConfig client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </WagmiConfig>
    </Provider>
  );
};

createRoot(document.getElementById("root")).render(<App />);
