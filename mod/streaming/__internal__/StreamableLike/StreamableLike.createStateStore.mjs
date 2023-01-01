/// <reference types="./StreamableLike.createStateStore.d.ts" />
import { updateReducer } from '../../../functions.mjs';
import StreamableLike__createActionReducer from './StreamableLike.createActionReducer.mjs';

const StreamableLike__createStateStore = (initialState, options) => StreamableLike__createActionReducer(updateReducer, initialState, options);

export { StreamableLike__createStateStore as default };
