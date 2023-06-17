import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SB Sans Interface';
    font-style:  normal;
    font-weight: 400;
    src: url(./fonts/SBSansInterface-Regular.woff2) format("woff2")
        url(./fonts/SBSansInterface-Regular.woff) format("woff");
  }

  @font-face {
    font-family: 'SB Sans Interface';
    font-style:  normal;
    font-weight: 600;
    src: url(./fonts/SBSansInterface-Semibold.woff2) format("woff2")
        url(./fonts/SBSansInterface-Semibold.woff) format("woff");
  }

  @font-face {
    font-family: 'SB Sans Text Mono';
    font-style:  normal;
    font-weight: 400;
    src: url(./fonts/SBSansTextMono-Regular.woff2) format("woff2")
        url(./fonts/SBSansTextMono-Regular.woff) format("woff");
  }

  body {
    padding: 24px;
    margin: 0 auto;
    background-color: #F4F4F5;
    font-family: 'SB Sans Interface', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
