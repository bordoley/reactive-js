import { Container, EnumeratorLike } from "../containers.js";
import { Factory, Function1, Optional, Updater } from "../functions.js";
import { Animate, BackpressureStrategy, CatchError, CombineLatest, CurrentTime, DecodeWithCharset, Defer, DispatchTo, EncodeUtf8, Enqueue, Exhaust, ExhaustMap, FirstAsync, Flow, ForkMerge, ForkZipLatest, LastAsync, Merge, MergeAll, MergeMap, MergeWith, Retry, RunnableContainer, RunnableLike, ScanLast, ScanMany, SwitchAll, SwitchMap, TakeUntil, Throttle, ThrowIfEmpty, Timeout, ToEnumerable, WithCurrentTime, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import type * as Rx from "../rx.js";
export declare const animate: Animate<RunnableContainer>["animate"];
export declare const backpressureStrategy: BackpressureStrategy<RunnableContainer>["backpressureStrategy"];
export declare const buffer: Container.Buffer<RunnableContainer>["buffer"];
export declare const catchError: CatchError<RunnableContainer>["catchError"];
export declare const combineLatest: CombineLatest<RunnableContainer>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => RunnableLike<T>;
export declare const concat: Container.Concat<RunnableContainer>["concat"];
export declare const concatAll: Container.ConcatAll<RunnableContainer>["concatAll"];
export declare const concatMap: Container.ConcatMap<RunnableContainer>["concatMap"];
export declare const concatWith: Container.ConcatWith<RunnableContainer>["concatWith"];
export declare const contains: Container.Contains<RunnableContainer>["contains"];
export declare const currentTime: CurrentTime<RunnableContainer>["currentTime"];
export declare const decodeWithCharset: DecodeWithCharset<RunnableContainer>["decodeWithCharset"];
export declare const defer: Defer<RunnableContainer>["defer"];
export declare const dispatchTo: DispatchTo<RunnableContainer>["dispatchTo"];
export declare const distinctUntilChanged: Container.DistinctUntilChanged<RunnableContainer>["distinctUntilChanged"];
interface Empty extends Container.Empty<RunnableContainer> {
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
export declare const endWith: Container.EndWith<RunnableContainer>["endWith"];
export declare const everySatisfy: Container.EverySatisfy<RunnableContainer>["everySatisfy"];
export declare const exhaust: Exhaust<RunnableContainer>["exhaust"];
export declare const exhaustMap: ExhaustMap<RunnableContainer>["exhaustMap"];
export declare const first: Container.First<RunnableContainer>["first"];
export declare const firstAsync: FirstAsync<RunnableContainer>["firstAsync"];
export declare const flatMapIterable: Container.FlatMapIterable<RunnableContainer>["flatMapIterable"];
export declare const flow: Flow<RunnableContainer>["flow"];
export declare const forEach: Container.ForEach<RunnableContainer>["forEach"];
export declare const forkConcat: Container.ForkConcat<RunnableContainer>["forkConcat"];
export declare const forkMerge: ForkMerge<RunnableContainer>["forkMerge"];
export declare const forkZip: Container.ForkZip<RunnableContainer>["forkZip"];
export declare const forkZipLatest: ForkZipLatest<RunnableContainer>["forkZipLatest"];
interface FromEnumeratorFactory extends Container.FromEnumeratorFactory<RunnableContainer> {
    /**
     * @category Constructor
     */
    fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
}
export declare const fromEnumeratorFactory: FromEnumeratorFactory["fromEnumeratorFactory"];
interface FromFactory extends Container.FromFactory<RunnableContainer> {
    /**
     * @category Constructor
     */
    fromFactory<T>(factory: Factory<T>, options?: {
        readonly delay?: number;
    }): RunnableLike<T>;
}
export declare const fromFactory: FromFactory["fromFactory"];
interface FromIterable extends Container.FromIterable<RunnableContainer> {
    /**
     * @category Constructor
     */
    fromIterable<T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, RunnableLike<T>>;
}
export declare const fromIterable: FromIterable["fromIterable"];
interface FromOptional extends Container.FromOptional<RunnableContainer> {
    /**
     * @category Constructor
     */
    fromOptional<T>(options?: {
        readonly delay?: number;
    }): Function1<Optional<T>, RunnableLike<T>>;
}
export declare const fromOptional: FromOptional["fromOptional"];
interface FromReadonlyArray extends Container.FromReadonlyArray<RunnableContainer> {
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
interface Generate extends Container.Generate<RunnableContainer> {
    /**
     * @category Constructor
     */
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
}
export declare const generate: Generate["generate"];
export declare const identity: Container.Identity<RunnableContainer>["identity"];
export declare const ignoreElements: Container.IgnoreElements<RunnableContainer>["ignoreElements"];
export declare const keep: Container.Keep<RunnableContainer>["keep"];
export declare const keepType: Container.KeepType<RunnableContainer>["keepType"];
export declare const last: Container.Last<RunnableContainer>["last"];
export declare const lastAsync: LastAsync<RunnableContainer>["lastAsync"];
export declare const noneSatisfy: Container.NoneSatisfy<RunnableContainer>["noneSatisfy"];
export declare const map: Container.Map<RunnableContainer>["map"];
export declare const mapTo: Container.MapTo<RunnableContainer>["mapTo"];
export declare const merge: Merge<RunnableContainer>["merge"];
export declare const mergeAll: MergeAll<RunnableContainer>["mergeAll"];
export declare const mergeMap: MergeMap<RunnableContainer>["mergeMap"];
export declare const mergeWith: MergeWith<RunnableContainer>["mergeWith"];
export declare const pairwise: Container.Pairwise<RunnableContainer>["pairwise"];
export declare const pick: Container.Pick<RunnableContainer>["pick"];
export declare const reduce: Container.Reduce<RunnableContainer>["reduce"];
export declare const repeat: Container.Repeat<RunnableContainer>["repeat"];
export declare const retry: Retry<RunnableContainer>["retry"];
export declare const run: <T>(options?: {
    readonly backpressureStrategy: "overflow" | "drop-latest" | "drop-oldest" | "throw";
    readonly capacity?: number | undefined;
} | undefined) => (observable: RunnableLike<T>) => void;
export declare const scan: Container.Scan<RunnableContainer>["scan"];
export declare const scanLast: ScanLast<RunnableContainer>["scanLast"];
export declare const scanMany: ScanMany<RunnableContainer>["scanMany"];
export declare const skipFirst: Container.SkipFirst<RunnableContainer>["skipFirst"];
export declare const someSatisfy: Container.SomeSatisfy<RunnableContainer>["someSatisfy"];
export declare const startWith: Container.StartWith<RunnableContainer>["startWith"];
export declare const switchAll: SwitchAll<RunnableContainer>["switchAll"];
export declare const switchMap: SwitchMap<RunnableContainer>["switchMap"];
export declare const takeFirst: Container.TakeFirst<RunnableContainer>["takeFirst"];
export declare const takeLast: Container.TakeLast<RunnableContainer>["takeLast"];
export declare const takeUntil: TakeUntil<RunnableContainer>["takeUntil"];
export declare const takeWhile: Container.TakeWhile<RunnableContainer>["takeWhile"];
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
export declare const toReadonlyArray: Container.ToReadonlyArray<RunnableContainer>["toReadonlyArray"];
export declare const withCurrentTime: WithCurrentTime<RunnableContainer>["withCurrentTime"];
export declare const withLatestFrom: WithLatestFrom<RunnableContainer>["withLatestFrom"];
export declare const zip: Container.Zip<RunnableContainer>["zip"];
export declare const zipLatest: ZipLatest<RunnableContainer>["zipLatest"];
export declare const zipWith: Container.ZipWith<RunnableContainer>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<RunnableContainer>["zipWithLatestFrom"];
export {};
