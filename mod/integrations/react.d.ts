import { ComponentType, ReactElement } from "react";
import { Factory, Optional } from "../functions.js";
import { ObservableLike } from "../rx.js";
import { SchedulerLike } from "../scheduling.js";
/**
 * Returns the current value, if defined, of `observable`.
 *
 * @param observable The `ObservableLike` to subscribe to.
 * @param scheduler An optional scheduler used when subscribing to `observable`. The default
 * is React's normal priority scheduler.
 */
export declare const useObservable: <T>(observable: ObservableLike<T>, options?: {
    readonly scheduler?: SchedulerLike | Factory<SchedulerLike>;
}) => Optional<T>;
export declare const createComponent: <TProps>(fn: (props: ObservableLike<TProps>) => ObservableLike<ReactElement>, options?: {
    readonly scheduler?: SchedulerLike | Factory<SchedulerLike>;
}) => ComponentType<TProps>;
