/// <reference types="./DispatcherLike.d.ts" />
const DispatcherLike_dispatch = Symbol("DispatcherLike_dispatch");
const DispatcherLike_scheduler = Symbol("DispatcherLike_scheduler");
const dispatch = (v) => dispatcher => {
    dispatcher[DispatcherLike_dispatch](v);
    return dispatcher;
};
const dispatchTo = (dispatcher) => v => dispatcher[DispatcherLike_dispatch](v);
const getScheduler = (dispatcher) => dispatcher[DispatcherLike_scheduler];

export { DispatcherLike_dispatch, DispatcherLike_scheduler, dispatch, dispatchTo, getScheduler };
