/// <reference types="./Streamable.createStateStore.d.ts" />
import { updateReducer } from '../../../functions.mjs';
import Streamable_createActionReducer from './Streamable.createActionReducer.mjs';

const Streamable_createStateStore = (initialState, options) => Streamable_createActionReducer(updateReducer, initialState, options);

export { Streamable_createStateStore as default };
