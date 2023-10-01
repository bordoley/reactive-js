import { Equality, Factory, Function1, Predicate, Reducer, Tuple2, TypePredicate } from "./functions.js";
export declare const Computation_T: unique symbol;
export declare const Computation_type: unique symbol;
/**
 * @noInheritDoc
 * @category Computation
 */
export interface Computation {
    readonly [Computation_T]?: unknown;
    readonly [Computation_type]?: unknown;
}
export type ComputationOf<C extends Computation, T> = C extends {
    readonly [Computation_type]?: unknown;
} ? NonNullable<(C & {
    readonly [Computation_T]: T;
})[typeof Computation_type]> : {
    readonly _C: C;
    readonly _T: () => T;
};
export type PureComputationOperator<C extends Computation, TA, TB> = Function1<ComputationOf<C, TA>, ComputationOf<C, TB>>;
/**
 * @noInheritDoc
 * @category Module
 */
export interface PureComputationModule<C extends Computation> {
    buffer<T>(options?: {
        count?: number;
    }): PureComputationOperator<C, T, readonly T[]>;
    decodeWithCharset(options?: {
        readonly charset?: string | undefined;
    }): PureComputationOperator<C, ArrayBuffer, string>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): PureComputationOperator<C, T, T>;
    keep<T>(predicate: Predicate<T>): PureComputationOperator<C, T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): PureComputationOperator<C, TA, TB>;
    pairwise<T>(): PureComputationOperator<C, T, Tuple2<T, T>>;
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): PureComputationOperator<C, T, TAcc>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): PureComputationOperator<C, T, T>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): PureComputationOperator<C, T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): PureComputationOperator<C, T, T>;
}
interface Signature {
    keepType<C extends Computation, TA, TB extends TA>(m: Pick<PureComputationModule<C>, "keep">, predicate: TypePredicate<TA, TB>): PureComputationOperator<C, TA, TB>;
    mapTo<C extends Computation, T>(m: Pick<PureComputationModule<C>, "map">, value: T): PureComputationOperator<C, unknown, T>;
    pick<C extends Computation, T, TKeyOfT extends keyof T>(m: Pick<PureComputationModule<C>, "map">, key: TKeyOfT): PureComputationOperator<C, T, T[TKeyOfT]>;
    pick<C extends Computation, T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(m: Pick<PureComputationModule<C>, "map">, keyA: TKeyOfTA, keyB: TKeyOfTB): PureComputationOperator<C, T, T[TKeyOfTA][TKeyOfTB]>;
    pick<C extends Computation, T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA], TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB]>(m: Pick<PureComputationModule<C>, "map">, keyA: TKeyOfTA, keyB: TKeyOfTB, keyC: TKeyOfTC): PureComputationOperator<C, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}
export declare const keepType: Signature["keepType"];
export declare const mapTo: Signature["mapTo"];
export declare const pick: Signature["pick"];
export {};
