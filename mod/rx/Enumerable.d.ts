import { Buffer, CatchError, Concat, ConcatAll, ConcatMap, ConcatWith, ContainerLike_T, ContainerLike_type, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, Enumerate, EnumeratorLike, EverySatisfy, First, FlatMapIterable, ForEach, ForkConcat, ForkZip, FromEnumeratorFactory, FromFactory, FromIterable, FromOptional, FromReadonlyArray, Generate, Identity, IgnoreElements, Keep, KeepType, Last, Map, MapTo, Pairwise, Pick, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import { BackpressureStrategy, EnumerableLike, Retry, ScanLast, ToEnumerable, ToObservable, ToRunnable } from "../rx.js";
import { ToAsyncEnumerable, ToFlowable } from "../streaming.js";
import { DisposableLike } from "../util.js";
export declare const backpressureStrategy: BackpressureStrategy<EnumerableLike>["backpressureStrategy"];
export declare const buffer: Buffer<EnumerableLike>["buffer"];
export declare const catchError: CatchError<EnumerableLike>["catchError"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: import("../functions.js").Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => EnumerableLike<T>;
export declare const concat: Concat<EnumerableLike>["concat"];
export declare const concatAll: ConcatAll<EnumerableLike>["concatAll"];
export declare const concatMap: ConcatMap<EnumerableLike>["concatMap"];
export declare const concatWith: ConcatWith<EnumerableLike>["concatWith"];
export declare const contains: Contains<EnumerableLike>["contains"];
export declare const decodeWithCharset: DecodeWithCharset<EnumerableLike>["decodeWithCharset"];
export declare const defer: Defer<EnumerableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];
export declare const empty: Empty<EnumerableLike>["empty"];
export declare const encodeUtf8: EncodeUtf8<EnumerableLike>["encodeUtf8"];
export declare const endWith: EndWith<EnumerableLike>["endWith"];
interface EnumerableEnumerator<T = unknown> extends EnumeratorLike<T> {
    readonly [ContainerLike_type]?: EnumeratorLike<this[typeof ContainerLike_T]> & DisposableLike;
}
export declare const enumerate: Enumerate<EnumerableLike, EnumerableEnumerator>["enumerate"];
export declare const everySatisfy: EverySatisfy<EnumerableLike>["everySatisfy"];
export declare const first: First<EnumerableLike>["first"];
export declare const flatMapIterable: FlatMapIterable<EnumerableLike>["flatMapIterable"];
export declare const forEach: ForEach<EnumerableLike>["forEach"];
export declare const forkConcat: ForkConcat<EnumerableLike>["forkConcat"];
export declare const forkZip: ForkZip<EnumerableLike>["forkZip"];
export declare const fromEnumeratorFactory: FromEnumeratorFactory<EnumerableLike>["fromEnumeratorFactory"];
export declare const fromFactory: FromFactory<EnumerableLike>["fromFactory"];
export declare const fromIterable: FromIterable<EnumerableLike>["fromIterable"];
export declare const fromOptional: FromOptional<EnumerableLike>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<EnumerableLike>["fromReadonlyArray"];
export declare const generate: Generate<EnumerableLike>["generate"];
export declare const identity: Identity<EnumerableLike>["identity"];
export declare const ignoreElements: IgnoreElements<EnumerableLike>["ignoreElements"];
export declare const keep: Keep<EnumerableLike>["keep"];
export declare const keepType: KeepType<EnumerableLike>["keepType"];
export declare const last: Last<EnumerableLike>["last"];
export declare const map: Map<EnumerableLike>["map"];
export declare const mapTo: MapTo<EnumerableLike>["mapTo"];
export declare const pairwise: Pairwise<EnumerableLike>["pairwise"];
export declare const pick: Pick<EnumerableLike>["pick"];
export declare const reduce: Reduce<EnumerableLike>["reduce"];
export declare const repeat: Repeat<EnumerableLike>["repeat"];
export declare const retry: Retry<EnumerableLike>["retry"];
export declare const scan: Scan<EnumerableLike>["scan"];
export declare const scanLast: ScanLast<EnumerableLike, EnumerableLike>["scanLast"];
export declare const skipFirst: SkipFirst<EnumerableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<EnumerableLike>["someSatisfy"];
export declare const startWith: StartWith<EnumerableLike>["startWith"];
export declare const takeFirst: TakeFirst<EnumerableLike>["takeFirst"];
export declare const takeLast: TakeLast<EnumerableLike>["takeLast"];
export declare const takeWhile: TakeWhile<EnumerableLike>["takeWhile"];
export declare const throws: Throws<EnumerableLike>["throws"];
export declare const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"];
export declare const toAsyncEnumerable: ToAsyncEnumerable<EnumerableLike, {
    delay?: number;
}>["toAsyncEnumerable"];
export declare const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"];
export declare const toFlowable: ToFlowable<EnumerableLike>["toFlowable"];
export declare const toObservable: ToObservable<EnumerableLike>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<EnumerableLike>["toRunnable"];
export declare const zip: Zip<EnumerableLike>["zip"];
export declare const zipWith: ZipWith<EnumerableLike>["zipWith"];
export {};
