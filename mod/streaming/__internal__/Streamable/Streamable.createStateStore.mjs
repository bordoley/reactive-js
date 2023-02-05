/// <reference types="./Streamable.createStateStore.d.ts" />
import Streamable_createActionReducer from './Streamable.createActionReducer.mjs';

const updateReducer = (acc, updater) => updater(acc);
const Streamable_createStateStore = (initialState, options) => Streamable_createActionReducer(updateReducer, initialState, options);

export { Streamable_createStateStore as default };
