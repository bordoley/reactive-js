import { ContainerOperator, FromArray, FromArrayOptions, ContainerOf } from "./container.mjs";
import { Lift as Lift$1, TReactive, LiftOperator, DelegatingLiftableContainerStateOf } from "./__internal__.liftable.mjs";
import { Disposable, DisposableOrTeardown } from "./disposable.mjs";
import { Function1, Equality, Predicate, SideEffect1, Reducer, Factory } from "./functions.mjs";
import { LiftableContainerStateOf } from "./liftable.mjs";
import { Option } from "./option.mjs";
import { ReactiveContainerLike, CreateReactiveContainer } from "./reactiveContainer.mjs";
interface Lift<C extends ReactiveContainerLike> extends Lift$1<C, TReactive> {
    lift<TA, TB>(operator: LiftOperator<C, TA, TB, TReactive>): ContainerOperator<C, TA, TB>;
}
declare const createBufferOperator: <C extends ReactiveContainerLike>(m: Lift<C> & FromArray<C, FromArrayOptions>, BufferSink: new <T>(delegate: LiftableContainerStateOf<C, readonly T[]>, maxBufferSize: number) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, readonly T[]>;
} & {
    buffer: T[];
    readonly maxBufferSize: number;
}) => <T_1>(options?: {
    readonly maxBufferSize?: number;
}) => ContainerOperator<C, T_1, readonly T_1[]>;
declare const createCatchErrorOperator: <C extends ReactiveContainerLike>(m: Lift<C>, CatchErrorSink: new <T>(delegate: LiftableContainerStateOf<C, T>) => DelegatingLiftableContainerStateOf<C, T, T, LiftableContainerStateOf<C, T>>) => <T_1>(f: Function1<unknown, void | ContainerOf<C, T_1>>) => ContainerOperator<C, T_1, T_1>;
declare const createDecodeWithCharsetOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, DecodeWithCharsetSink: new (delegate: LiftableContainerStateOf<C, string>, textDecoder: TextDecoder) => LiftableContainerStateOf<C, ArrayBuffer> & {
    readonly delegate: LiftableContainerStateOf<C, string>;
} & {
    readonly textDecoder: TextDecoder;
}) => (charset?: string) => ContainerOperator<C, ArrayBuffer, string>;
declare const createDistinctUntilChangedOperator: <C extends ReactiveContainerLike>(m: Lift<C>, DistinctUntilChangedSink: new <T>(delegate: LiftableContainerStateOf<C, T>, equality: Equality<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
}) => <T_1>(options?: {
    readonly equality?: Equality<T_1> | undefined;
} | undefined) => ContainerOperator<C, T_1, T_1>;
declare const createEverySatisfyOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, EverySatisfySink: new <T>(delegate: LiftableContainerStateOf<C, boolean>, predicate: Predicate<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, boolean>;
} & {
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare const createKeepOperator: <C extends ReactiveContainerLike>(m: Lift<C>, KeepSink: new <T>(delegate: LiftableContainerStateOf<C, T>, predicate: Predicate<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createMapOperator: <C extends ReactiveContainerLike>(m: Lift<C>, MapSink: new <TA, TB>(delegate: LiftableContainerStateOf<C, TB>, mapper: Function1<TA, TB>) => LiftableContainerStateOf<C, TA> & LiftableContainerStateOf<C, TA> & {
    readonly delegate: LiftableContainerStateOf<C, TB>;
} & {
    readonly mapper: Function1<TA, TB>;
}) => <TA_1, TB_1>(mapper: Function1<TA_1, TB_1>) => ContainerOperator<C, TA_1, TB_1>;
declare const createOnNotifyOperator: <C extends ReactiveContainerLike>(m: Lift<C>, OnNotifySink: new <T>(delegate: LiftableContainerStateOf<C, T>, onNotify: SideEffect1<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    readonly onNotify: SideEffect1<T>;
}) => <T_1>(onNotify: SideEffect1<T_1>) => ContainerOperator<C, T_1, T_1>;
declare const createPairwiseOperator: <C extends ReactiveContainerLike>(m: Lift<C>, PairwiseSink: new <T>(delegate: LiftableContainerStateOf<C, [
    Option<T>,
    T
]>) => LiftableContainerStateOf<C, T> & LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, [
        Option<T>,
        T
    ]>;
} & {
    prev: Option<T>;
    hasPrev: boolean;
}) => <T_1>() => ContainerOperator<C, T_1, [
    Option<T_1>,
    T_1
]>;
declare const createReduceOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, ReduceSink: new <T, TAcc>(delegate: LiftableContainerStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftableContainerStateOf<C, T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createScanOperator: <C extends ReactiveContainerLike>(m: Lift<C>, ScanSink: new <T, TAcc>(delegate: LiftableContainerStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftableContainerStateOf<C, T> & LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, TAcc>;
} & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createSkipFirstOperator: <C extends ReactiveContainerLike>(m: Lift<C>, SkipFirstSink: new <T>(delegate: LiftableContainerStateOf<C, T>, skipCount: number) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    count: number;
    readonly skipCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createSomeSatisfyOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, SomeSatisfySink: new <T>(delegate: LiftableContainerStateOf<C, boolean>, predicate: Predicate<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, boolean>;
} & {
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare const createTakeFirstOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeFirstSink: new <T>(delegate: LiftableContainerStateOf<C, T>, maxCount: number) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    count: number;
    readonly maxCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeLastOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeLastSink: new <T>(delegate: LiftableContainerStateOf<C, T>, maxCount: number) => LiftableContainerStateOf<C, T> & {
    readonly last: T[];
    readonly maxCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createTakeWhileOperator: <C extends ReactiveContainerLike>(m: Lift<C>, TakeWhileSink: new <T>(delegate: LiftableContainerStateOf<C, T>, predicate: Predicate<T>, inclusive: boolean) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
}) => <T_1>(predicate: Predicate<T_1>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T_1, T_1>;
declare const createThrowIfEmptyOperator: <C extends ReactiveContainerLike>(m: Lift<C>, ThrowIfEmptySink: new <T>(delegate: LiftableContainerStateOf<C, T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    isEmpty: boolean;
}) => <T_1>(factory: Factory<unknown>) => ContainerOperator<C, T_1, T_1>;
declare const createFromDisposable: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>(disposable: Disposable) => ContainerOf<C, T>;
declare const createNever: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>() => ContainerOf<C, T>;
declare const createOnSink: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<C, T, T>;
declare const createUsing: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <TResource extends Disposable, T>(resourceFactory: Factory<TResource | readonly TResource[]>, sourceFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>) => ContainerOf<C, T>;
export { Lift, createBufferOperator, createCatchErrorOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createFromDisposable, createKeepOperator, createMapOperator, createNever, createOnNotifyOperator, createOnSink, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, createUsing };
