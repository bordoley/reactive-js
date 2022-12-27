/// <reference types="./StreamableLike.createStateStore.d.ts" />
import { updateReducer } from '../../../functions.mjs';
import createActionReducer from './StreamableLike.createActionReducer.mjs';

const createStateStore = (initialState, options) => createActionReducer(updateReducer, initialState, options);

export { createStateStore as default };
