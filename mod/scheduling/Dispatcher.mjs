/// <reference types="./Dispatcher.d.ts" />
import '../scheduling.mjs';
import Dispatcher$dispatch from './__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Dispatcher$dispatchTo from './__internal__/Dispatcher/Dispatcher.dispatchTo.mjs';
import Dispatcher$getScheduler from './__internal__/Dispatcher/Dispatcher.getScheduler.mjs';

const dispatch = Dispatcher$dispatch;
const dispatchTo = Dispatcher$dispatchTo;
const getScheduler = Dispatcher$getScheduler;

export { dispatch, dispatchTo, getScheduler };
