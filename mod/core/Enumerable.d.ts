import { Container, Container_T, Container_type, DisposableLike, EnumerableContainer, EnumeratorLike, ReactiveContainer } from "../core.js";
export declare const backpressureStrategy: ReactiveContainer.TypeClass<EnumerableContainer>["backpressureStrategy"];
export declare const buffer: Container.TypeClass<EnumerableContainer>["buffer"];
export declare const catchError: ReactiveContainer.TypeClass<EnumerableContainer>["catchError"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: import("../functions.js").Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => import("../core.js").EnumerableLike<T>;
export declare const concat: Container.TypeClass<EnumerableContainer>["concat"];
export declare const concatAll: Container.TypeClass<EnumerableContainer>["concatAll"];
export declare const concatMap: Container.TypeClass<EnumerableContainer>["concatMap"];
export declare const concatWith: Container.TypeClass<EnumerableContainer>["concatWith"];
export declare const contains: Container.TypeClass<EnumerableContainer>["contains"];
export declare const decodeWithCharset: ReactiveContainer.TypeClass<EnumerableContainer>["decodeWithCharset"];
export declare const defer: ReactiveContainer.TypeClass<EnumerableContainer>["defer"];
export declare const dispatchTo: ReactiveContainer.TypeClass<EnumerableContainer>["dispatchTo"];
export declare const distinctUntilChanged: Container.TypeClass<EnumerableContainer>["distinctUntilChanged"];
export declare const empty: Container.TypeClass<EnumerableContainer>["empty"];
export declare const encodeUtf8: ReactiveContainer.TypeClass<EnumerableContainer>["encodeUtf8"];
export declare const enqueue: ReactiveContainer.TypeClass<EnumerableContainer>["enqueue"];
export declare const endWith: Container.TypeClass<EnumerableContainer>["endWith"];
interface EnumerableEnumeratorContainer extends Container {
    readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]> & DisposableLike;
}
export declare const enumerate: EnumerableContainer.TypeClass<EnumerableContainer, EnumerableEnumeratorContainer>["enumerate"];
export declare const everySatisfy: Container.TypeClass<EnumerableContainer>["everySatisfy"];
export declare const first: Container.TypeClass<EnumerableContainer>["first"];
export declare const firstAsync: ReactiveContainer.TypeClass<EnumerableContainer>["firstAsync"];
export declare const flatMapIterable: Container.TypeClass<EnumerableContainer>["flatMapIterable"];
export declare const flow: Container.TypeClass<EnumerableContainer>["flow"];
export declare const forEach: Container.TypeClass<EnumerableContainer>["forEach"];
export declare const forkConcat: Container.TypeClass<EnumerableContainer>["forkConcat"];
export declare const forkZip: Container.TypeClass<EnumerableContainer>["forkZip"];
export declare const fromEnumeratorFactory: Container.TypeClass<EnumerableContainer>["fromEnumeratorFactory"];
export declare const fromFactory: Container.TypeClass<EnumerableContainer>["fromFactory"];
export declare const fromIterable: Container.TypeClass<EnumerableContainer>["fromIterable"];
export declare const fromOptional: Container.TypeClass<EnumerableContainer>["fromOptional"];
export declare const fromReadonlyArray: Container.TypeClass<EnumerableContainer>["fromReadonlyArray"];
export declare const generate: Container.TypeClass<EnumerableContainer>["generate"];
export declare const identity: Container.TypeClass<EnumerableContainer>["identity"];
export declare const ignoreElements: Container.TypeClass<EnumerableContainer>["ignoreElements"];
export declare const keep: Container.TypeClass<EnumerableContainer>["keep"];
export declare const keepType: Container.TypeClass<EnumerableContainer>["keepType"];
export declare const last: Container.TypeClass<EnumerableContainer>["last"];
export declare const lastAsync: ReactiveContainer.TypeClass<EnumerableContainer>["lastAsync"];
export declare const map: Container.TypeClass<EnumerableContainer>["map"];
export declare const mapTo: Container.TypeClass<EnumerableContainer>["mapTo"];
export declare const noneSatisfy: Container.TypeClass<EnumerableContainer>["noneSatisfy"];
export declare const pairwise: Container.TypeClass<EnumerableContainer>["pairwise"];
export declare const pick: Container.TypeClass<EnumerableContainer>["pick"];
export declare const reduce: Container.TypeClass<EnumerableContainer>["reduce"];
export declare const repeat: Container.TypeClass<EnumerableContainer>["repeat"];
export declare const retry: ReactiveContainer.TypeClass<EnumerableContainer>["retry"];
export declare const scan: Container.TypeClass<EnumerableContainer>["scan"];
export declare const scanLast: ReactiveContainer.TypeClass<EnumerableContainer>["scanLast"];
export declare const skipFirst: Container.TypeClass<EnumerableContainer>["skipFirst"];
export declare const someSatisfy: Container.TypeClass<EnumerableContainer>["someSatisfy"];
export declare const startWith: Container.TypeClass<EnumerableContainer>["startWith"];
export declare const takeFirst: Container.TypeClass<EnumerableContainer>["takeFirst"];
export declare const takeLast: Container.TypeClass<EnumerableContainer>["takeLast"];
export declare const takeWhile: Container.TypeClass<EnumerableContainer>["takeWhile"];
export declare const throws: ReactiveContainer.TypeClass<EnumerableContainer>["throws"];
export declare const throwIfEmpty: ReactiveContainer.TypeClass<EnumerableContainer>["throwIfEmpty"];
export declare const toReadonlyArray: Container.TypeClass<EnumerableContainer>["toReadonlyArray"];
export declare const zip: Container.TypeClass<EnumerableContainer>["zip"];
export declare const zipWith: Container.TypeClass<EnumerableContainer>["zipWith"];
export {};
