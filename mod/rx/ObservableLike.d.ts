import { ForEach, Map, ToPromise } from "../containers.mjs";
import { Function1 } from "../functions.mjs";
import { ObservableLike } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { DisposableLike } from "../util.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
declare const forEach: ForEach<ObservableLike>["forEach"];
declare const map: Map<ObservableLike>["map"];
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
declare const toPromise: ToPromise<ObservableLike, SchedulerLike>["toPromise"];
export { forEach, getObservableType, map, subscribe, toPromise };
