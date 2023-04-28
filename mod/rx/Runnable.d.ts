import { Buffer, Concat, ConcatAll, ConcatMap, ConcatWith, Contains, DistinctUntilChanged, EndWith, EnumeratorLike, EverySatisfy, First, FlatMapIterable, ForEach, ForkConcat, ForkZip, Identity, IgnoreElements, Keep, KeepType, Last, Map, MapTo, NoneSatisfy, Pairwise, Pick, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import * as Containers from "../containers.js";
import { Factory, Function1, Optional, Updater } from "../functions.js";
import { Animate, BackpressureStrategy, CatchError, CombineLatest, CurrentTime, DecodeWithCharset, Defer, DispatchTo, EncodeUtf8, Enqueue, Exhaust, ExhaustMap, FirstAsync, Flow, ForkMerge, ForkZipLatest, LastAsync, Merge, MergeAll, MergeMap, MergeWith, Retry, RunnableLike, ScanLast, ScanMany, SwitchAll, SwitchMap, TakeUntil, Throttle, ThrowIfEmpty, Timeout, ToEnumerable, WithCurrentTime, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import type * as Rx from "../rx.js";
export declare const animate: Animate<RunnableLike>["animate"];
export declare const backpressureStrategy: BackpressureStrategy<RunnableLike>["backpressureStrategy"];
export declare const buffer: Buffer<RunnableLike>["buffer"];
export declare const catchError: CatchError<RunnableLike>["catchError"];
export declare const combineLatest: CombineLatest<RunnableLike>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => RunnableLike<T>;
export declare const concat: Concat<RunnableLike>["concat"];
export declare const concatAll: ConcatAll<RunnableLike>["concatAll"];
export declare const concatMap: ConcatMap<RunnableLike>["concatMap"];
export declare const concatWith: ConcatWith<RunnableLike>["concatWith"];
export declare const contains: Contains<RunnableLike>["contains"];
export declare const currentTime: CurrentTime<RunnableLike>["currentTime"];
export declare const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"];
export declare const defer: Defer<RunnableLike>["defer"];
export declare const dispatchTo: DispatchTo<RunnableLike>["dispatchTo"];
export declare const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"];
interface Empty extends Containers.Empty<RunnableLike> {
    /**
     * @category Constructor
     */
    empty<T>(options?: {
        delay?: number;
    }): RunnableLike<T>;
}
export declare const empty: Empty["empty"];
export declare const encodeUtf8: EncodeUtf8<RunnableLike>["encodeUtf8"];
export declare const enqueue: Enqueue<RunnableLike>["enqueue"];
export declare const endWith: EndWith<RunnableLike>["endWith"];
export declare const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"];
export declare const exhaust: Exhaust<RunnableLike>["exhaust"];
export declare const exhaustMap: ExhaustMap<RunnableLike>["exhaustMap"];
export declare const first: First<RunnableLike>["first"];
export declare const firstAsync: FirstAsync<RunnableLike>["firstAsync"];
export declare const flatMapIterable: FlatMapIterable<RunnableLike>["flatMapIterable"];
export declare const flow: Flow<RunnableLike>["flow"];
export declare const forEach: ForEach<RunnableLike>["forEach"];
export declare const forkConcat: ForkConcat<RunnableLike>["forkConcat"];
export declare const forkMerge: ForkMerge<RunnableLike>["forkMerge"];
export declare const forkZip: ForkZip<RunnableLike>["forkZip"];
export declare const forkZipLatest: ForkZipLatest<RunnableLike>["forkZipLatest"];
interface FromEnumeratorFactory extends Containers.FromEnumeratorFactory<RunnableLike> {
    /**
     * @category Constructor
     */
    fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
}
export declare const fromEnumeratorFactory: FromEnumeratorFactory["fromEnumeratorFactory"];
interface FromFactory extends Containers.FromFactory<RunnableLike> {
    /**
     * @category Constructor
     */
    fromFactory<T>(factory: Factory<T>, options?: {
        readonly delay?: number;
    }): RunnableLike<T>;
}
export declare const fromFactory: FromFactory["fromFactory"];
interface FromIterable extends Containers.FromIterable<RunnableLike> {
    /**
     * @category Constructor
     */
    fromIterable<T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, RunnableLike<T>>;
}
export declare const fromIterable: FromIterable["fromIterable"];
interface FromOptional extends Containers.FromOptional<RunnableLike> {
    /**
     * @category Constructor
     */
    fromOptional<T>(options?: {
        readonly delay?: number;
    }): Function1<Optional<T>, RunnableLike<T>>;
}
export declare const fromOptional: FromOptional["fromOptional"];
interface FromReadonlyArray extends Containers.FromReadonlyArray<RunnableLike> {
    /**
     * @category Constructor
     */
    fromReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly start?: number;
    }): Function1<readonly T[], RunnableLike<T>>;
}
export declare const fromReadonlyArray: FromReadonlyArray["fromReadonlyArray"];
interface Generate extends Containers.Generate<RunnableLike> {
    /**
     * @category Constructor
     */
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
}
export declare const generate: Generate["generate"];
export declare const identity: Identity<RunnableLike>["identity"];
export declare const ignoreElements: IgnoreElements<RunnableLike>["ignoreElements"];
export declare const keep: Keep<RunnableLike>["keep"];
export declare const keepType: KeepType<RunnableLike>["keepType"];
export declare const last: Last<RunnableLike>["last"];
export declare const lastAsync: LastAsync<RunnableLike>["lastAsync"];
export declare const noneSatisfy: NoneSatisfy<RunnableLike>["noneSatisfy"];
export declare const map: Map<RunnableLike>["map"];
export declare const mapTo: MapTo<RunnableLike>["mapTo"];
export declare const merge: Merge<RunnableLike>["merge"];
export declare const mergeAll: MergeAll<RunnableLike>["mergeAll"];
export declare const mergeMap: MergeMap<RunnableLike>["mergeMap"];
export declare const mergeWith: MergeWith<RunnableLike>["mergeWith"];
export declare const pairwise: Pairwise<RunnableLike>["pairwise"];
export declare const pick: Pick<RunnableLike>["pick"];
export declare const reduce: Reduce<RunnableLike>["reduce"];
export declare const repeat: Repeat<RunnableLike>["repeat"];
export declare const retry: Retry<RunnableLike>["retry"];
export declare const run: <T>(options?: {
    readonly backpressureStrategy: "overflow" | "drop-latest" | "drop-oldest" | "throw";
    readonly capacity?: number | undefined;
} | undefined) => (observable: RunnableLike<T>) => void;
export declare const scan: Scan<RunnableLike>["scan"];
export declare const scanLast: ScanLast<RunnableLike>["scanLast"];
export declare const scanMany: ScanMany<RunnableLike>["scanMany"];
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
interface Throws extends Rx.Throws<RunnableLike> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): RunnableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: Timeout<RunnableLike>["timeout"];
export declare const toEnumerable: ToEnumerable<RunnableLike>["toEnumerable"];
export declare const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"];
export declare const withCurrentTime: WithCurrentTime<RunnableLike>["withCurrentTime"];
export declare const withLatestFrom: WithLatestFrom<RunnableLike>["withLatestFrom"];
export declare const zip: Zip<RunnableLike>["zip"];
export declare const zipLatest: ZipLatest<RunnableLike>["zipLatest"];
export declare const zipWith: ZipWith<RunnableLike>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<RunnableLike>["zipWithLatestFrom"];
export {};
