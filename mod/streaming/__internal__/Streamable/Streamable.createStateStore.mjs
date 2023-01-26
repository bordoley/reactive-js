/// <reference types="./Streamable.createStateStore.d.ts" />
import { updateReducer } from '../../../functions.mjs';
import Streamable$createActionReducer from './Streamable.createActionReducer.mjs';

const Streamable$createStateStore = (initialState, options) => Streamable$createActionReducer(updateReducer, initialState, options);

export { Streamable$createStateStore as default };
