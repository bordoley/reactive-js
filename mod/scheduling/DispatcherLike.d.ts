import { DisposableLike } from '../util/DisposableLike.js';
import { Identity, SideEffect1 } from '../util/functions.js';
import { SchedulerLike } from "./SchedulerLike.mjs";
declare const DispatcherLike_dispatch: unique symbol;
declare const DispatcherLike_scheduler: unique symbol;
interface DispatcherLike<T = unknown> extends DisposableLike {
    /**
     * Dispatches the next request
     * @param req
     */
    [DispatcherLike_dispatch](req: T): void;
    readonly [DispatcherLike_scheduler]: SchedulerLike;
}
declare const dispatch: <T, TDispatcher extends DispatcherLike<T>>(v: T) => Identity<TDispatcher>;
declare const dispatchTo: <T>(dispatcher: DispatcherLike<T>) => SideEffect1<T>;
declare const getScheduler: (dispatcher: DispatcherLike) => SchedulerLike;
export { DispatcherLike, DispatcherLike_dispatch, DispatcherLike_scheduler, dispatch, dispatchTo, getScheduler };
