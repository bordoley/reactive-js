import { LiftedSinkLike } from "../../computations/__internal__/LiftedSource.js";
import { Function1 } from "../../functions.js";
import { ConsumerLike, ObserverLike, SchedulerLike, SinkLike } from "../../utils.js";
export declare const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(o: SinkLike<T>) => SinkLike<T>;
export declare const toLiftedSink: <T>() => Function1<SinkLike<T>, LiftedSinkLike<SinkLike<T>, T>>;
export declare const toConsumer: <T>() => Function1<SinkLike<T>, ConsumerLike<T>>;
export declare const toObserver: <T>(scheduler: SchedulerLike) => Function1<SinkLike<T>, ObserverLike<T>>;
