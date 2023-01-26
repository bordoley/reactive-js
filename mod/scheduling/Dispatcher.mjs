/// <reference types="./Dispatcher.d.ts" />
import '../scheduling.mjs';
import Dispatcher_dispatch from './__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Dispatcher_dispatchTo from './__internal__/Dispatcher/Dispatcher.dispatchTo.mjs';
import Dispatcher_getScheduler from './__internal__/Dispatcher/Dispatcher.getScheduler.mjs';

const dispatch = Dispatcher_dispatch;
const dispatchTo = Dispatcher_dispatchTo;
const getScheduler = Dispatcher_getScheduler;

export { dispatch, dispatchTo, getScheduler };
