import { LiftedSinkLike } from "../../computations/__internal__/LiftedSource.js";
import { Function1, Reducer } from "../../functions.js";
import { ObserverLike, SchedulerLike, SinkLike } from "../../utils.js";
export declare const collect: <T>(buffer: T[]) => SinkLike<T>;
export declare const createDelegatingCatchError: <T>(o: SinkLike<T>) => SinkLike<T>;
export declare const createDelegatingNonCompleting: <T>(o: SinkLike<T>) => SinkLike<T>;
export declare const reducer: <T, TAcc>(reducer: Reducer<T, TAcc>, ref: [TAcc]) => SinkLike<T>;
export declare const toLiftedSink: <T>() => Function1<SinkLike<T>, LiftedSinkLike<SinkLike<T>, T>>;
export declare const toObserver: <T>(scheduler: SchedulerLike) => Function1<SinkLike<T>, ObserverLike<T>>;
