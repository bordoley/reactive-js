import { Disposable } from "./disposable.mjs";
import { Function1, SideEffect1 } from "./functions.mjs";
import { SchedulerLike } from "./scheduler.mjs";
/** @noInheritDoc */
interface DispatcherLike<T> extends Disposable {
    /**
     * Dispatches the next request
     * @param req
     */
    dispatch(this: DispatcherLike<T>, req: T): void;
    readonly scheduler: SchedulerLike;
}
declare const dispatch: <T, TDispatcher extends DispatcherLike<T>>(v: T) => Function1<TDispatcher, TDispatcher>;
declare const dispatchTo: <T>(dispatcher: DispatcherLike<T>) => SideEffect1<T>;
declare const getScheduler: <T>(observer: DispatcherLike<T>) => SchedulerLike;
export { DispatcherLike, dispatch, dispatchTo, getScheduler };
