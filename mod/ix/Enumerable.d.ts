import { Computation, Computation_T, Computation_type, PureComputationModule } from "../computations.js";
import { Factory, Function1, Reducer, Tuple2, Tuple3, Tuple4, Tuple5, Tuple6, Tuple7, Tuple8, Tuple9, Updater } from "../functions.js";
import { EnumerableLike } from "../ix.js";
export interface EnumerableComputation extends Computation {
    readonly [Computation_type]?: EnumerableLike<this[typeof Computation_T]>;
}
export type Type = EnumerableComputation;
export interface EnumerableModule extends PureComputationModule<EnumerableComputation> {
    concat<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concatMany<T>(enumerables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concatWith<T>(snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): Function1<EnumerableLike<T>, EnumerableLike<T>>;
    empty<T>(): EnumerableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableLike<T>;
    range(start: number, options?: {
        readonly count?: number;
    }): EnumerableLike<number>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<EnumerableLike<T>, TAcc>;
    zip<TA, TB>(a: EnumerableLike<TA>, b: EnumerableLike<TB>): EnumerableLike<Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>): EnumerableLike<Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>): EnumerableLike<Tuple4<TA, TB, TC, TD>>;
    zip<TA, TB, TC, TD, TE>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>): EnumerableLike<Tuple5<TA, TB, TC, TD, TE>>;
    zip<TA, TB, TC, TD, TE, TF>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>): EnumerableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>): EnumerableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): EnumerableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): EnumerableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;
    zipWith<TA, TB>(b: EnumerableLike<TB>): Function1<EnumerableLike<TA>, EnumerableLike<Tuple2<TA, TB>>>;
    zipWith<TA, TB, TC>(b: EnumerableLike<TB>, c: EnumerableLike<TC>): Function1<EnumerableLike<TA>, EnumerableLike<Tuple3<TA, TB, TC>>>;
    zipWith<TA, TB, TC, TD>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>): Function1<EnumerableLike<TA>, EnumerableLike<Tuple4<TA, TB, TC, TD>>>;
    zipWith<TA, TB, TC, TD, TE>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>): Function1<EnumerableLike<TA>, EnumerableLike<Tuple5<TA, TB, TC, TD, TE>>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>): Function1<EnumerableLike<TA>, EnumerableLike<Tuple6<TA, TB, TC, TD, TE, TF>>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>): Function1<EnumerableLike<TA>, EnumerableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): Function1<EnumerableLike<TA>, EnumerableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): Function1<EnumerableLike<TA>, EnumerableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>>;
}
export type Signature = EnumerableModule;
export declare const buffer: Signature["buffer"];
export declare const concatMany: Signature["concatMany"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const generate: Signature["generate"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const pairwise: Signature["pairwise"];
export declare const range: Signature["range"];
export declare const reduce: Signature["reduce"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
export declare const zip: Signature["zip"];
export declare const zipWith: Signature["zipWith"];
