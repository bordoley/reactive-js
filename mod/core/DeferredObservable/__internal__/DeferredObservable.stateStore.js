/// <reference types="./DeferredObservable.stateStore.d.ts" />

import DeferredObservable_actionReducer from "./DeferredObservable.actionReducer.js";
const updateReducer = (acc, updater) => updater(acc);
const DeferredObservable_stateStore = (initialState, options) => DeferredObservable_actionReducer(updateReducer, initialState, options);
export default DeferredObservable_stateStore;
