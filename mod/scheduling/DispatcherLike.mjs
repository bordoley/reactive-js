/// <reference types="./DispatcherLike.d.ts" />
import '../scheduling.mjs';
import dispatch$1 from './__internal__/DispatcherLike/DispatcherLike.dispatch.mjs';
import dispatchTo$1 from './__internal__/DispatcherLike/DispatcherLike.dispatchTo.mjs';
import getScheduler$1 from './__internal__/DispatcherLike/DispatcherLike.getScheduler.mjs';

const dispatch = dispatch$1;
const dispatchTo = dispatchTo$1;
const getScheduler = getScheduler$1;

export { dispatch, dispatchTo, getScheduler };
