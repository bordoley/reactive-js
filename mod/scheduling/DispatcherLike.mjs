/// <reference types="./DispatcherLike.d.ts" />
import { DispatcherLike_dispatch, DispatcherLike_scheduler } from '../scheduling.mjs';

const dispatch = (v) => dispatcher => {
    dispatcher[DispatcherLike_dispatch](v);
    return dispatcher;
};
const dispatchTo = (dispatcher) => v => dispatcher[DispatcherLike_dispatch](v);
const getScheduler = (dispatcher) => dispatcher[DispatcherLike_scheduler];

export { dispatch, dispatchTo, getScheduler };
