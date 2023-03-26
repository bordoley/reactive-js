import { Buffer, CatchError, Concat, ConcatAll, ConcatMap, ConcatWith, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, EverySatisfy, First, FlatMapIterable, ForEach, ForkConcat, ForkZip, FromFactory, FromIterable, FromOptional, FromReadonlyArray, Generate, IgnoreElements, Keep, KeepType, Last, Map, MapTo, Pairwise, Pick, Reduce, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import { CombineLatest, CurrentTime, DispatchTo, Exhaust, ExhaustMap, ForkMerge, ForkZipLatest, FromEnumerable, Merge, MergeAll, MergeWith, Retry, RunnableLike, ScanLast, ScanMany, Spring, SwitchAll, SwitchMap, TakeUntil, Throttle, Timeout, ToEnumerable, ToObservable, ToRunnable, Tween, WithCurrentTime, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const buffer: Buffer<RunnableLike>["buffer"];
export declare const catchError: CatchError<RunnableLike>["catchError"];
export declare const combineLatest: CombineLatest<RunnableLike>["combineLatest"];
export declare const concat: Concat<RunnableLike>["concat"];
export declare const concatAll: ConcatAll<RunnableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export declare const concatMap: ConcatMap<RunnableLike>["concatMap"];
export declare const concatWith: ConcatWith<RunnableLike>["concatWith"];
export declare const contains: Contains<RunnableLike>["contains"];
export declare const currentTime: CurrentTime<RunnableLike>["currentTime"];
export declare const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"];
export declare const defer: Defer<RunnableLike>["defer"];
export declare const dispatchTo: DispatchTo<RunnableLike>["dispatchTo"];
export declare const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"];
export declare const empty: Empty<RunnableLike, {
    delay?: number;
}>["empty"];
export declare const encodeUtf8: EncodeUtf8<RunnableLike>["encodeUtf8"];
export declare const endWith: EndWith<RunnableLike>["endWith"];
export declare const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"];
export declare const exhaust: Exhaust<RunnableLike>["exhaust"];
export declare const exhaustMap: ExhaustMap<RunnableLike>["exhaustMap"];
export declare const first: First<RunnableLike>["first"];
export declare const flatMapIterable: FlatMapIterable<RunnableLike>["flatMapIterable"];
export declare const forEach: ForEach<RunnableLike>["forEach"];
export declare const forkConcat: ForkConcat<RunnableLike>["forkConcat"];
export declare const forkMerge: ForkMerge<RunnableLike>["forkMerge"];
export declare const forkZip: ForkZip<RunnableLike>["forkZip"];
export declare const forkZipLatest: ForkZipLatest<RunnableLike>["forkZipLatest"];
export declare const fromEnumerable: FromEnumerable<RunnableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromEnumerable"];
export declare const fromFactory: FromFactory<RunnableLike, {
    delay: number;
}>["fromFactory"];
export declare const fromIterable: FromIterable<RunnableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromIterable"];
export declare const fromOptional: FromOptional<RunnableLike, {
    delay?: number;
}>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<RunnableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromReadonlyArray"];
export declare const generate: Generate<RunnableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["generate"];
export declare const ignoreElements: IgnoreElements<RunnableLike>["ignoreElements"];
export declare const keep: Keep<RunnableLike>["keep"];
export declare const keepType: KeepType<RunnableLike>["keepType"];
export declare const last: Last<RunnableLike>["last"];
export declare const map: Map<RunnableLike>["map"];
export declare const mapTo: MapTo<RunnableLike>["mapTo"];
export declare const merge: Merge<RunnableLike>["merge"];
export declare const mergeAll: MergeAll<RunnableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["mergeAll"];
export declare const mergeWith: MergeWith<RunnableLike>["mergeWith"];
export declare const pairwise: Pairwise<RunnableLike>["pairwise"];
export declare const pick: Pick<RunnableLike>["pick"];
export declare const reduce: Reduce<RunnableLike>["reduce"];
export declare const retry: Retry<RunnableLike>["retry"];
export declare const run: <T>(options?: {
    maxBufferSize?: number | undefined;
} | undefined) => (observable: RunnableLike<T>) => void;
export declare const scan: Scan<RunnableLike>["scan"];
export declare const scanLast: ScanLast<RunnableLike, RunnableLike>["scanLast"];
export declare const scanMany: ScanMany<RunnableLike, RunnableLike>["scanMany"];
export declare const skipFirst: SkipFirst<RunnableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"];
/**
 * @category Constructor
 */
export declare const spring: Spring<RunnableLike>["spring"];
export declare const startWith: StartWith<RunnableLike>["startWith"];
export declare const switchAll: SwitchAll<RunnableLike>["switchAll"];
export declare const switchMap: SwitchMap<RunnableLike>["switchMap"];
export declare const takeFirst: TakeFirst<RunnableLike>["takeFirst"];
export declare const takeLast: TakeLast<RunnableLike>["takeLast"];
export declare const takeUntil: TakeUntil<RunnableLike>["takeUntil"];
export declare const takeWhile: TakeWhile<RunnableLike>["takeWhile"];
export declare const throttle: Throttle<RunnableLike>["throttle"];
export declare const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"];
export declare const throws: Throws<RunnableLike, {
    delay?: number;
}>["throws"];
export declare const timeout: Timeout<RunnableLike>["timeout"];
export declare const toEnumerable: ToEnumerable<RunnableLike>["toEnumerable"];
export declare const toFlowable: ToFlowable<RunnableLike>["toFlowable"];
export declare const toObservable: ToObservable<RunnableLike>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<RunnableLike>["toRunnable"];
/**
 * @category Constructor
 */
export declare const tween: Tween<RunnableLike>["tween"];
export declare const withCurrentTime: WithCurrentTime<RunnableLike>["withCurrentTime"];
export declare const withLatestFrom: WithLatestFrom<RunnableLike>["withLatestFrom"];
export declare const zip: Zip<RunnableLike>["zip"];
export declare const zipLatest: ZipLatest<RunnableLike>["zipLatest"];
export declare const zipWith: ZipWith<RunnableLike>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<RunnableLike>["zipWithLatestFrom"];
