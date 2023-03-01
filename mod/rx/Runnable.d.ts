import { Buffer, CatchError, Compute, Concat, ConcatAll, ConcatMap, ConcatWith, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, EverySatisfy, FlatMapIterable, ForEach, ForkConcat, ForkZip, FromIterable, FromReadonlyArray, FromSequence, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import { FromEnumerable } from "../ix.js";
import { Exhaust, ExhaustMap, ForkMerge, ForkZipLatest, MergeAll, MergeWith, Retry, RunnableLike, ScanAsync, SwitchAll, SwitchMap, TakeUntil, Throttle, Timeout, ToObservable, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const buffer: Buffer<RunnableLike>["buffer"];
export declare const catchError: CatchError<RunnableLike>["catchError"];
export declare const combineLatest: {
    <TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableLike<readonly [TA, TB]>;
    <TA_1, TB_1, TC>(a: RunnableLike<TA_1>, b: RunnableLike<TB_1>, c: RunnableLike<TC>): RunnableLike<readonly [TA_1, TB_1, TC]>;
    <TA_2, TB_2, TC_1, TD>(a: RunnableLike<TA_2>, b: RunnableLike<TB_2>, c: RunnableLike<TC_1>, d: RunnableLike<TD>): RunnableLike<readonly [TA_2, TB_2, TC_1, TD]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: RunnableLike<TA_3>, b: RunnableLike<TB_3>, c: RunnableLike<TC_2>, d: RunnableLike<TD_1>, e: RunnableLike<TE>): RunnableLike<readonly [TA_3, TB_3, TC_2, TD_1, TE]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: RunnableLike<TA_4>, b: RunnableLike<TB_4>, c: RunnableLike<TC_3>, d: RunnableLike<TD_2>, e: RunnableLike<TE_1>, f: RunnableLike<TF>): RunnableLike<readonly [TA_4, TB_4, TC_3, TD_2, TE_1, TF]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: RunnableLike<TA_5>, b: RunnableLike<TB_5>, c: RunnableLike<TC_4>, d: RunnableLike<TD_3>, e: RunnableLike<TE_2>, f: RunnableLike<TF_1>, g: RunnableLike<TG>): RunnableLike<readonly [TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: RunnableLike<TA_6>, b: RunnableLike<TB_6>, c: RunnableLike<TC_5>, d: RunnableLike<TD_4>, e: RunnableLike<TE_3>, f: RunnableLike<TF_2>, g: RunnableLike<TG_1>, h: RunnableLike<TH>): RunnableLike<readonly [TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: RunnableLike<TA_7>, b: RunnableLike<TB_7>, c: RunnableLike<TC_6>, d: RunnableLike<TD_5>, e: RunnableLike<TE_4>, f: RunnableLike<TF_3>, g: RunnableLike<TG_2>, h: RunnableLike<TH_1>, i: RunnableLike<TI>): RunnableLike<readonly [TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
};
export declare const compute: Compute<RunnableLike>["compute"];
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
    delayStart?: boolean;
}>["throws"];
export declare const timeout: Timeout<RunnableLike>["timeout"];
export declare const toFlowable: ToFlowable<RunnableLike>["toFlowable"];
export declare const toObservable: ToObservable<RunnableLike>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"];
export declare const withLatestFrom: WithLatestFrom<RunnableLike>["withLatestFrom"];
export declare const zip: Zip<RunnableLike>["zip"];
export declare const zipLatest: ZipLatest<RunnableLike>["zipLatest"];
export declare const zipWith: ZipWith<RunnableLike>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<RunnableLike>["zipWithLatestFrom"];
