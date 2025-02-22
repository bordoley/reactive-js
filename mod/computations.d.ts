import { Equality, Factory, Function1, Predicate, Reducer, SideEffect1, Tuple2, TypePredicate, Updater } from "./functions.js";
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
export interface DeferredComputationModule<C extends Computation> {
    fromReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<readonly T[], ComputationOf<C, T>>;
    fromIterable<T>(): Function1<Iterable<T>, ComputationOf<C, T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly count?: number;
    }): ComputationOf<C, T>;
}
export interface ComputationWithSideEffectsModule<C extends Computation> {
    forEach<T>(sideEffect: SideEffect1<T>): ComputationOperator<C, T, T>;
}
export interface PureStatelessComputationModule<C extends Computation> {
    keep<T>(predicate: Predicate<T>): ComputationOperator<C, T, T>;
    map<TA, TB>(selector: Function1<TA, TB>): ComputationOperator<C, TA, TB>;
}
export interface SynchronousComputationModule<C extends Computation> {
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<ComputationOf<C, T>, TAcc>;
    toReadonlyArray<T>(): Function1<ComputationOf<C, T>, ReadonlyArray<T>>;
}
export interface PureStatefulComputationModule<C extends Computation> {
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
export interface Pick<C extends Computation> {
    <T, TKeyOfT extends keyof T>(key: TKeyOfT): ComputationOperator<C, T, T[TKeyOfT]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA]>(keyA: TKeyOfTA, keyB: TKeyOfTB): ComputationOperator<C, T, T[TKeyOfTA][TKeyOfTB]>;
    <T, TKeyOfTA extends keyof T, TKeyOfTB extends keyof T[TKeyOfTA], TKeyOfTC extends keyof T[TKeyOfTA][TKeyOfTB]>(keyA: TKeyOfTA, keyB: TKeyOfTB, keyC: TKeyOfTC): ComputationOperator<C, T, T[TKeyOfTA][TKeyOfTB][TKeyOfTC]>;
}
export declare const SinkLike_next: unique symbol;
export declare const SinkLike_complete: unique symbol;
export declare const SinkLike_isComplete: unique symbol;
/**
 * @noInheritDoc
 */
export interface SinkLike<T = unknown> {
    readonly [SinkLike_isComplete]: boolean;
    /**
     * Notifies the EventListener of the next notification produced by the source.
     *
     * @param next - The next notification value.
     */
    [SinkLike_next](next: T): void;
    [SinkLike_complete](): void;
}
export declare const DeferableLike_eval: unique symbol;
/**
 * Represents a deferred computation that is synchronously evaluated.
 */
export interface DeferableLike<T = unknown> {
    [DeferableLike_eval](sink: SinkLike<T>): void;
}
interface Signature {
    keepType<C extends Computation>(keep: PureStatelessComputationModule<C>["keep"]): <TA, TB>(predicate: TypePredicate<TA, TB>) => ComputationOperator<C, TA, TB>;
    mapTo<C extends Computation>(map: PureStatelessComputationModule<C>["map"]): <T>(value: T) => ComputationOperator<C, unknown, T>;
    pick<C extends Computation>(map: PureStatelessComputationModule<C>["map"]): Pick<C>;
    sequence<C extends Computation>(generate: DeferredComputationModule<C>["generate"]): (start: number) => ComputationOf<C, number>;
}
export declare const keepType: Signature["keepType"];
export declare const mapTo: Signature["mapTo"];
export declare const pick: Signature["pick"];
export declare const sequence: Signature["sequence"];
export {};
