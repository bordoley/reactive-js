import { ReactElement, ComponentType } from 'react';
import { Factory, Option } from "../functions.mjs";
import { ObservableLike } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
/**
 * Returns the current value, if defined, of `observable`.
 *
 * @param observable The `ObservableLike` to subscribe to.
 * @param scheduler An optional scheduler used when subscribing to `observable`. The default
 * is React's normal priority scheduler.
 */
declare const useObservable: <T>(observable: ObservableLike<T>, options?: {
    readonly scheduler?: SchedulerLike | Factory<SchedulerLike>;
}) => Option<T>;
declare const createComponent: <TProps>(fn: (props: ObservableLike<TProps>) => ObservableLike<ReactElement>, options?: {
    readonly scheduler?: SchedulerLike | Factory<SchedulerLike>;
}) => ComponentType<TProps>;
declare const createReactIdlePriorityScheduler: Factory<SchedulerLike>;
declare const createReactImmediatePriorityScheduler: Factory<SchedulerLike>;
declare const createReactNormalPriorityScheduler: Factory<SchedulerLike>;
declare const createReactLowPriorityScheduler: Factory<SchedulerLike>;
declare const createReactUserBlockingPriorityScheduler: Factory<SchedulerLike>;
export { createComponent, createReactIdlePriorityScheduler, createReactImmediatePriorityScheduler, createReactLowPriorityScheduler, createReactNormalPriorityScheduler, createReactUserBlockingPriorityScheduler, useObservable };
