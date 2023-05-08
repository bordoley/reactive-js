import { Container, ReactiveContainer, RunnableContainer, RunnableLike } from "../core.js";
import { Factory } from "../functions.js";
export declare const animate: ReactiveContainer.Animate<RunnableContainer>["animate"];
export declare const backpressureStrategy: ReactiveContainer.BackpressureStrategy<RunnableContainer>["backpressureStrategy"];
export declare const buffer: Container.Buffer<RunnableContainer>["buffer"];
export declare const catchError: ReactiveContainer.CatchError<RunnableContainer>["catchError"];
export declare const combineLatest: ReactiveContainer.CombineLatest<RunnableContainer>["combineLatest"];
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
export declare const currentTime: ReactiveContainer.CurrentTime<RunnableContainer>["currentTime"];
export declare const decodeWithCharset: ReactiveContainer.DecodeWithCharset<RunnableContainer>["decodeWithCharset"];
export declare const defer: ReactiveContainer.Defer<RunnableContainer>["defer"];
export declare const dispatchTo: ReactiveContainer.DispatchTo<RunnableContainer>["dispatchTo"];
export declare const distinctUntilChanged: Container.DistinctUntilChanged<RunnableContainer>["distinctUntilChanged"];
export declare const empty: ReactiveContainer.Empty<RunnableContainer>["empty"];
export declare const encodeUtf8: ReactiveContainer.EncodeUtf8<RunnableContainer>["encodeUtf8"];
export declare const enqueue: ReactiveContainer.Enqueue<RunnableContainer>["enqueue"];
export declare const endWith: Container.EndWith<RunnableContainer>["endWith"];
export declare const everySatisfy: Container.EverySatisfy<RunnableContainer>["everySatisfy"];
export declare const exhaust: ReactiveContainer.Exhaust<RunnableContainer>["exhaust"];
export declare const exhaustMap: ReactiveContainer.ExhaustMap<RunnableContainer>["exhaustMap"];
export declare const first: Container.First<RunnableContainer>["first"];
export declare const firstAsync: ReactiveContainer.FirstAsync<RunnableContainer>["firstAsync"];
export declare const flatMapIterable: Container.FlatMapIterable<RunnableContainer>["flatMapIterable"];
export declare const flow: Container.Flow<RunnableContainer>["flow"];
export declare const forEach: Container.ForEach<RunnableContainer>["forEach"];
export declare const forkConcat: Container.ForkConcat<RunnableContainer>["forkConcat"];
export declare const forkMerge: ReactiveContainer.ForkMerge<RunnableContainer>["forkMerge"];
export declare const forkZip: Container.ForkZip<RunnableContainer>["forkZip"];
export declare const forkZipLatest: ReactiveContainer.ForkZipLatest<RunnableContainer>["forkZipLatest"];
export declare const fromEnumeratorFactory: ReactiveContainer.FromEnumeratorFactory<RunnableContainer>["fromEnumeratorFactory"];
export declare const fromFactory: ReactiveContainer.FromFactory<RunnableContainer>["fromFactory"];
export declare const fromIterable: ReactiveContainer.FromIterable<RunnableContainer>["fromIterable"];
export declare const fromOptional: ReactiveContainer.FromOptional<RunnableContainer>["fromOptional"];
export declare const fromReadonlyArray: ReactiveContainer.FromReadonlyArray<RunnableContainer>["fromReadonlyArray"];
export declare const generate: ReactiveContainer.Generate<RunnableContainer>["generate"];
export declare const identity: Container.Identity<RunnableContainer>["identity"];
export declare const ignoreElements: Container.IgnoreElements<RunnableContainer>["ignoreElements"];
export declare const keep: Container.Keep<RunnableContainer>["keep"];
export declare const keepType: Container.KeepType<RunnableContainer>["keepType"];
export declare const last: Container.Last<RunnableContainer>["last"];
export declare const lastAsync: ReactiveContainer.LastAsync<RunnableContainer>["lastAsync"];
export declare const noneSatisfy: Container.NoneSatisfy<RunnableContainer>["noneSatisfy"];
export declare const map: Container.Map<RunnableContainer>["map"];
export declare const mapTo: Container.MapTo<RunnableContainer>["mapTo"];
export declare const merge: ReactiveContainer.Merge<RunnableContainer>["merge"];
export declare const mergeAll: ReactiveContainer.MergeAll<RunnableContainer>["mergeAll"];
export declare const mergeMap: ReactiveContainer.MergeMap<RunnableContainer>["mergeMap"];
export declare const mergeWith: ReactiveContainer.MergeWith<RunnableContainer>["mergeWith"];
export declare const pairwise: Container.Pairwise<RunnableContainer>["pairwise"];
export declare const pick: Container.Pick<RunnableContainer>["pick"];
export declare const reduce: Container.Reduce<RunnableContainer>["reduce"];
export declare const repeat: Container.Repeat<RunnableContainer>["repeat"];
export declare const retry: ReactiveContainer.Retry<RunnableContainer>["retry"];
export declare const run: <T>(options?: {
    readonly backpressureStrategy: "overflow" | "drop-latest" | "drop-oldest" | "throw";
    readonly capacity?: number | undefined;
} | undefined) => (observable: RunnableLike<T>) => void;
export declare const scan: Container.Scan<RunnableContainer>["scan"];
export declare const scanLast: ReactiveContainer.ScanLast<RunnableContainer>["scanLast"];
export declare const scanMany: ReactiveContainer.ScanMany<RunnableContainer>["scanMany"];
export declare const skipFirst: Container.SkipFirst<RunnableContainer>["skipFirst"];
export declare const someSatisfy: Container.SomeSatisfy<RunnableContainer>["someSatisfy"];
export declare const startWith: Container.StartWith<RunnableContainer>["startWith"];
export declare const switchAll: ReactiveContainer.SwitchAll<RunnableContainer>["switchAll"];
export declare const switchMap: ReactiveContainer.SwitchMap<RunnableContainer>["switchMap"];
export declare const takeFirst: Container.TakeFirst<RunnableContainer>["takeFirst"];
export declare const takeLast: Container.TakeLast<RunnableContainer>["takeLast"];
export declare const takeUntil: ReactiveContainer.TakeUntil<RunnableContainer>["takeUntil"];
export declare const takeWhile: Container.TakeWhile<RunnableContainer>["takeWhile"];
export declare const throttle: ReactiveContainer.Throttle<RunnableContainer>["throttle"];
export declare const throwIfEmpty: ReactiveContainer.ThrowIfEmpty<RunnableContainer>["throwIfEmpty"];
interface Throws extends ReactiveContainer.Throws<RunnableContainer> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): RunnableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: ReactiveContainer.Timeout<RunnableContainer>["timeout"];
export declare const toEnumerable: Container.ToEnumerable<RunnableContainer>["toEnumerable"];
export declare const toReadonlyArray: Container.ToReadonlyArray<RunnableContainer>["toReadonlyArray"];
export declare const withCurrentTime: ReactiveContainer.WithCurrentTime<RunnableContainer>["withCurrentTime"];
export declare const withLatestFrom: ReactiveContainer.WithLatestFrom<RunnableContainer>["withLatestFrom"];
export declare const zip: Container.Zip<RunnableContainer>["zip"];
export declare const zipLatest: ReactiveContainer.ZipLatest<RunnableContainer>["zipLatest"];
export declare const zipWith: Container.ZipWith<RunnableContainer>["zipWith"];
export declare const zipWithLatestFrom: ReactiveContainer.ZipWithLatestFrom<RunnableContainer>["zipWithLatestFrom"];
export {};
