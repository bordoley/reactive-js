import { Computation, Computation_T, Computation_type, PureComputationModule } from "../computations.js";
import { Factory, Function1, Reducer } from "../functions.js";
import { EnumerableLike } from "../ix.js";
export interface EnumerableComputation extends Computation {
    readonly [Computation_type]?: EnumerableLike<this[typeof Computation_T]>;
}
export type Type = EnumerableComputation;
export interface EnumerableModule extends PureComputationModule<EnumerableComputation> {
    concat<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concatMany<T>(enumerables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concatWith<T>(snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): Function1<EnumerableLike<T>, EnumerableLike<T>>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<EnumerableLike<T>, TAcc>;
}
export type Signature = EnumerableModule;
export declare const buffer: Signature["buffer"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const pairwise: Signature["pairwise"];
export declare const reduce: Signature["reduce"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
