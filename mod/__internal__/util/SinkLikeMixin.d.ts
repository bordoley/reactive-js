import { Option, Equality, SideEffect1, Predicate, Function1, Reducer, Factory } from "../../functions.mjs";
import { ReactiveContainerLike } from "../../rx.mjs";
import { SinkLike, DisposableLike_error, Error, DisposableLike_isDisposed, DisposableLike_add, DisposableOrTeardown, DisposableLike_dispose, SinkLike_notify, DisposableLike } from "../../util.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
declare const createSink: <T>() => SinkLike<T>;
declare const DelegatingSink_delegate: unique symbol;
declare const delegatingSinkMixin: <T>() => {
    [Object_properties]: {
        [DelegatingSink_delegate]: SinkLike<T>;
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_init](this: {
        [DelegatingSink_delegate]: SinkLike<T>;
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
    }, delegate: SinkLike<T>): void;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Error): void;
    [SinkLike_notify](next: T): void;
};
declare const createDelegatingSink: <T>(delegate: SinkLike<T>) => SinkLike<T>;
declare const bufferSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<readonly T[]>, T>(fromArray: (v: readonly T[][]) => C) => {
    [Object_properties]: {
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_init](this: {
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
    }, delegate: TSink, maxBufferSize: number): void;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Error): void;
    [SinkLike_notify](next: T): void;
};
declare const distinctUntilChangedSinkMixin: <T>() => DisposableLike & {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: SinkLike<T>, equality: Equality<T>): void;
    [SinkLike_notify](next: T): void;
};
declare const forEachSinkMixin: <T>() => DisposableLike & {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: SinkLike<T>, effect: SideEffect1<T>): void;
    [SinkLike_notify](next: T): void;
};
declare const keepSinkMixin: <T>() => DisposableLike & {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: SinkLike<T>, predicate: Predicate<T>): void;
    [SinkLike_notify](next: T): void;
};
declare const mapSinkMixin: <TA, TB>() => DisposableLike & {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: SinkLike<TB>, mapper: Function1<TA, TB>): void;
    [SinkLike_notify](next: TA): void;
};
declare const pairwiseSinkMixin: <T>() => DisposableLike & {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: SinkLike<readonly [
        T,
        T
    ]>): void;
    [SinkLike_notify](next: T): void;
};
declare const scanSinkMixin: <T, TAcc>() => DisposableLike & {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: SinkLike<TAcc>, reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): void;
    [SinkLike_notify](next: T): void;
};
declare const skipFirstSinkMixin: <T>() => DisposableLike & {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: SinkLike<T>, skipCount: number): void;
    [SinkLike_notify](next: T): void;
};
declare const takeFirstSinkMixin: <T>() => DisposableLike & {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: SinkLike<T>, skipCount: number): void;
    [SinkLike_notify](next: T): void;
};
declare const TakeLastSink_last: unique symbol;
declare const takeLastSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(fromArray: (v: readonly T[]) => C) => {
    [Object_properties]: {
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_init](this: {
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
    }, delegate: TSink, takeLastCount: number): void;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Error): void;
    [SinkLike_notify](next: T): void;
};
declare const takeWhileSinkMixin: <T>() => DisposableLike & {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: SinkLike<T>, predicate: Predicate<T>, inclusive: boolean): void;
    [SinkLike_notify](next: T): void;
};
declare const throwIfEmptySinkMixin: <T>() => {
    [Object_properties]: {
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_init](this: unknown, delegate: SinkLike<T>, factory: Factory<unknown>): void;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Error): void;
    [SinkLike_notify](next: T): void;
};
export { DelegatingSink_delegate, TakeLastSink_last, bufferSinkMixin, createDelegatingSink, createSink, delegatingSinkMixin, distinctUntilChangedSinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin, throwIfEmptySinkMixin };
