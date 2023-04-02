import { Equality, Factory, Function1, Reducer, Updater } from "../functions.js";
import { ObservableLike } from "../rx.js";
import { StreamLike, StreamableLike } from "../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../util.js";
/**
 * @category Constructor
 */
export declare const create: <TReq, T>(op: import("../containers.js").ContainerOperator<ObservableLike<unknown>, TReq, T>) => StreamableLike<TReq, T, StreamLike<TReq, T>>;
/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer - The accumulator function called on each notified action.
 * @param initialState - The initial accumulation value.
 * @param equals - Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 *
 * @category Constructor
 */
export declare const createActionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T>;
}) => StreamableLike<TAction, T>;
/**
 * Returns an event handler that invokes the observable function,
 * and blocks, ignoring any subsequent events until the initial eventHandler
 * disposes.
 *
 * @category Constructor
 */
export declare const createBlockingEventHandler: <TEvent>(op: Function1<TEvent, ObservableLike<unknown>>) => StreamableLike<TEvent, boolean>;
/**
 * @category Constructor
 */
export declare const createInMemoryCache: <T>(options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("../scheduling.js").SchedulerLike | undefined;
}) => import("../streaming.js").CacheLike<T>;
/**
 * @category Constructor
 */
export declare const createPersistentCache: <T>(persistentStore: {
    load(keys: ReadonlySet<string>): ObservableLike<Readonly<Record<string, import("../functions.js").Optional<T>>>>;
    store(updates: Readonly<Record<string, T>>): ObservableLike<void>;
}, options?: {
    readonly capacity?: number | undefined;
    readonly cleanupScheduler?: import("../scheduling.js").SchedulerLike | undefined;
}) => import("../streaming.js").CacheLike<T>;
/**
 * Returns an event handler that invokes the observable function,
 * an Observable function, limiting the number of concurrent subscriptions,
 * and applying the backpressure policy if the number of dispatched events
 * exceeds the handlers capacity.
 *
 * @category Constructor
 */
export declare const createQueueingEventHandler: <TEvent>(op: Function1<TEvent, ObservableLike<unknown>>, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly maxConcurrency?: number;
}) => StreamableLike<TEvent, never>;
/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState - The initial accumulation value.
 * @param equals - Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 *
 * @category Constructor
 */
export declare const createStateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T>;
}) => StreamableLike<Updater<T>, T>;
/**
 * Returns an event handler that invokes the observable function,
 * and cancels any outstanding inner event handlers.
 *
 * @category Constructor
 */
export declare const createSwitchingEventHandler: <TEvent>(op: Function1<TEvent, ObservableLike<unknown>>) => StreamableLike<TEvent, never>;
/**
 * @category Constructor
 */
export declare const identity: <T>() => StreamableLike<T, T, StreamLike<T, T>>;
export declare const sinkInto: <TReq, T>(dest: StreamLike<T, TReq>) => (src: StreamableLike<TReq, T>) => StreamableLike<TReq, T>;
