import { ReactiveSourceLike } from "../../../computations.js";
import { Optional } from "../../../functions.js";
import { BackpressureStrategy, ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
export declare const createMergeAllObserver: <TInnerSource extends ReactiveSourceLike<T, ObserverLike<T>>, T>(delegate: ObserverLike<T>, options: Optional<{
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
    concurrency?: number;
}>) => ObserverLike<TInnerSource>;
export declare const Observable_mergeAll: Observable.Signature["mergeAll"];
export declare const Observable_concatAll: Observable.Signature["concatAll"];
