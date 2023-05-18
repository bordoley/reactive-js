import { Factory, Updater } from "./functions.js";
import { Container, Container_T, Container_type, DisposableLike, EnumerableContainerTypeClass, EnumerableLike, EnumeratorLike } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface EnumerableContainer extends Container {
    readonly [Container_type]?: EnumerableLike<this[typeof Container_T]>;
}
export type Type = EnumerableContainer;
export interface DisposableEnumeratorType extends Container {
    readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]> & DisposableLike;
}
export interface EnumerableModule extends EnumerableContainerTypeClass<Type, DisposableEnumeratorType> {
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): EnumerableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableLike<T>;
    throws<T>(): EnumerableLike<T>;
}
export type Signature = EnumerableModule;
export declare const buffer: Signature["buffer"];
export declare const compute: Signature["compute"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const concatWith: Signature["concatWith"];
export declare const contains: Signature["contains"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const endWith: Signature["endWith"];
export declare const enumerate: Signature["enumerate"];
export declare const everySatisfy: Signature["everySatisfy"];
export declare const first: Signature["first"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const forEach: Signature["forEach"];
export declare const fromEnumerable: Signature["fromEnumerable"];
export declare const fromEnumeratorFactory: Signature["fromEnumeratorFactory"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const last: Signature["last"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const noneSatisfy: Signature["noneSatisfy"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const reduce: Signature["reduce"];
export declare const repeat: Signature["repeat"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const someSatisfy: Signature["someSatisfy"];
export declare const startWith: Signature["startWith"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throws: Signature["throws"];
export declare const toIterable: Signature["toIterable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const zip: Signature["zip"];
export declare const zipWith: Signature["zipWith"];
