import { Container, Container_T, Container_type, Containers, DeferredContainers, DisposableLike, EnumerableContainer, EnumerableContainers, EnumeratorLike, ReactiveContainers, RunnableContainers } from "../core.js";
export declare const backpressureStrategy: ReactiveContainers.TypeClass<EnumerableContainer>["backpressureStrategy"];
export declare const buffer: Containers.TypeClass<EnumerableContainer>["buffer"];
export declare const catchError: ReactiveContainers.TypeClass<EnumerableContainer>["catchError"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: import("../functions.js").Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => import("../core.js").EnumerableLike<T>;
export declare const concat: DeferredContainers.TypeClass<EnumerableContainer>["concat"];
export declare const concatAll: DeferredContainers.TypeClass<EnumerableContainer>["concatAll"];
export declare const concatMap: DeferredContainers.TypeClass<EnumerableContainer>["concatMap"];
export declare const concatWith: DeferredContainers.TypeClass<EnumerableContainer>["concatWith"];
export declare const contains: RunnableContainers.TypeClass<EnumerableContainer>["contains"];
export declare const decodeWithCharset: ReactiveContainers.TypeClass<EnumerableContainer>["decodeWithCharset"];
export declare const defer: ReactiveContainers.TypeClass<EnumerableContainer>["defer"];
export declare const dispatchTo: ReactiveContainers.TypeClass<EnumerableContainer>["dispatchTo"];
export declare const distinctUntilChanged: Containers.TypeClass<EnumerableContainer>["distinctUntilChanged"];
export declare const empty: Containers.TypeClass<EnumerableContainer>["empty"];
export declare const encodeUtf8: ReactiveContainers.TypeClass<EnumerableContainer>["encodeUtf8"];
export declare const enqueue: ReactiveContainers.TypeClass<EnumerableContainer>["enqueue"];
export declare const endWith: DeferredContainers.TypeClass<EnumerableContainer>["endWith"];
interface EnumerableEnumeratorContainer extends Container {
    readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]> & DisposableLike;
}
export declare const enumerate: EnumerableContainers.TypeClass<EnumerableContainer, EnumerableEnumeratorContainer>["enumerate"];
export declare const everySatisfy: RunnableContainers.TypeClass<EnumerableContainer>["everySatisfy"];
export declare const first: RunnableContainers.TypeClass<EnumerableContainer>["first"];
export declare const firstAsync: ReactiveContainers.TypeClass<EnumerableContainer>["firstAsync"];
export declare const flatMapIterable: Containers.TypeClass<EnumerableContainer>["flatMapIterable"];
export declare const flow: DeferredContainers.TypeClass<EnumerableContainer>["flow"];
export declare const forEach: Containers.TypeClass<EnumerableContainer>["forEach"];
export declare const forkConcat: DeferredContainers.TypeClass<EnumerableContainer>["forkConcat"];
export declare const forkZip: Containers.TypeClass<EnumerableContainer>["forkZip"];
export declare const fromEnumeratorFactory: Containers.TypeClass<EnumerableContainer>["fromEnumeratorFactory"];
export declare const fromFactory: Containers.TypeClass<EnumerableContainer>["fromFactory"];
export declare const fromIterable: Containers.TypeClass<EnumerableContainer>["fromIterable"];
export declare const fromOptional: Containers.TypeClass<EnumerableContainer>["fromOptional"];
export declare const fromReadonlyArray: Containers.TypeClass<EnumerableContainer>["fromReadonlyArray"];
export declare const generate: Containers.TypeClass<EnumerableContainer>["generate"];
export declare const identity: Containers.TypeClass<EnumerableContainer>["identity"];
export declare const ignoreElements: Containers.TypeClass<EnumerableContainer>["ignoreElements"];
export declare const keep: Containers.TypeClass<EnumerableContainer>["keep"];
export declare const keepType: Containers.TypeClass<EnumerableContainer>["keepType"];
export declare const last: RunnableContainers.TypeClass<EnumerableContainer>["last"];
export declare const lastAsync: ReactiveContainers.TypeClass<EnumerableContainer>["lastAsync"];
export declare const map: Containers.TypeClass<EnumerableContainer>["map"];
export declare const mapTo: Containers.TypeClass<EnumerableContainer>["mapTo"];
export declare const noneSatisfy: RunnableContainers.TypeClass<EnumerableContainer>["noneSatisfy"];
export declare const pairwise: Containers.TypeClass<EnumerableContainer>["pairwise"];
export declare const pick: Containers.TypeClass<EnumerableContainer>["pick"];
export declare const reduce: RunnableContainers.TypeClass<EnumerableContainer>["reduce"];
export declare const repeat: DeferredContainers.TypeClass<EnumerableContainer>["repeat"];
export declare const retry: ReactiveContainers.TypeClass<EnumerableContainer>["retry"];
export declare const scan: Containers.TypeClass<EnumerableContainer>["scan"];
export declare const scanLast: ReactiveContainers.TypeClass<EnumerableContainer>["scanLast"];
export declare const skipFirst: Containers.TypeClass<EnumerableContainer>["skipFirst"];
export declare const someSatisfy: RunnableContainers.TypeClass<EnumerableContainer>["someSatisfy"];
export declare const startWith: DeferredContainers.TypeClass<EnumerableContainer>["startWith"];
export declare const takeFirst: Containers.TypeClass<EnumerableContainer>["takeFirst"];
export declare const takeLast: Containers.TypeClass<EnumerableContainer>["takeLast"];
export declare const takeWhile: Containers.TypeClass<EnumerableContainer>["takeWhile"];
export declare const throws: ReactiveContainers.TypeClass<EnumerableContainer>["throws"];
export declare const throwIfEmpty: ReactiveContainers.TypeClass<EnumerableContainer>["throwIfEmpty"];
export declare const toReadonlyArray: RunnableContainers.TypeClass<EnumerableContainer>["toReadonlyArray"];
export declare const zip: Containers.TypeClass<EnumerableContainer>["zip"];
export declare const zipWith: Containers.TypeClass<EnumerableContainer>["zipWith"];
export {};
