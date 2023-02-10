/// <reference types="./Dispatcher.d.ts" />
import '../scheduling.mjs';
import Dispatcher_dispatch from './Dispatcher/__internal__/Dispatcher.dispatch.mjs';
import Dispatcher_dispatchTo from './Dispatcher/__internal__/Dispatcher.dispatchTo.mjs';
import Dispatcher_getScheduler from './Dispatcher/__internal__/Dispatcher.getScheduler.mjs';

const dispatch = Dispatcher_dispatch;
const dispatchTo = Dispatcher_dispatchTo;
const getScheduler = Dispatcher_getScheduler;
/** @ignore */
const Dispatcher = {
    dispatch,
    dispatchTo,
    getScheduler,
};

export { Dispatcher as default, dispatch, dispatchTo, getScheduler };
