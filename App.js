import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import HoldingPage from './src/HoldingPage';
const App = () => {
  return (
    <Provider store={store}>
      <HoldingPage />
    </Provider>
  );
};

export default App;
