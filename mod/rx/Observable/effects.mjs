/// <reference types="./effects.d.ts" />
import { pipe, none, isSome } from '../../functions.mjs';
import Streamable_createStateStore from '../../streaming/__internal__/Streamable/Streamable.createStateStore.mjs';
import Streamable_stream from '../../streaming/__internal__/Streamable/Streamable.stream.mjs';
import Disposable_dispose from '../../util/__internal__/Disposable/Disposable.dispose.mjs';
import { assertCurrentContext, AsyncContext_memoOrUse, AsyncContext_awaitOrObserve, AsyncContext_observer } from '../__internal__/Observable/Observable.async.mjs';
import Observable_create from '../__internal__/Observable/Observable.create.mjs';
import Observable_subscribe from '../__internal__/Observable/Observable.subscribe.mjs';
import Observer_getScheduler from '../__internal__/Observer/Observer.getScheduler.mjs';
import Observer_schedule from '../__internal__/Observer/Observer.schedule.mjs';
import Sink_notify from '../__internal__/Sink/Sink.notify.mjs';

const __memo = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_memoOrUse](false, f, ...args);
};
const __await = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_awaitOrObserve](observable, true);
};
const __observe = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_awaitOrObserve](observable, false);
};
const __do = /*@__PURE__*/ (() => {
    const deferSideEffect = (f, ...args) => Observable_create(observer => {
        const callback = () => {
            f(...args);
            pipe(observer, Sink_notify(none), Disposable_dispose());
        };
        pipe(observer, Observer_schedule(callback));
    });
    return (f, ...args) => {
        const ctx = assertCurrentContext();
        const scheduler = Observer_getScheduler(ctx[AsyncContext_observer]);
        const observable = ctx[AsyncContext_memoOrUse](false, deferSideEffect, f, ...args);
        const subscribeOnScheduler = ctx[AsyncContext_memoOrUse](false, Observable_subscribe, scheduler);
        ctx[AsyncContext_memoOrUse](true, subscribeOnScheduler, observable);
    };
})();
const __using = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_memoOrUse](true, f, ...args);
};
function __currentScheduler() {
    const ctx = assertCurrentContext();
    return Observer_getScheduler(ctx[AsyncContext_observer]);
}
const __stream = /*@__PURE__*/ (() => {
    const streamOnSchedulerFactory = (streamable, scheduler, replay) => pipe(streamable, Streamable_stream(scheduler, { replay }));
    return (streamable, { replay = 0, scheduler, } = {}) => {
        const currentScheduler = __currentScheduler();
        return __using(streamOnSchedulerFactory, streamable, scheduler !== null && scheduler !== void 0 ? scheduler : currentScheduler, replay);
    };
})();
const __state = /*@__PURE__*/ (() => {
    const createStateOptions = (equality) => isSome(equality) ? { equality } : none;
    return (initialState, options = {}) => {
        const { equality } = options;
        const optionsMemo = __memo(createStateOptions, equality);
        const streamable = __memo(Streamable_createStateStore, initialState, optionsMemo);
        return __stream(streamable);
    };
})();

export { __await, __currentScheduler, __do, __memo, __observe, __state, __stream, __using };
