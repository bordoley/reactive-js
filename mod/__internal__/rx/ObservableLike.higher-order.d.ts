import { CatchError, ConcatAll } from "../../containers.mjs";
import { EnumerableObservableLike, ObservableLike, RunnableObservableLike, ScanAsync } from "../../rx.mjs";
declare const catchErrorEnumerableObservable: CatchError<EnumerableObservableLike>["catchError"];
declare const catchErrorObservable: CatchError<ObservableLike>["catchError"];
declare const catchErrorRunnableObservable: CatchError<RunnableObservableLike>["catchError"];
declare const mergeAllEnumerableObservable: ConcatAll<EnumerableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
declare const mergeAllObservable: ConcatAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
declare const mergeAllRunnableObservable: ConcatAll<RunnableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
declare const scanAsyncEnumerableObservable: ScanAsync<EnumerableObservableLike, EnumerableObservableLike>["scanAsync"];
declare const scanAsyncObservable: ScanAsync<ObservableLike, ObservableLike>["scanAsync"];
declare const scanAsyncRunnableObservable: ScanAsync<RunnableObservableLike, RunnableObservableLike>["scanAsync"];
declare const switchAllEnumerableObservable: ConcatAll<EnumerableObservableLike>["concatAll"];
declare const switchAllObservable: ConcatAll<ObservableLike>["concatAll"];
declare const switchAllRunnableObservable: ConcatAll<RunnableObservableLike>["concatAll"];
export { catchErrorEnumerableObservable, catchErrorObservable, catchErrorRunnableObservable, mergeAllEnumerableObservable, mergeAllObservable, mergeAllRunnableObservable, scanAsyncEnumerableObservable, scanAsyncObservable, scanAsyncRunnableObservable, switchAllEnumerableObservable, switchAllObservable, switchAllRunnableObservable };
