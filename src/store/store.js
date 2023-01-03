import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }

    next(action);
  };

  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const middlewares = [loggerMiddleware];

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];

  const composedEnhancer = compose(...storeEnhancers);

  export const store = createStore(persistedReducer, undefined, composedEnhancer);

  export const persistor = persistStore(store);
