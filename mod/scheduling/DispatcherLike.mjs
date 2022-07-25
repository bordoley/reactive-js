/// <reference types="./DispatcherLike.d.ts" />
import { D as DispatcherLike_dispatch, a as DispatcherLike_scheduler } from '../scheduling-bf2730af.mjs';

const dispatch = (v) => dispatcher => {
    dispatcher[DispatcherLike_dispatch](v);
    return dispatcher;
};
const dispatchTo = (dispatcher) => v => dispatcher[DispatcherLike_dispatch](v);
const getScheduler = (dispatcher) => dispatcher[DispatcherLike_scheduler];

export { dispatch, dispatchTo, getScheduler };
