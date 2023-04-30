import { Buffer, Concat, ConcatAll, ConcatMap, ConcatWith, Contains, DistinctUntilChanged, EndWith, EnumeratorLike, EverySatisfy, First, FlatMapIterable, ForEach, ForkConcat, ForkZip, Identity, IgnoreElements, Keep, KeepType, Last, Map, MapTo, NoneSatisfy, Pairwise, Pick, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import * as Containers from "../containers.js";
import { Factory, Function1, Optional, Updater } from "../functions.js";
import { Animate, BackpressureStrategy, CatchError, CombineLatest, CurrentTime, DecodeWithCharset, Defer, DispatchTo, EncodeUtf8, Enqueue, Exhaust, ExhaustMap, FirstAsync, Flow, ForkMerge, ForkZipLatest, LastAsync, Merge, MergeAll, MergeMap, MergeWith, Retry, RunnableContainerLike, RunnableLike, ScanLast, ScanMany, SwitchAll, SwitchMap, TakeUntil, Throttle, ThrowIfEmpty, Timeout, ToEnumerable, WithCurrentTime, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import type * as Rx from "../rx.js";
export declare const animate: Animate<RunnableContainerLike>["animate"];
export declare const backpressureStrategy: BackpressureStrategy<RunnableContainerLike>["backpressureStrategy"];
export declare const buffer: Buffer<RunnableContainerLike>["buffer"];
export declare const catchError: CatchError<RunnableContainerLike>["catchError"];
export declare const combineLatest: CombineLatest<RunnableContainerLike>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => RunnableLike<T>;
export declare const concat: Concat<RunnableContainerLike>["concat"];
export declare const concatAll: ConcatAll<RunnableContainerLike>["concatAll"];
export declare const concatMap: ConcatMap<RunnableContainerLike>["concatMap"];
export declare const concatWith: ConcatWith<RunnableContainerLike>["concatWith"];
export declare const contains: Contains<RunnableContainerLike>["contains"];
export declare const currentTime: CurrentTime<RunnableContainerLike>["currentTime"];
export declare const decodeWithCharset: DecodeWithCharset<RunnableContainerLike>["decodeWithCharset"];
export declare const defer: Defer<RunnableContainerLike>["defer"];
export declare const dispatchTo: DispatchTo<RunnableContainerLike>["dispatchTo"];
export declare const distinctUntilChanged: DistinctUntilChanged<RunnableContainerLike>["distinctUntilChanged"];
interface Empty extends Containers.Empty<RunnableContainerLike> {
    /**
     * @category Constructor
     */
    empty<T>(options?: {
        delay?: number;
    }): RunnableLike<T>;
}
export declare const empty: Empty["empty"];
export declare const encodeUtf8: EncodeUtf8<RunnableContainerLike>["encodeUtf8"];
export declare const enqueue: Enqueue<RunnableContainerLike>["enqueue"];
export declare const endWith: EndWith<RunnableContainerLike>["endWith"];
export declare const everySatisfy: EverySatisfy<RunnableContainerLike>["everySatisfy"];
export declare const exhaust: Exhaust<RunnableContainerLike>["exhaust"];
export declare const exhaustMap: ExhaustMap<RunnableContainerLike>["exhaustMap"];
export declare const first: First<RunnableContainerLike>["first"];
export declare const firstAsync: FirstAsync<RunnableContainerLike>["firstAsync"];
export declare const flatMapIterable: FlatMapIterable<RunnableContainerLike>["flatMapIterable"];
export declare const flow: Flow<RunnableContainerLike>["flow"];
export declare const forEach: ForEach<RunnableContainerLike>["forEach"];
export declare const forkConcat: ForkConcat<RunnableContainerLike>["forkConcat"];
export declare const forkMerge: ForkMerge<RunnableContainerLike>["forkMerge"];
export declare const forkZip: ForkZip<RunnableContainerLike>["forkZip"];
export declare const forkZipLatest: ForkZipLatest<RunnableContainerLike>["forkZipLatest"];
interface FromEnumeratorFactory extends Containers.FromEnumeratorFactory<RunnableContainerLike> {
    /**
     * @category Constructor
     */
    fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
}
export declare const fromEnumeratorFactory: FromEnumeratorFactory["fromEnumeratorFactory"];
interface FromFactory extends Containers.FromFactory<RunnableContainerLike> {
    /**
     * @category Constructor
     */
    fromFactory<T>(factory: Factory<T>, options?: {
        readonly delay?: number;
    }): RunnableLike<T>;
}
export declare const fromFactory: FromFactory["fromFactory"];
interface FromIterable extends Containers.FromIterable<RunnableContainerLike> {
    /**
     * @category Constructor
     */
    fromIterable<T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, RunnableLike<T>>;
}
export declare const fromIterable: FromIterable["fromIterable"];
interface FromOptional extends Containers.FromOptional<RunnableContainerLike> {
    /**
     * @category Constructor
     */
    fromOptional<T>(options?: {
        readonly delay?: number;
    }): Function1<Optional<T>, RunnableLike<T>>;
}
export declare const fromOptional: FromOptional["fromOptional"];
interface FromReadonlyArray extends Containers.FromReadonlyArray<RunnableContainerLike> {
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
interface Generate extends Containers.Generate<RunnableContainerLike> {
    /**
     * @category Constructor
     */
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
}
export declare const generate: Generate["generate"];
export declare const identity: Identity<RunnableContainerLike>["identity"];
export declare const ignoreElements: IgnoreElements<RunnableContainerLike>["ignoreElements"];
export declare const keep: Keep<RunnableContainerLike>["keep"];
export declare const keepType: KeepType<RunnableContainerLike>["keepType"];
export declare const last: Last<RunnableContainerLike>["last"];
export declare const lastAsync: LastAsync<RunnableContainerLike>["lastAsync"];
export declare const noneSatisfy: NoneSatisfy<RunnableContainerLike>["noneSatisfy"];
export declare const map: Map<RunnableContainerLike>["map"];
export declare const mapTo: MapTo<RunnableContainerLike>["mapTo"];
export declare const merge: Merge<RunnableContainerLike>["merge"];
export declare const mergeAll: MergeAll<RunnableContainerLike>["mergeAll"];
export declare const mergeMap: MergeMap<RunnableContainerLike>["mergeMap"];
export declare const mergeWith: MergeWith<RunnableContainerLike>["mergeWith"];
export declare const pairwise: Pairwise<RunnableContainerLike>["pairwise"];
export declare const pick: Pick<RunnableContainerLike>["pick"];
export declare const reduce: Reduce<RunnableContainerLike>["reduce"];
export declare const repeat: Repeat<RunnableContainerLike>["repeat"];
export declare const retry: Retry<RunnableContainerLike>["retry"];
export declare const run: <T>(options?: {
    readonly backpressureStrategy: "overflow" | "drop-latest" | "drop-oldest" | "throw";
    readonly capacity?: number | undefined;
} | undefined) => (observable: RunnableLike<T>) => void;
export declare const scan: Scan<RunnableContainerLike>["scan"];
export declare const scanLast: ScanLast<RunnableContainerLike>["scanLast"];
export declare const scanMany: ScanMany<RunnableContainerLike>["scanMany"];
export declare const skipFirst: SkipFirst<RunnableContainerLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<RunnableContainerLike>["someSatisfy"];
export declare const startWith: StartWith<RunnableContainerLike>["startWith"];
export declare const switchAll: SwitchAll<RunnableContainerLike>["switchAll"];
export declare const switchMap: SwitchMap<RunnableContainerLike>["switchMap"];
export declare const takeFirst: TakeFirst<RunnableContainerLike>["takeFirst"];
export declare const takeLast: TakeLast<RunnableContainerLike>["takeLast"];
export declare const takeUntil: TakeUntil<RunnableContainerLike>["takeUntil"];
export declare const takeWhile: TakeWhile<RunnableContainerLike>["takeWhile"];
export declare const throttle: Throttle<RunnableContainerLike>["throttle"];
export declare const throwIfEmpty: ThrowIfEmpty<RunnableContainerLike>["throwIfEmpty"];
interface Throws extends Rx.Throws<RunnableContainerLike> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): RunnableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: Timeout<RunnableContainerLike>["timeout"];
export declare const toEnumerable: ToEnumerable<RunnableContainerLike>["toEnumerable"];
export declare const toReadonlyArray: ToReadonlyArray<RunnableContainerLike>["toReadonlyArray"];
export declare const withCurrentTime: WithCurrentTime<RunnableContainerLike>["withCurrentTime"];
export declare const withLatestFrom: WithLatestFrom<RunnableContainerLike>["withLatestFrom"];
export declare const zip: Zip<RunnableContainerLike>["zip"];
export declare const zipLatest: ZipLatest<RunnableContainerLike>["zipLatest"];
export declare const zipWith: ZipWith<RunnableContainerLike>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<RunnableContainerLike>["zipWithLatestFrom"];
export {};
