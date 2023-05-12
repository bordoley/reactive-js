import { Factory } from "./functions.js";
import { EnumerableContainerTypeClass } from "./type-classes.js";
import { Container, Container_T, Container_type, DisposableLike, EnumerableContainer, EnumerableLike, EnumeratorLike } from "./types.js";
export type Type = EnumerableContainer;
export interface DisposableEnumeratorType extends Container {
    readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]> & DisposableLike;
}
export interface Signature extends EnumerableContainerTypeClass<Type, DisposableEnumeratorType> {
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): EnumerableLike<T>;
}
export declare const compute: Signature["compute"];
export declare const concat: Signature["concat"];
export declare const concatWith: Signature["concatWith"];
export declare const contains: Signature["contains"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const endWith: Signature["endWith"];
export declare const enumerate: Signature["enumerate"];
export declare const everySatisfy: Signature["everySatisfy"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const first: Signature["first"];
export declare const firstAsync: Signature["firstAsync"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const forEach: Signature["forEach"];
export declare const fromFactory: Signature["fromFactory"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const last: Signature["last"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const noneSatisfy: Signature["noneSatisfy"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const reduce: Signature["reduce"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const someSatisfy: Signature["someSatisfy"];
export declare const startWith: Signature["startWith"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const zip: Signature["zip"];
export declare const zipWith: Signature["zipWith"];
