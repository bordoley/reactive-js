import { Buffer, CatchError, Compute, Concat, ConcatAll, ConcatMap, ConcatWith, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, EverySatisfy, FlatMapIterable, ForEach, ForkConcat, ForkZip, FromIterable, FromOptional, FromReadonlyArray, FromSequence, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import { CombineLatest, Exhaust, ExhaustMap, ForkMerge, ForkZipLatest, FromEnumerable, MergeAll, MergeWith, Retry, RunnableLike, ScanAsync, SwitchAll, SwitchMap, TakeUntil, Throttle, Timeout, ToEnumerable, ToObservable, ToRunnable, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const buffer: Buffer<RunnableLike>["buffer"];
export declare const catchError: CatchError<RunnableLike>["catchError"];
export declare const combineLatest: CombineLatest<RunnableLike>["combineLatest"];
export declare const compute: Compute<RunnableLike, {
    delay: number;
}>["compute"];
export declare const concat: Concat<RunnableLike>["concat"];
export declare const concatAll: ConcatAll<RunnableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export declare const concatMap: ConcatMap<RunnableLike>["concatMap"];
export declare const concatWith: ConcatWith<RunnableLike>["concatWith"];
export declare const contains: Contains<RunnableLike>["contains"];
export declare const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"];
export declare const defer: Defer<RunnableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"];
export declare const empty: Empty<RunnableLike, {
    delay: number;
}>["empty"];
export declare const encodeUtf8: EncodeUtf8<RunnableLike>["encodeUtf8"];
export declare const endWith: EndWith<RunnableLike>["endWith"];
export declare const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"];
export declare const exhaust: Exhaust<RunnableLike>["exhaust"];
export declare const exhaustMap: ExhaustMap<RunnableLike>["exhaustMap"];
export declare const first: <T>() => import("../functions.js").Function1<RunnableLike<T>, import("../functions.js").Optional<T>>;
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
export declare const fromSequence: FromSequence<RunnableLike>["fromSequence"];
export declare const generate: Generate<RunnableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["generate"];
export declare const ignoreElements: IgnoreElements<RunnableLike>["ignoreElements"];
export declare const keep: Keep<RunnableLike>["keep"];
export declare const keepType: KeepType<RunnableLike>["keepType"];
export declare const last: <T>() => import("../functions.js").Function1<RunnableLike<T>, import("../functions.js").Optional<T>>;
export declare const map: Map<RunnableLike>["map"];
export declare const mapTo: MapTo<RunnableLike>["mapTo"];
export declare const merge: <T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]) => RunnableLike<T>;
export declare const mergeAll: MergeAll<RunnableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["mergeAll"];
export declare const mergeWith: MergeWith<RunnableLike>["mergeWith"];
export declare const pairwise: Pairwise<RunnableLike>["pairwise"];
export declare const reduce: Reduce<RunnableLike>["reduce"];
export declare const retry: Retry<RunnableLike>["retry"];
export declare const run: <T>() => (observable: RunnableLike<T>) => void;
export declare const scan: Scan<RunnableLike>["scan"];
export declare const scanAsync: ScanAsync<RunnableLike, RunnableLike>["scanAsync"];
export declare const skipFirst: SkipFirst<RunnableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"];
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
export declare const withLatestFrom: WithLatestFrom<RunnableLike>["withLatestFrom"];
export declare const zip: Zip<RunnableLike>["zip"];
export declare const zipLatest: ZipLatest<RunnableLike>["zipLatest"];
export declare const zipWith: ZipWith<RunnableLike>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<RunnableLike>["zipWithLatestFrom"];
