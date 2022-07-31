import { ForEach, Map, ToPromise, ContainerOperator } from "../containers.mjs";
import { Function1, SideEffect1 } from "../functions.mjs";
import { ObservableLike, RunnableObservableLike, EnumerableObservableLike } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { DisposableLike } from "../util.mjs";
declare const getObservableType: (obs: ObservableLike) => 0 | 1 | 2;
interface ForEachObservable {
    <T>(effect: SideEffect1<T>): ContainerOperator<ObservableLike<unknown>, T, T>;
    <T>(effect: SideEffect1<T>): ContainerOperator<RunnableObservableLike<unknown>, T, T>;
    <T>(effect: SideEffect1<T>): ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
}
declare const forEach: ForEachObservable;
declare const forEachT: ForEach<ObservableLike>;
interface MapObservable {
    <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<ObservableLike, TA, TB>;
    <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<RunnableObservableLike, TA, TB>;
    <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<EnumerableObservableLike, TA, TB>;
}
declare const map: MapObservable;
declare const mapT: Map<ObservableLike>;
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
declare const toPromise: ToPromise<ObservableLike, SchedulerLike>["toPromise"];
export { forEach, forEachT, getObservableType, map, mapT, subscribe, toPromise };
