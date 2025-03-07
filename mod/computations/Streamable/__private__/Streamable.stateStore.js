/// <reference types="./Streamable.stateStore.d.ts" />

import Streamable_actionReducer from "./Streamable.actionReducer.js";
const updateReducer = (acc, updater) => updater(acc);
const Streamable_stateStore = (initialState, options) => Streamable_actionReducer(updateReducer, initialState, options);
export default Streamable_stateStore;
