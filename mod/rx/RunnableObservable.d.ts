import { Buffer, CatchError, Compute, Concat, ConcatAll, ConcatMap, ConcatWith, ConcatYieldMap, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, EverySatisfy, ForEach, ForkConcat, ForkZip, FromIterable, FromReadonlyArray, FromSequence, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import { FromEnumerable } from "../ix.js";
import { Exhaust, ExhaustMap, ForkMerge, ForkZipLatest, MergeAll, MergeWith, Retry, RunnableObservableLike, ScanAsync, SwitchAll, SwitchMap, TakeUntil, Throttle, Timeout, ToObservable, ToRunnable, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const buffer: Buffer<RunnableObservableLike>["buffer"];
export declare const catchError: CatchError<RunnableObservableLike>["catchError"];
export declare const combineLatest: {
    <TA, TB>(a: RunnableObservableLike<TA>, b: RunnableObservableLike<TB>): RunnableObservableLike<readonly [TA, TB]>;
    <TA_1, TB_1, TC>(a: RunnableObservableLike<TA_1>, b: RunnableObservableLike<TB_1>, c: RunnableObservableLike<TC>): RunnableObservableLike<readonly [TA_1, TB_1, TC]>;
    <TA_2, TB_2, TC_1, TD>(a: RunnableObservableLike<TA_2>, b: RunnableObservableLike<TB_2>, c: RunnableObservableLike<TC_1>, d: RunnableObservableLike<TD>): RunnableObservableLike<readonly [TA_2, TB_2, TC_1, TD]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: RunnableObservableLike<TA_3>, b: RunnableObservableLike<TB_3>, c: RunnableObservableLike<TC_2>, d: RunnableObservableLike<TD_1>, e: RunnableObservableLike<TE>): RunnableObservableLike<readonly [TA_3, TB_3, TC_2, TD_1, TE]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: RunnableObservableLike<TA_4>, b: RunnableObservableLike<TB_4>, c: RunnableObservableLike<TC_3>, d: RunnableObservableLike<TD_2>, e: RunnableObservableLike<TE_1>, f: RunnableObservableLike<TF>): RunnableObservableLike<readonly [TA_4, TB_4, TC_3, TD_2, TE_1, TF]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: RunnableObservableLike<TA_5>, b: RunnableObservableLike<TB_5>, c: RunnableObservableLike<TC_4>, d: RunnableObservableLike<TD_3>, e: RunnableObservableLike<TE_2>, f: RunnableObservableLike<TF_1>, g: RunnableObservableLike<TG>): RunnableObservableLike<readonly [TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: RunnableObservableLike<TA_6>, b: RunnableObservableLike<TB_6>, c: RunnableObservableLike<TC_5>, d: RunnableObservableLike<TD_4>, e: RunnableObservableLike<TE_3>, f: RunnableObservableLike<TF_2>, g: RunnableObservableLike<TG_1>, h: RunnableObservableLike<TH>): RunnableObservableLike<readonly [TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: RunnableObservableLike<TA_7>, b: RunnableObservableLike<TB_7>, c: RunnableObservableLike<TC_6>, d: RunnableObservableLike<TD_5>, e: RunnableObservableLike<TE_4>, f: RunnableObservableLike<TF_3>, g: RunnableObservableLike<TG_2>, h: RunnableObservableLike<TH_1>, i: RunnableObservableLike<TI>): RunnableObservableLike<readonly [TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
};
export declare const compute: Compute<RunnableObservableLike>["compute"];
export declare const concat: Concat<RunnableObservableLike>["concat"];
export declare const concatAll: ConcatAll<RunnableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export declare const concatMap: ConcatMap<RunnableObservableLike>["concatMap"];
export declare const concatWith: ConcatWith<RunnableObservableLike>["concatWith"];
export declare const concatYieldMap: ConcatYieldMap<RunnableObservableLike>["concatYieldMap"];
export declare const contains: Contains<RunnableObservableLike>["contains"];
export declare const decodeWithCharset: DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"];
export declare const defer: Defer<RunnableObservableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<RunnableObservableLike>["distinctUntilChanged"];
export declare const empty: Empty<RunnableObservableLike, {
    delay: number;
}>["empty"];
export declare const encodeUtf8: EncodeUtf8<RunnableObservableLike>["encodeUtf8"];
export declare const endWith: EndWith<RunnableObservableLike>["endWith"];
export declare const everySatisfy: EverySatisfy<RunnableObservableLike>["everySatisfy"];
export declare const exhaust: Exhaust<RunnableObservableLike>["exhaust"];
export declare const exhaustMap: ExhaustMap<RunnableObservableLike>["exhaustMap"];
export declare const forEach: ForEach<RunnableObservableLike>["forEach"];
export declare const forkConcat: ForkConcat<RunnableObservableLike>["forkConcat"];
export declare const forkMerge: ForkMerge<RunnableObservableLike>["forkMerge"];
export declare const forkZip: ForkZip<RunnableObservableLike>["forkZip"];
export declare const forkZipLatest: ForkZipLatest<RunnableObservableLike>["forkZipLatest"];
export declare const fromEnumerable: FromEnumerable<RunnableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromEnumerable"];
export declare const fromIterable: FromIterable<RunnableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<RunnableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<RunnableObservableLike>["fromSequence"];
export declare const generate: Generate<RunnableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["generate"];
export declare const ignoreElements: IgnoreElements<RunnableObservableLike>["ignoreElements"];
export declare const keep: Keep<RunnableObservableLike>["keep"];
export declare const keepType: KeepType<RunnableObservableLike>["keepType"];
export declare const map: Map<RunnableObservableLike>["map"];
export declare const mapTo: MapTo<RunnableObservableLike>["mapTo"];
export declare const merge: <T>(fst: RunnableObservableLike<T>, snd: RunnableObservableLike<T>, ...tail: readonly RunnableObservableLike<T>[]) => RunnableObservableLike<T>;
export declare const mergeAll: MergeAll<RunnableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["mergeAll"];
export declare const mergeWith: MergeWith<RunnableObservableLike>["mergeWith"];
export declare const pairwise: Pairwise<RunnableObservableLike>["pairwise"];
export declare const reduce: Reduce<RunnableObservableLike>["reduce"];
export declare const retry: Retry<RunnableObservableLike>["retry"];
export declare const scan: Scan<RunnableObservableLike>["scan"];
export declare const scanAsync: ScanAsync<RunnableObservableLike, RunnableObservableLike>["scanAsync"];
export declare const skipFirst: SkipFirst<RunnableObservableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<RunnableObservableLike>["someSatisfy"];
export declare const startWith: StartWith<RunnableObservableLike>["startWith"];
export declare const switchAll: SwitchAll<RunnableObservableLike>["switchAll"];
export declare const switchMap: SwitchMap<RunnableObservableLike>["switchMap"];
export declare const takeFirst: TakeFirst<RunnableObservableLike>["takeFirst"];
export declare const takeLast: TakeLast<RunnableObservableLike>["takeLast"];
export declare const takeUntil: TakeUntil<RunnableObservableLike>["takeUntil"];
export declare const takeWhile: TakeWhile<RunnableObservableLike>["takeWhile"];
export declare const throttle: Throttle<RunnableObservableLike>["throttle"];
export declare const throwIfEmpty: ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"];
export declare const throws: Throws<RunnableObservableLike, {
    delay?: number;
    delayStart?: boolean;
}>["throws"];
export declare const timeout: Timeout<RunnableObservableLike>["timeout"];
export declare const toFlowable: ToFlowable<RunnableObservableLike>["toFlowable"];
export declare const toObservable: ToObservable<RunnableObservableLike>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<RunnableObservableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<RunnableObservableLike>["toRunnable"];
export declare const withLatestFrom: WithLatestFrom<RunnableObservableLike>["withLatestFrom"];
export declare const zip: Zip<RunnableObservableLike>["zip"];
export declare const zipLatest: ZipLatest<RunnableObservableLike>["zipLatest"];
export declare const zipWith: ZipWith<RunnableObservableLike>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<RunnableObservableLike>["zipWithLatestFrom"];
