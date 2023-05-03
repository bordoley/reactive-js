import { Container, Container_T, Container_type, EnumeratorLike } from "../containers.js";
import { BackpressureStrategy, CatchError, DecodeWithCharset, Defer, DispatchTo, EncodeUtf8, Enqueue, EnumerableContainer, FirstAsync, Flow, LastAsync, Retry, ScanLast, ThrowIfEmpty, Throws } from "../rx.js";
import { DisposableLike } from "../util.js";
export declare const backpressureStrategy: BackpressureStrategy<EnumerableContainer>["backpressureStrategy"];
export declare const buffer: Container.Buffer<EnumerableContainer>["buffer"];
export declare const catchError: CatchError<EnumerableContainer>["catchError"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: import("../functions.js").Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => import("../rx.js").EnumerableLike<T>;
export declare const concat: Container.Concat<EnumerableContainer>["concat"];
export declare const concatAll: Container.ConcatAll<EnumerableContainer>["concatAll"];
export declare const concatMap: Container.ConcatMap<EnumerableContainer>["concatMap"];
export declare const concatWith: Container.ConcatWith<EnumerableContainer>["concatWith"];
export declare const contains: Container.Contains<EnumerableContainer>["contains"];
export declare const decodeWithCharset: DecodeWithCharset<EnumerableContainer>["decodeWithCharset"];
export declare const defer: Defer<EnumerableContainer>["defer"];
export declare const dispatchTo: DispatchTo<EnumerableContainer>["dispatchTo"];
export declare const distinctUntilChanged: Container.DistinctUntilChanged<EnumerableContainer>["distinctUntilChanged"];
export declare const empty: Container.Empty<EnumerableContainer>["empty"];
export declare const encodeUtf8: EncodeUtf8<EnumerableContainer>["encodeUtf8"];
export declare const enqueue: Enqueue<EnumerableContainer>["enqueue"];
export declare const endWith: Container.EndWith<EnumerableContainer>["endWith"];
interface EnumerableEnumeratorContainer extends Container {
    readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]> & DisposableLike;
}
export declare const enumerate: Container.Enumerate<EnumerableContainer, EnumerableEnumeratorContainer>["enumerate"];
export declare const everySatisfy: Container.EverySatisfy<EnumerableContainer>["everySatisfy"];
export declare const first: Container.First<EnumerableContainer>["first"];
export declare const firstAsync: FirstAsync<EnumerableContainer>["firstAsync"];
export declare const flatMapIterable: Container.FlatMapIterable<EnumerableContainer>["flatMapIterable"];
export declare const flow: Flow<EnumerableContainer>["flow"];
export declare const forEach: Container.ForEach<EnumerableContainer>["forEach"];
export declare const forkConcat: Container.ForkConcat<EnumerableContainer>["forkConcat"];
export declare const forkZip: Container.ForkZip<EnumerableContainer>["forkZip"];
export declare const fromEnumeratorFactory: Container.FromEnumeratorFactory<EnumerableContainer>["fromEnumeratorFactory"];
export declare const fromFactory: Container.FromFactory<EnumerableContainer>["fromFactory"];
export declare const fromIterable: Container.FromIterable<EnumerableContainer>["fromIterable"];
export declare const fromOptional: Container.FromOptional<EnumerableContainer>["fromOptional"];
export declare const fromReadonlyArray: Container.FromReadonlyArray<EnumerableContainer>["fromReadonlyArray"];
export declare const generate: Container.Generate<EnumerableContainer>["generate"];
export declare const identity: Container.Identity<EnumerableContainer>["identity"];
export declare const ignoreElements: Container.IgnoreElements<EnumerableContainer>["ignoreElements"];
export declare const keep: Container.Keep<EnumerableContainer>["keep"];
export declare const keepType: Container.KeepType<EnumerableContainer>["keepType"];
export declare const last: Container.Last<EnumerableContainer>["last"];
export declare const lastAsync: LastAsync<EnumerableContainer>["lastAsync"];
export declare const map: Container.Map<EnumerableContainer>["map"];
export declare const mapTo: Container.MapTo<EnumerableContainer>["mapTo"];
export declare const noneSatisfy: Container.NoneSatisfy<EnumerableContainer>["noneSatisfy"];
export declare const pairwise: Container.Pairwise<EnumerableContainer>["pairwise"];
export declare const pick: Container.Pick<EnumerableContainer>["pick"];
export declare const reduce: Container.Reduce<EnumerableContainer>["reduce"];
export declare const repeat: Container.Repeat<EnumerableContainer>["repeat"];
export declare const retry: Retry<EnumerableContainer>["retry"];
export declare const scan: Container.Scan<EnumerableContainer>["scan"];
export declare const scanLast: ScanLast<EnumerableContainer>["scanLast"];
export declare const skipFirst: Container.SkipFirst<EnumerableContainer>["skipFirst"];
export declare const someSatisfy: Container.SomeSatisfy<EnumerableContainer>["someSatisfy"];
export declare const startWith: Container.StartWith<EnumerableContainer>["startWith"];
export declare const takeFirst: Container.TakeFirst<EnumerableContainer>["takeFirst"];
export declare const takeLast: Container.TakeLast<EnumerableContainer>["takeLast"];
export declare const takeWhile: Container.TakeWhile<EnumerableContainer>["takeWhile"];
export declare const throws: Throws<EnumerableContainer>["throws"];
export declare const throwIfEmpty: ThrowIfEmpty<EnumerableContainer>["throwIfEmpty"];
export declare const toReadonlyArray: Container.ToReadonlyArray<EnumerableContainer>["toReadonlyArray"];
export declare const zip: Container.Zip<EnumerableContainer>["zip"];
export declare const zipWith: Container.ZipWith<EnumerableContainer>["zipWith"];
export {};
