import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './addons';
import 'fomantic-ui-css/semantic.min.css';

const Index: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

document.addEventListener("DOMContentLoaded", (event: Event) => {
  let ROOT = document.getElementById('root')
  if(ROOT) render(<Index />, ROOT);
});

reportWebVitals(console.log);