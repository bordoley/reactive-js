import { Concat, ConcatAll, DistinctUntilChanged, FromArray, Generate, Keep, Map, Repeat, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, Zip } from "./container.mjs";
import { ObservableLike, RunnableObservable, EnumerableObservable } from "./observable.mjs";
import { ToRunnable } from "./runnable.mjs";
interface RunnableObservableLike<T> extends ObservableLike<T> {
    readonly TContainerOf: RunnableObservableLike<this["T"]>;
    readonly observableType: RunnableObservable | EnumerableObservable;
}
declare const concat: Concat<RunnableObservableLike<unknown>>["concat"];
declare const concatT: Concat<RunnableObservableLike<unknown>>;
declare const concatAll: ConcatAll<RunnableObservableLike<unknown>>["concatAll"];
declare const concatAllT: ConcatAll<RunnableObservableLike<unknown>>;
declare const distinctUntilChanged: DistinctUntilChanged<RunnableObservableLike<unknown>>["distinctUntilChanged"];
declare const distinctUntilChangedT: DistinctUntilChanged<RunnableObservableLike<unknown>>;
declare const fromArray: FromArray<RunnableObservableLike<unknown>, {
    readonly delay: number;
    readonly startIndex: number;
    readonly endIndex: number;
    readonly delayStart: boolean;
}>["fromArray"];
declare const fromArrayT: FromArray<RunnableObservableLike<unknown>, {
    readonly delay: number;
    readonly startIndex: number;
    readonly endIndex: number;
    readonly delayStart: boolean;
}>;
declare const generate: Generate<RunnableObservableLike<unknown>>["generate"];
declare const generateT: Generate<RunnableObservableLike<unknown>>;
declare const keep: Keep<RunnableObservableLike<unknown>>["keep"];
declare const keepT: Keep<RunnableObservableLike<unknown>>;
declare const map: Map<RunnableObservableLike<unknown>>["map"];
declare const mapT: Map<RunnableObservableLike<unknown>>;
declare const repeat: Repeat<RunnableObservableLike<unknown>>["repeat"];
declare const repeatT: Repeat<RunnableObservableLike<unknown>>;
declare const scan: Scan<RunnableObservableLike<unknown>>["scan"];
declare const scanT: Scan<RunnableObservableLike<unknown>>;
declare const skipFirst: SkipFirst<RunnableObservableLike<unknown>>["skipFirst"];
declare const skipFirstT: SkipFirst<RunnableObservableLike<unknown>>;
declare const takeFirst: TakeFirst<RunnableObservableLike<unknown>>["takeFirst"];
declare const takeFirstT: TakeFirst<RunnableObservableLike<unknown>>;
declare const takeLast: TakeLast<RunnableObservableLike<unknown>>["takeLast"];
declare const takeLastT: TakeLast<RunnableObservableLike<unknown>>;
declare const takeWhile: TakeWhile<RunnableObservableLike<unknown>>["takeWhile"];
declare const takeWhileT: TakeWhile<RunnableObservableLike<unknown>>;
declare const toRunnable: ToRunnable<RunnableObservableLike<unknown>>["toRunnable"];
declare const toRunnableT: ToRunnable<RunnableObservableLike<unknown>>;
declare const zip: Zip<RunnableObservableLike<unknown>>["zip"];
declare const zipT: Zip<RunnableObservableLike<unknown>>;
export { RunnableObservableLike, concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, fromArray, fromArrayT, generate, generateT, keep, keepT, map, mapT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, toRunnable, toRunnableT, zip, zipT };
