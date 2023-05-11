/// <reference types="./Observable.stateStore.d.ts" />

import Observable_actionReducer from "./Observable.actionReducer.js";
const updateReducer = (acc, updater) => updater(acc);
const Observable_stateStore = (initialState, options) => Observable_actionReducer(updateReducer, initialState, options);
export default Observable_stateStore;
