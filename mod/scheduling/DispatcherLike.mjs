/// <reference types="./DispatcherLike.d.ts" />
import '../scheduling.mjs';
import DispatcherLike__dispatch from './__internal__/DispatcherLike/DispatcherLike.dispatch.mjs';
import DispatcherLike__dispatchTo from './__internal__/DispatcherLike/DispatcherLike.dispatchTo.mjs';
import DispatcherLike__getScheduler from './__internal__/DispatcherLike/DispatcherLike.getScheduler.mjs';

const dispatch = DispatcherLike__dispatch;
const dispatchTo = DispatcherLike__dispatchTo;
const getScheduler = DispatcherLike__getScheduler;

export { dispatch, dispatchTo, getScheduler };
