import { ContainerOperator, ContainerOf, FromArray, FromArrayOptions } from "./container.mjs";
import { Lift as Lift$1, TReactive, LiftOperator, DelegatingLiftableContainerStateOf, LiftOperatorIn, LiftOperatorOut } from "./__internal__.liftable.mjs";
import { DisposableLike, DisposableOrTeardown } from "./disposable.mjs";
import { Function1, Predicate, Reducer, Factory, Equality, SideEffect1 } from "./functions.mjs";
import { LiftableContainerStateOf } from "./liftableContainer.mjs";
import { Option } from "./option.mjs";
import { ReactiveContainerLike, CreateReactiveContainer } from "./reactiveContainer.mjs";
interface Lift<C extends ReactiveContainerLike> extends Lift$1<C, TReactive> {
    lift<TA, TB>(operator: LiftOperator<C, TA, TB, TReactive>): ContainerOperator<C, TA, TB>;
}
declare type CatchErrorSink<C extends ReactiveContainerLike> = new <T>(delegate: LiftableContainerStateOf<C, T>) => DelegatingLiftableContainerStateOf<C, T, T>;
declare const createCatchErrorOperator: <C extends ReactiveContainerLike>(m: Lift<C>) => (CatchErrorSink: CatchErrorSink<C>) => <T>(f: Function1<unknown, void | ContainerOf<C, T>>) => ContainerOperator<C, T, T>;
declare type DecodeWithCharsetSink<C extends ReactiveContainerLike> = new (delegate: LiftableContainerStateOf<C, string>, textDecoder: TextDecoder) => DelegatingLiftableContainerStateOf<C, ArrayBuffer, string> & {
    readonly textDecoder: TextDecoder;
};
declare const createDecodeWithCharsetOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>) => (DecodeWithCharsetSink: DecodeWithCharsetSink<C>) => (charset?: string) => ContainerOperator<C, ArrayBuffer, string>;
declare type SatisfySink<C extends ReactiveContainerLike> = new <T>(delegate: LiftableContainerStateOf<C, boolean>, predicate: Predicate<T>) => DelegatingLiftableContainerStateOf<C, T, boolean> & {
    readonly predicate: Predicate<T>;
};
declare const createEverySatisfyOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>) => (EverySatisfySink: SatisfySink<C>) => <T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
declare const createSomeSatisfyOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>) => (SomeSatisfySink: SatisfySink<C>) => <T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
declare type ReduceSink<C extends ReactiveContainerLike> = new <T, TAcc>(delegate: LiftableContainerStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => LiftableContainerStateOf<C, T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
};
declare const createReduceOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, ReduceSink: ReduceSink<C>) => <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
declare type TakeLastSink<C extends ReactiveContainerLike> = new <T>(delegate: LiftOperatorIn<C, T, T, TReactive>, maxCount: number) => LiftOperatorOut<C, T, T, TReactive> & {
    readonly last: T[];
    readonly maxCount: number;
};
declare const createTakeLastOperator: <C extends ReactiveContainerLike>(m: FromArray<C, FromArrayOptions> & Lift<C>, TakeLastSink: TakeLastSink<C>) => <T>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T, T>;
declare const createFromDisposable: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>(disposable: DisposableLike) => ContainerOf<C, T>;
declare const createNever: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>() => ContainerOf<C, T>;
declare const createOnSink: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<C, T, T>;
declare const createUsing: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <TResource extends DisposableLike, T>(resourceFactory: Factory<TResource | readonly TResource[]>, sourceFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>) => ContainerOf<C, T>;
declare const decorateWithCatchErrorNotify: <C extends ReactiveContainerLike>() => (CatchErrorSink: CatchErrorSink<C>) => void;
declare const decorateWithDecodeWithCharsetNotify: <C extends ReactiveContainerLike>() => (DecodeWithCharsetSink: DecodeWithCharsetSink<C>) => void;
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
declare const decorateWithReduceNotify: <C extends ReactiveContainerLike>(ReduceSink: ReduceSink<C>) => void;
declare const decorateWithEverySatisfyNotify: <C extends ReactiveContainerLike>() => (SatisfySink: SatisfySink<C>) => void;
declare const decorateWithSomeSatisfyNotify: <C extends ReactiveContainerLike>() => (SatisfySink: SatisfySink<C>) => void;
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
declare const decorateWithTakeLastNotify: <C extends ReactiveContainerLike>(TakeLastSink: TakeLastSink<C>) => void;
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
