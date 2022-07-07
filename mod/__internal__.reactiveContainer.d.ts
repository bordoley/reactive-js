import { ContainerOperator, ContainerOf, FromArray, FromArrayOptions } from "./container.mjs";
import { Lift as Lift$1, TReactive, LiftOperator, DelegatingLiftableContainerStateOf } from "./__internal__.liftable.mjs";
import { DisposableLike, DisposableOrTeardown } from "./disposable.mjs";
import { Function1, Predicate, Reducer, Factory, Equality, SideEffect1 } from "./functions.mjs";
import { LiftableContainerStateOf } from "./liftableContainer.mjs";
import { Option } from "./option.mjs";
import { ReactiveContainerLike, CreateReactiveContainer } from "./reactiveContainer.mjs";
interface Lift<C extends ReactiveContainerLike> extends Lift$1<C, TReactive> {
    lift<TA, TB>(operator: LiftOperator<C, TA, TB, TReactive>): ContainerOperator<C, TA, TB>;
}
declare const createCatchErrorOperator: <C extends ReactiveContainerLike>(m: Lift<C>, CatchErrorSink: new <T>(delegate: LiftableContainerStateOf<C, T>) => DelegatingLiftableContainerStateOf<C, T, T, LiftableContainerStateOf<C, T>>) => <T_1>(f: Function1<unknown, void | ContainerOf<C, T_1>>) => ContainerOperator<C, T_1, T_1>;
declare const createDecodeWithCharsetOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, DecodeWithCharsetSink: new (delegate: LiftableContainerStateOf<C, string>, textDecoder: TextDecoder) => LiftableContainerStateOf<C, ArrayBuffer> & {
    readonly delegate: LiftableContainerStateOf<C, string>;
} & {
    readonly textDecoder: TextDecoder;
}) => (charset?: string) => ContainerOperator<C, ArrayBuffer, string>;
declare const createEverySatisfyOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, EverySatisfySink: new <T>(delegate: LiftableContainerStateOf<C, boolean>, predicate: Predicate<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, boolean>;
} & {
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare const createSomeSatisfyOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, SomeSatisfySink: new <T>(delegate: LiftableContainerStateOf<C, boolean>, predicate: Predicate<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, boolean>;
} & {
    readonly predicate: Predicate<T>;
}) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare const createReduceOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, ReduceSink: new <T, TAcc>(delegate: LiftableContainerStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftableContainerStateOf<C, T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => <T_1, TAcc_1>(reducer: Reducer<T_1, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<C, T_1, TAcc_1>;
declare const createTakeLastOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeLastSink: new <T>(delegate: LiftableContainerStateOf<C, T>, maxCount: number) => LiftableContainerStateOf<C, T> & {
    readonly last: T[];
    readonly maxCount: number;
}) => <T_1>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_1, T_1>;
declare const createFromDisposable: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>(disposable: DisposableLike) => ContainerOf<C, T>;
declare const createNever: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>() => ContainerOf<C, T>;
declare const createOnSink: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<C, T, T>;
declare const createUsing: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <TResource extends DisposableLike, T>(resourceFactory: Factory<TResource | readonly TResource[]>, sourceFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>) => ContainerOf<C, T>;
declare const decorateWithCatchErrorNotify: <C extends ReactiveContainerLike>(CatchErrorSink: new <T>(delegate: LiftableContainerStateOf<C, T>) => DelegatingLiftableContainerStateOf<C, T, T, LiftableContainerStateOf<C, T>>) => void;
declare const decorateWithDecodeWithCharsetNotify: <C extends ReactiveContainerLike>(DecodeWithCharsetSink: new (delegate: LiftableContainerStateOf<C, string>, textDecoder: TextDecoder) => LiftableContainerStateOf<C, ArrayBuffer> & {
    readonly delegate: LiftableContainerStateOf<C, string>;
} & {
    readonly textDecoder: TextDecoder;
}) => void;
declare const decorateWithDistinctUntilChangedNotify: <C extends ReactiveContainerLike>(DistinctUntilChangedSink: new <T>(delegate: LiftableContainerStateOf<C, T>, equality: Equality<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
}) => void;
declare const decorateWithKeepNotify: <C extends ReactiveContainerLike>(KeepSink: new <T>(delegate: LiftableContainerStateOf<C, T>, predicate: Predicate<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    readonly predicate: Predicate<T>;
}) => void;
declare const decorateWithMapNotify: <C extends ReactiveContainerLike>(MapSink: new <TA, TB>(delegate: LiftableContainerStateOf<C, TB>, mapper: Function1<TA, TB>) => LiftableContainerStateOf<C, TA> & LiftableContainerStateOf<C, TA> & {
    readonly delegate: LiftableContainerStateOf<C, TB>;
} & {
    readonly mapper: Function1<TA, TB>;
}) => void;
declare const decorateWithOnNotifyNotify: <C extends ReactiveContainerLike>(OnNotifySink: new <T>(delegate: LiftableContainerStateOf<C, T>, onNotify: SideEffect1<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    readonly onNotify: SideEffect1<T>;
}) => void;
declare const decorateWithPairwiseNotify: <C extends ReactiveContainerLike>(PairwiseSink: new <T>(delegate: LiftableContainerStateOf<C, [
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
}) => void;
declare const decorateWithScanNotify: <C extends ReactiveContainerLike>(ScanSink: new <T, TAcc>(delegate: LiftableContainerStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftableContainerStateOf<C, T> & LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, TAcc>;
} & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => void;
declare const decorateWithReduceNotify: <C extends ReactiveContainerLike>(ReduceSink: new <T, TAcc>(delegate: LiftableContainerStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftableContainerStateOf<C, T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => void;
declare const decorateWithEverySatisfyNotify: <C extends ReactiveContainerLike>(SatisfySink: new <T>(delegate: LiftableContainerStateOf<C, boolean>, predicate: Predicate<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, boolean>;
} & {
    readonly predicate: Predicate<T>;
}) => void;
declare const decorateWithSomeSatisfyNotify: <C extends ReactiveContainerLike>(SatisfySink: new <T>(delegate: LiftableContainerStateOf<C, boolean>, predicate: Predicate<T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, boolean>;
} & {
    readonly predicate: Predicate<T>;
}) => void;
declare const decorateWithSkipFirstNotify: <C extends ReactiveContainerLike>(SkipFirstSink: new <T>(delegate: LiftableContainerStateOf<C, T>, skipCount: number) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    count: number;
    readonly skipCount: number;
}) => void;
declare const decorateWithTakeFirstNotify: <C extends ReactiveContainerLike>(TakeFirstSink: new <T>(delegate: LiftableContainerStateOf<C, T>, maxCount: number) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    count: number;
    readonly maxCount: number;
}) => void;
declare const decorateWithTakeLastNotify: <C extends ReactiveContainerLike>(TakeLastSink: new <T>(delegate: LiftableContainerStateOf<C, T>, maxCount: number) => LiftableContainerStateOf<C, T> & {
    readonly last: T[];
    readonly maxCount: number;
}) => void;
declare const decorateWithTakeWhileNotify: <C extends ReactiveContainerLike>(TakeWhileSink: new <T>(delegate: LiftableContainerStateOf<C, T>, predicate: Predicate<T>, inclusive: boolean) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
}) => void;
declare const decorateWithThrowIfEmptyNotify: <C extends ReactiveContainerLike>(ThrowIfEmptySink: new <T>(delegate: LiftableContainerStateOf<C, T>) => LiftableContainerStateOf<C, T> & {
    readonly delegate: LiftableContainerStateOf<C, T>;
} & {
    isEmpty: boolean;
}) => void;
export { Lift, createCatchErrorOperator, createDecodeWithCharsetOperator, createEverySatisfyOperator, createFromDisposable, createNever, createOnSink, createReduceOperator, createSomeSatisfyOperator, createTakeLastOperator, createUsing, decorateWithCatchErrorNotify, decorateWithDecodeWithCharsetNotify, decorateWithDistinctUntilChangedNotify, decorateWithEverySatisfyNotify, decorateWithKeepNotify, decorateWithMapNotify, decorateWithOnNotifyNotify, decorateWithPairwiseNotify, decorateWithReduceNotify, decorateWithScanNotify, decorateWithSkipFirstNotify, decorateWithSomeSatisfyNotify, decorateWithTakeFirstNotify, decorateWithTakeLastNotify, decorateWithTakeWhileNotify, decorateWithThrowIfEmptyNotify };
