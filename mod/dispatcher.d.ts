/// <reference types="node" />
import { SideEffect1 } from './functions';
import './option';
import { DisposableLike } from './disposable';

/** @noInheritDoc */
interface DispatcherLike<T> extends DisposableLike {
    /**
     * Dispatches the next request
     * @param req
     */
    dispatch(req: T): void;
}
declare const dispatchTo: <T>(dispatcher: DispatcherLike<T>) => SideEffect1<T>;

export { DispatcherLike, dispatchTo };
