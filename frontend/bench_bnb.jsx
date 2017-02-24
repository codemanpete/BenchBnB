import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//testing
import { fetchBenches } from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.fetchBenches = fetchBenches;
  // store.dispatch(fetchBenches()).then(console.log);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
