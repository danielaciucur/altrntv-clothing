import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./root-reducer";

export default function configureStore(preloadedState) {
  const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }

    next(action);
  };

  const middlewares = [loggerMiddleware];

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = compose(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
}
