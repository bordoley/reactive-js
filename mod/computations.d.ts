import { Equality, Factory, Function1, Predicate, Reducer, Tuple2, TypePredicate } from "./functions.js";
export declare const Computation_T: unique symbol;
export declare const Computation_type: unique symbol;
/**
 * @noInheritDoc
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
export type ComputationOperator<C extends Computation, TA, TB> = Function1<ComputationOf<C, TA>, ComputationOf<C, TB>>;
/**
 * @noInheritDoc
 */
export interface PureComputationModule<C extends Computation> {
    fromReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<readonly T[], ComputationOf<C, T>>;
    keep<T>(predicate: Predicate<T>): ComputationOperator<C, T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): ComputationOperator<C, TA, TB>;
}
export interface PureDeferredComputationModule<C extends Computation> extends PureComputationModule<C> {
    buffer<T>(options?: {
        count?: number;
    }): ComputationOperator<C, T, readonly T[]>;
    decodeWithCharset(options?: {
        readonly charset?: string;
        readonly fatal?: boolean;
        readonly ignoreBOM?: boolean;
    }): ComputationOperator<C, ArrayBuffer, string>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): ComputationOperator<C, T, T>;
    pairwise<T>(): ComputationOperator<C, T, Tuple2<T, T>>;
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ComputationOperator<C, T, TAcc>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): ComputationOperator<C, T, T>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): ComputationOperator<C, T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ComputationOperator<C, T, T>;
}
interface Signature {
    keepType<C extends Computation, TA, TB extends TA>(m: Pick<PureComputationModule<C>, "keep">, predicate: TypePredicate<TA, TB>): ComputationOperator<C, TA, TB>;
    mapTo<C extends Computation, T>(m: Pick<PureComputationModule<C>, "map">, value: T): ComputationOperator<C, unknown, T>;
    pick<C extends Computation, T, TKeyOfT extends keyof T>(m: Pick<PureComputationModule<C>, "map">, key: TKeyOfT): ComputationOperator<C, T, T[TKeyOfT]>;
    pick<C extends Computation, T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(m: Pick<PureComputationModule<C>, "map">, keyA: TKeyOfTA, keyB: TKeyOfTB): ComputationOperator<C, T, T[TKeyOfTA][TKeyOfTB]>;
    pick<C extends Computation, T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA], TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB]>(m: Pick<PureComputationModule<C>, "map">, keyA: TKeyOfTA, keyB: TKeyOfTB, keyC: TKeyOfTC): ComputationOperator<C, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}
export declare const keepType: Signature["keepType"];
export declare const mapTo: Signature["mapTo"];
export declare const pick: Signature["pick"];
export {};
