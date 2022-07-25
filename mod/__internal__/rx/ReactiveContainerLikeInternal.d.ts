import { StatefulContainerLike, StatefulContainerStateOf, ContainerOperator, ContainerOf, Container, FromArrayOptions } from "../../containers.mjs";
import { Function1, Predicate, Reducer, Factory, Equality, Option, SideEffect1 } from "../../functions.mjs";
import { ReactiveContainerLike, CreateReactiveContainer } from "../../rx.mjs";
import { DisposableLike, DisposableOrTeardown } from "../../util.mjs";
import { Lift as Lift$1, TReactive, StatefulContainerOperator, StatefulContainerOperatorIn, StatefulContainerOperatorOut } from "../containers/StatefulContainerLikeInternal.mjs";
declare type DelegatingStatefulContainerStateOf<C extends StatefulContainerLike, T, TDelegate, TDelegateStatefulContaierStateOf extends StatefulContainerStateOf<C, TDelegate> = StatefulContainerStateOf<C, TDelegate>> = StatefulContainerStateOf<C, T> & {
    readonly delegate: TDelegateStatefulContaierStateOf;
};
declare const getDelegate: <C extends StatefulContainerLike, T, TDelegate, TDelegateStatefulContaierStateOf extends StatefulContainerStateOf<C, TDelegate> = StatefulContainerStateOf<C, TDelegate>>(container: DelegatingStatefulContainerStateOf<C, T, TDelegate, TDelegateStatefulContaierStateOf>) => TDelegateStatefulContaierStateOf;
declare type Lift<C extends ReactiveContainerLike> = Lift$1<C, TReactive> & {
    lift<TA, TB>(operator: StatefulContainerOperator<C, TA, TB, TReactive>): ContainerOperator<C, TA, TB>;
};
declare type CatchErrorSink<C extends ReactiveContainerLike> = new <T>(delegate: StatefulContainerStateOf<C, T>) => StatefulContainerStateOf<C, T> & {
    delegate: StatefulContainerStateOf<C, T>;
};
declare const createCatchErrorOperator: <C extends ReactiveContainerLike>(m: Lift<C>) => (CatchErrorSink: CatchErrorSink<C>) => <T>(f: Function1<unknown, void | ContainerOf<C, T>>) => ContainerOperator<C, T, T>;
declare type DecodeWithCharsetSink<C extends ReactiveContainerLike> = new (delegate: StatefulContainerStateOf<C, string>, textDecoder: TextDecoder) => DelegatingStatefulContainerStateOf<C, ArrayBuffer, string> & {
    readonly textDecoder: TextDecoder;
};
declare const createDecodeWithCharsetOperator: <C extends ReactiveContainerLike>(m: Container<C> & {
    fromValue<T>(options?: undefined): Function1<T, ContainerOf<C, T>>;
} & {
    lift<TA, TB>(operator: StatefulContainerOperator<C, TA, TB, 1>): ContainerOperator<C, TA, TB>;
    readonly variance: 0 | 1;
} & {
    lift<TA_1, TB_1>(operator: StatefulContainerOperator<C, TA_1, TB_1, 1>): ContainerOperator<C, TA_1, TB_1>;
}) => (DecodeWithCharsetSink: DecodeWithCharsetSink<C>) => (charset?: string) => ContainerOperator<C, ArrayBuffer, string>;
declare type SatisfySink<C extends ReactiveContainerLike> = new <T>(delegate: StatefulContainerStateOf<C, boolean>, predicate: Predicate<T>) => DelegatingStatefulContainerStateOf<C, T, boolean> & {
    readonly predicate: Predicate<T>;
};
declare const createEverySatisfyOperator: <C extends ReactiveContainerLike>(m: Container<C> & {
    fromValue<T>(options?: undefined): Function1<T, ContainerOf<C, T>>;
} & {
    lift<TA, TB>(operator: StatefulContainerOperator<C, TA, TB, 1>): ContainerOperator<C, TA, TB>;
    readonly variance: 0 | 1;
} & {
    lift<TA_1, TB_1>(operator: StatefulContainerOperator<C, TA_1, TB_1, 1>): ContainerOperator<C, TA_1, TB_1>;
}) => (EverySatisfySink: SatisfySink<C>) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare const createSomeSatisfyOperator: <C extends ReactiveContainerLike>(m: Container<C> & {
    fromValue<T>(options?: undefined): Function1<T, ContainerOf<C, T>>;
} & {
    lift<TA, TB>(operator: StatefulContainerOperator<C, TA, TB, 1>): ContainerOperator<C, TA, TB>;
    readonly variance: 0 | 1;
} & {
    lift<TA_1, TB_1>(operator: StatefulContainerOperator<C, TA_1, TB_1, 1>): ContainerOperator<C, TA_1, TB_1>;
}) => (SomeSatisfySink: SatisfySink<C>) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
declare type ReduceSink<C extends ReactiveContainerLike> = new <T, TAcc>(delegate: StatefulContainerStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => StatefulContainerStateOf<C, T> & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
};
declare const createReduceOperator: <C extends ReactiveContainerLike>(m: Container<C> & {
    fromValue<T>(options?: undefined): Function1<T, ContainerOf<C, T>>;
} & {
    lift<TA, TB>(operator: StatefulContainerOperator<C, TA, TB, 1>): ContainerOperator<C, TA, TB>;
    readonly variance: 0 | 1;
} & {
    lift<TA_1, TB_1>(operator: StatefulContainerOperator<C, TA_1, TB_1, 1>): ContainerOperator<C, TA_1, TB_1>;
}) => (ReduceSink: ReduceSink<C>) => <T_1, TAcc>(reducer: Reducer<T_1, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T_1, TAcc>;
declare type TakeLastSink<C extends ReactiveContainerLike> = new <T>(delegate: StatefulContainerOperatorIn<C, T, T, TReactive>, maxCount: number) => StatefulContainerOperatorOut<C, T, T, TReactive> & {
    readonly last: T[];
    readonly maxCount: number;
};
declare const createTakeLastOperator: <C extends ReactiveContainerLike>(m: Container<C> & {
    fromArray<T>(options?: Partial<FromArrayOptions> | undefined): Function1<readonly T[], ContainerOf<C, T>>;
} & {
    lift<TA, TB>(operator: StatefulContainerOperator<C, TA, TB, 1>): ContainerOperator<C, TA, TB>;
    readonly variance: 0 | 1;
} & {
    lift<TA_1, TB_1>(operator: StatefulContainerOperator<C, TA_1, TB_1, 1>): ContainerOperator<C, TA_1, TB_1>;
} & {
    empty<T_1>(options?: undefined): ContainerOf<C, T_1>;
}) => (TakeLastSink: TakeLastSink<C>) => <T_2>(options?: {
    readonly count?: number;
}) => ContainerOperator<C, T_2, T_2>;
declare const createFromDisposable: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>(disposable: DisposableLike) => ContainerOf<C, T>;
declare const createNever: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>() => ContainerOf<C, T>;
declare const createOnSink: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<C, T, T>;
declare const createUsing: <C extends ReactiveContainerLike>(m: CreateReactiveContainer<C>) => <TResource extends DisposableLike, T>(resourceFactory: Factory<TResource | readonly TResource[]>, sourceFactory: (...resources: readonly TResource[]) => ContainerOf<C, T>) => ContainerOf<C, T>;
declare const decorateWithCatchErrorNotify: <C extends ReactiveContainerLike>() => (CatchErrorSink: CatchErrorSink<C>) => void;
declare const decorateWithDecodeWithCharsetNotify: <C extends ReactiveContainerLike>() => (DecodeWithCharsetSink: DecodeWithCharsetSink<C>) => void;
declare const decorateWithDistinctUntilChangedNotify: <C extends ReactiveContainerLike>(DistinctUntilChangedSink: new <T>(delegate: StatefulContainerStateOf<C, T>, equality: Equality<T>) => StatefulContainerStateOf<C, T> & {
    readonly delegate: StatefulContainerStateOf<C, T>;
} & {
    readonly equality: Equality<T>;
    prev: Option<T>;
    hasValue: boolean;
}) => void;
declare const decorateWithKeepNotify: <C extends ReactiveContainerLike>(KeepSink: new <T>(delegate: StatefulContainerStateOf<C, T>, predicate: Predicate<T>) => StatefulContainerStateOf<C, T> & {
    readonly delegate: StatefulContainerStateOf<C, T>;
} & {
    readonly predicate: Predicate<T>;
}) => void;
declare const decorateWithMapNotify: <C extends ReactiveContainerLike>(MapSink: new <TA, TB>(delegate: StatefulContainerStateOf<C, TB>, mapper: Function1<TA, TB>) => StatefulContainerStateOf<C, TA> & StatefulContainerStateOf<C, TA> & {
    readonly delegate: StatefulContainerStateOf<C, TB>;
} & {
    readonly mapper: Function1<TA, TB>;
}) => void;
declare const decorateWithOnNotifyNotify: <C extends ReactiveContainerLike>(OnNotifySink: new <T>(delegate: StatefulContainerStateOf<C, T>, onNotify: SideEffect1<T>) => StatefulContainerStateOf<C, T> & {
    readonly delegate: StatefulContainerStateOf<C, T>;
} & {
    readonly onNotify: SideEffect1<T>;
}) => void;
declare const decorateWithPairwiseNotify: <C extends ReactiveContainerLike>(PairwiseSink: new <T>(delegate: StatefulContainerStateOf<C, [
    Option<T>,
    T
]>) => StatefulContainerStateOf<C, T> & StatefulContainerStateOf<C, T> & {
    readonly delegate: StatefulContainerStateOf<C, [
        Option<T>,
        T
    ]>;
} & {
    prev: Option<T>;
    hasPrev: boolean;
}) => void;
declare const decorateWithScanNotify: <C extends ReactiveContainerLike>(ScanSink: new <T, TAcc>(delegate: StatefulContainerStateOf<C, TAcc>, reducer: Reducer<T, TAcc>, acc: TAcc) => StatefulContainerStateOf<C, T> & StatefulContainerStateOf<C, T> & {
    readonly delegate: StatefulContainerStateOf<C, TAcc>;
} & {
    readonly reducer: Reducer<T, TAcc>;
    acc: TAcc;
}) => void;
declare const decorateWithReduceNotify: <C extends ReactiveContainerLike>() => (ReduceSink: ReduceSink<C>) => void;
declare const decorateWithEverySatisfyNotify: <C extends ReactiveContainerLike>() => (SatisfySink: SatisfySink<C>) => void;
declare const decorateWithSomeSatisfyNotify: <C extends ReactiveContainerLike>() => (SatisfySink: SatisfySink<C>) => void;
declare const decorateWithSkipFirstNotify: <C extends ReactiveContainerLike>(SkipFirstSink: new <T>(delegate: StatefulContainerStateOf<C, T>, skipCount: number) => StatefulContainerStateOf<C, T> & {
    readonly delegate: StatefulContainerStateOf<C, T>;
} & {
    count: number;
    readonly skipCount: number;
}) => void;
declare const decorateWithTakeFirstNotify: <C extends ReactiveContainerLike>(TakeFirstSink: new <T>(delegate: StatefulContainerStateOf<C, T>, maxCount: number) => StatefulContainerStateOf<C, T> & {
    readonly delegate: StatefulContainerStateOf<C, T>;
} & {
    count: number;
    readonly maxCount: number;
}) => void;
declare const decorateWithTakeLastNotify: <C extends ReactiveContainerLike>() => (TakeLastSink: TakeLastSink<C>) => void;
declare const decorateWithTakeWhileNotify: <C extends ReactiveContainerLike>(TakeWhileSink: new <T>(delegate: StatefulContainerStateOf<C, T>, predicate: Predicate<T>, inclusive: boolean) => StatefulContainerStateOf<C, T> & {
    readonly delegate: StatefulContainerStateOf<C, T>;
} & {
    readonly predicate: Predicate<T>;
    readonly inclusive: boolean;
}) => void;
declare const decorateWithThrowIfEmptyNotify: <C extends ReactiveContainerLike>(ThrowIfEmptySink: new <T>(delegate: StatefulContainerStateOf<C, T>) => StatefulContainerStateOf<C, T> & {
    readonly delegate: StatefulContainerStateOf<C, T>;
} & {
    isEmpty: boolean;
}) => void;
export { DelegatingStatefulContainerStateOf, Lift, createCatchErrorOperator, createDecodeWithCharsetOperator, createEverySatisfyOperator, createFromDisposable, createNever, createOnSink, createReduceOperator, createSomeSatisfyOperator, createTakeLastOperator, createUsing, decorateWithCatchErrorNotify, decorateWithDecodeWithCharsetNotify, decorateWithDistinctUntilChangedNotify, decorateWithEverySatisfyNotify, decorateWithKeepNotify, decorateWithMapNotify, decorateWithOnNotifyNotify, decorateWithPairwiseNotify, decorateWithReduceNotify, decorateWithScanNotify, decorateWithSkipFirstNotify, decorateWithSomeSatisfyNotify, decorateWithTakeFirstNotify, decorateWithTakeLastNotify, decorateWithTakeWhileNotify, decorateWithThrowIfEmptyNotify, getDelegate };
