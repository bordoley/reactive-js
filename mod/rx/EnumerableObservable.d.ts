import { Buffer, CatchError, Compute, Concat, ConcatAll, ConcatMap, ConcatWith, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, EverySatisfy, FlatMapIterable, ForEach, ForkConcat, ForkZip, FromIterable, FromReadonlyArray, FromSequence, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, ToIterable, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { EnumerableObservableLike, Retry, ScanAsync, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const buffer: Buffer<EnumerableObservableLike>["buffer"];
export declare const catchError: CatchError<EnumerableObservableLike>["catchError"];
export declare const compute: Compute<EnumerableObservableLike>["compute"];
export declare const concat: Concat<EnumerableObservableLike>["concat"];
export declare const concatAll: ConcatAll<EnumerableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export declare const concatMap: ConcatMap<EnumerableObservableLike>["concatMap"];
export declare const concatWith: ConcatWith<EnumerableObservableLike>["concatWith"];
export declare const contains: Contains<EnumerableObservableLike>["contains"];
export declare const decodeWithCharset: DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"];
export declare const defer: Defer<EnumerableObservableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"];
export declare const empty: Empty<EnumerableObservableLike>["empty"];
export declare const encodeUtf8: EncodeUtf8<EnumerableObservableLike>["encodeUtf8"];
export declare const endWith: EndWith<EnumerableObservableLike>["endWith"];
export declare const everySatisfy: EverySatisfy<EnumerableObservableLike>["everySatisfy"];
export declare const flatMapIterable: FlatMapIterable<EnumerableObservableLike>["flatMapIterable"];
export declare const forEach: ForEach<EnumerableObservableLike>["forEach"];
export declare const forkConcat: ForkConcat<EnumerableObservableLike>["forkConcat"];
export declare const forkZip: ForkZip<EnumerableObservableLike>["forkZip"];
export declare const fromEnumerable: FromEnumerable<EnumerableObservableLike>["fromEnumerable"];
export declare const fromIterable: FromIterable<EnumerableObservableLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<EnumerableObservableLike>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<EnumerableObservableLike>["fromSequence"];
export declare const generate: Generate<EnumerableObservableLike>["generate"];
export declare const ignoreElements: IgnoreElements<EnumerableObservableLike>["ignoreElements"];
export declare const keep: Keep<EnumerableObservableLike>["keep"];
export declare const keepType: KeepType<EnumerableObservableLike>["keepType"];
export declare const map: Map<EnumerableObservableLike>["map"];
export declare const mapTo: MapTo<EnumerableObservableLike>["mapTo"];
export declare const pairwise: Pairwise<EnumerableObservableLike>["pairwise"];
export declare const reduce: Reduce<EnumerableObservableLike>["reduce"];
export declare const retry: Retry<EnumerableObservableLike>["retry"];
export declare const scan: Scan<EnumerableObservableLike>["scan"];
export declare const scanAsync: ScanAsync<EnumerableObservableLike, EnumerableObservableLike>["scanAsync"];
export declare const skipFirst: SkipFirst<EnumerableObservableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<EnumerableObservableLike>["someSatisfy"];
export declare const startWith: StartWith<EnumerableObservableLike>["startWith"];
export declare const takeFirst: TakeFirst<EnumerableObservableLike>["takeFirst"];
export declare const takeLast: TakeLast<EnumerableObservableLike>["takeLast"];
export declare const takeWhile: TakeWhile<EnumerableObservableLike>["takeWhile"];
export declare const throwIfEmpty: ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"];
export declare const throws: Throws<EnumerableObservableLike>["throws"];
export declare const toAsyncEnumerable: ToAsyncEnumerable<EnumerableObservableLike>["toAsyncEnumerable"];
export declare const toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"];
export declare const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"];
export declare const toIterable: ToIterable<EnumerableObservableLike>["toIterable"];
export declare const toObservable: ToObservable<EnumerableObservableLike>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<EnumerableObservableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<EnumerableObservableLike>["toRunnable"];
export declare const toRunnableObservable: ToRunnableObservable<EnumerableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnableObservable"];
export declare const zip: Zip<EnumerableObservableLike>["zip"];
export declare const zipWith: ZipWith<EnumerableObservableLike>["zipWith"];
