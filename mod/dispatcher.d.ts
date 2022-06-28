import { DisposableLike } from "./disposable.mjs";
import { SideEffect1 } from "./functions.mjs";
/** @noInheritDoc */
interface DispatcherLike<T> extends DisposableLike {
    /**
     * Dispatches the next request
     * @param req
     */
    dispatch(this: DispatcherLike<T>, req: T): void;
}
declare const dispatchTo: <T>(dispatcher: DispatcherLike<T>) => SideEffect1<T>;
export { DispatcherLike, dispatchTo };
