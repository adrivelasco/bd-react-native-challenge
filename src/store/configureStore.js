import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from '../reducers';

function configureStore(preloadedState = {}) {
  const enhancers = composeWithDevTools(applyMiddleware(thunk));
  const store = createStore(reducers, preloadedState, enhancers);

  return store;
}

export default configureStore;
