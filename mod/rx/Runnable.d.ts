import { Buffer, Concat, ConcatAll, ConcatMap, ConcatWith, Contains, DistinctUntilChanged, EndWith, EnumeratorLike, EverySatisfy, First, FlatMapIterable, ForEach, ForkConcat, ForkZip, Identity, IgnoreElements, Keep, KeepType, Last, Map, MapTo, NoneSatisfy, Pairwise, Pick, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import * as Containers from "../containers.js";
import { Factory, Function1, Optional, Updater } from "../functions.js";
import { Animate, BackpressureStrategy, CatchError, CombineLatest, CurrentTime, DecodeWithCharset, Defer, DispatchTo, EncodeUtf8, Enqueue, Exhaust, ExhaustMap, FirstAsync, Flow, ForkMerge, ForkZipLatest, LastAsync, Merge, MergeAll, MergeMap, MergeWith, Retry, RunnableContainer, RunnableLike, ScanLast, ScanMany, SwitchAll, SwitchMap, TakeUntil, Throttle, ThrowIfEmpty, Timeout, ToEnumerable, WithCurrentTime, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import type * as Rx from "../rx.js";
export declare const animate: Animate<RunnableContainer>["animate"];
export declare const backpressureStrategy: BackpressureStrategy<RunnableContainer>["backpressureStrategy"];
export declare const buffer: Buffer<RunnableContainer>["buffer"];
export declare const catchError: CatchError<RunnableContainer>["catchError"];
export declare const combineLatest: CombineLatest<RunnableContainer>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => RunnableLike<T>;
export declare const concat: Concat<RunnableContainer>["concat"];
export declare const concatAll: ConcatAll<RunnableContainer>["concatAll"];
export declare const concatMap: ConcatMap<RunnableContainer>["concatMap"];
export declare const concatWith: ConcatWith<RunnableContainer>["concatWith"];
export declare const contains: Contains<RunnableContainer>["contains"];
export declare const currentTime: CurrentTime<RunnableContainer>["currentTime"];
export declare const decodeWithCharset: DecodeWithCharset<RunnableContainer>["decodeWithCharset"];
export declare const defer: Defer<RunnableContainer>["defer"];
export declare const dispatchTo: DispatchTo<RunnableContainer>["dispatchTo"];
export declare const distinctUntilChanged: DistinctUntilChanged<RunnableContainer>["distinctUntilChanged"];
interface Empty extends Containers.Empty<RunnableContainer> {
    /**
     * @category Constructor
     */
    empty<T>(options?: {
        delay?: number;
    }): RunnableLike<T>;
}
export declare const empty: Empty["empty"];
export declare const encodeUtf8: EncodeUtf8<RunnableContainer>["encodeUtf8"];
export declare const enqueue: Enqueue<RunnableContainer>["enqueue"];
export declare const endWith: EndWith<RunnableContainer>["endWith"];
export declare const everySatisfy: EverySatisfy<RunnableContainer>["everySatisfy"];
export declare const exhaust: Exhaust<RunnableContainer>["exhaust"];
export declare const exhaustMap: ExhaustMap<RunnableContainer>["exhaustMap"];
export declare const first: First<RunnableContainer>["first"];
export declare const firstAsync: FirstAsync<RunnableContainer>["firstAsync"];
export declare const flatMapIterable: FlatMapIterable<RunnableContainer>["flatMapIterable"];
export declare const flow: Flow<RunnableContainer>["flow"];
export declare const forEach: ForEach<RunnableContainer>["forEach"];
export declare const forkConcat: ForkConcat<RunnableContainer>["forkConcat"];
export declare const forkMerge: ForkMerge<RunnableContainer>["forkMerge"];
export declare const forkZip: ForkZip<RunnableContainer>["forkZip"];
export declare const forkZipLatest: ForkZipLatest<RunnableContainer>["forkZipLatest"];
interface FromEnumeratorFactory extends Containers.FromEnumeratorFactory<RunnableContainer> {
    /**
     * @category Constructor
     */
    fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
}
export declare const fromEnumeratorFactory: FromEnumeratorFactory["fromEnumeratorFactory"];
interface FromFactory extends Containers.FromFactory<RunnableContainer> {
    /**
     * @category Constructor
     */
    fromFactory<T>(factory: Factory<T>, options?: {
        readonly delay?: number;
    }): RunnableLike<T>;
}
export declare const fromFactory: FromFactory["fromFactory"];
interface FromIterable extends Containers.FromIterable<RunnableContainer> {
    /**
     * @category Constructor
     */
    fromIterable<T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, RunnableLike<T>>;
}
export declare const fromIterable: FromIterable["fromIterable"];
interface FromOptional extends Containers.FromOptional<RunnableContainer> {
    /**
     * @category Constructor
     */
    fromOptional<T>(options?: {
        readonly delay?: number;
    }): Function1<Optional<T>, RunnableLike<T>>;
}
export declare const fromOptional: FromOptional["fromOptional"];
interface FromReadonlyArray extends Containers.FromReadonlyArray<RunnableContainer> {
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
interface Generate extends Containers.Generate<RunnableContainer> {
    /**
     * @category Constructor
     */
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
}
export declare const generate: Generate["generate"];
export declare const identity: Identity<RunnableContainer>["identity"];
export declare const ignoreElements: IgnoreElements<RunnableContainer>["ignoreElements"];
export declare const keep: Keep<RunnableContainer>["keep"];
export declare const keepType: KeepType<RunnableContainer>["keepType"];
export declare const last: Last<RunnableContainer>["last"];
export declare const lastAsync: LastAsync<RunnableContainer>["lastAsync"];
export declare const noneSatisfy: NoneSatisfy<RunnableContainer>["noneSatisfy"];
export declare const map: Map<RunnableContainer>["map"];
export declare const mapTo: MapTo<RunnableContainer>["mapTo"];
export declare const merge: Merge<RunnableContainer>["merge"];
export declare const mergeAll: MergeAll<RunnableContainer>["mergeAll"];
export declare const mergeMap: MergeMap<RunnableContainer>["mergeMap"];
export declare const mergeWith: MergeWith<RunnableContainer>["mergeWith"];
export declare const pairwise: Pairwise<RunnableContainer>["pairwise"];
export declare const pick: Pick<RunnableContainer>["pick"];
export declare const reduce: Reduce<RunnableContainer>["reduce"];
export declare const repeat: Repeat<RunnableContainer>["repeat"];
export declare const retry: Retry<RunnableContainer>["retry"];
export declare const run: <T>(options?: {
    readonly backpressureStrategy: "overflow" | "drop-latest" | "drop-oldest" | "throw";
    readonly capacity?: number | undefined;
} | undefined) => (observable: RunnableLike<T>) => void;
export declare const scan: Scan<RunnableContainer>["scan"];
export declare const scanLast: ScanLast<RunnableContainer>["scanLast"];
export declare const scanMany: ScanMany<RunnableContainer>["scanMany"];
export declare const skipFirst: SkipFirst<RunnableContainer>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<RunnableContainer>["someSatisfy"];
export declare const startWith: StartWith<RunnableContainer>["startWith"];
export declare const switchAll: SwitchAll<RunnableContainer>["switchAll"];
export declare const switchMap: SwitchMap<RunnableContainer>["switchMap"];
export declare const takeFirst: TakeFirst<RunnableContainer>["takeFirst"];
export declare const takeLast: TakeLast<RunnableContainer>["takeLast"];
export declare const takeUntil: TakeUntil<RunnableContainer>["takeUntil"];
export declare const takeWhile: TakeWhile<RunnableContainer>["takeWhile"];
export declare const throttle: Throttle<RunnableContainer>["throttle"];
export declare const throwIfEmpty: ThrowIfEmpty<RunnableContainer>["throwIfEmpty"];
interface Throws extends Rx.Throws<RunnableContainer> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): RunnableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: Timeout<RunnableContainer>["timeout"];
export declare const toEnumerable: ToEnumerable<RunnableContainer>["toEnumerable"];
export declare const toReadonlyArray: ToReadonlyArray<RunnableContainer>["toReadonlyArray"];
export declare const withCurrentTime: WithCurrentTime<RunnableContainer>["withCurrentTime"];
export declare const withLatestFrom: WithLatestFrom<RunnableContainer>["withLatestFrom"];
export declare const zip: Zip<RunnableContainer>["zip"];
export declare const zipLatest: ZipLatest<RunnableContainer>["zipLatest"];
export declare const zipWith: ZipWith<RunnableContainer>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<RunnableContainer>["zipWithLatestFrom"];
export {};
