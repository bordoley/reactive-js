import { Option, Equality, SideEffect1, Predicate, Function1, Reducer, Factory } from "../../functions.mjs";
import { ReactiveContainerLike } from "../../rx.mjs";
import { EnumeratorLike, SinkLike, DisposableLike_exception, Exception, DisposableLike_isDisposed, DisposableLike_add, DisposableOrTeardown, DisposableLike_dispose, SinkLike_notify } from "../../util.mjs";
import { Class1, Class2, Class3 } from "./__internal__Objects.mjs";
declare const createEnumeratorSink: <T>() => EnumeratorLike<T> & SinkLike<T>;
declare const createSink: <T>() => SinkLike<T>;
declare const DelegatingSink_delegate: unique symbol;
declare const delegatingSinkMixin: <T>() => Class1<SinkLike<T>, SinkLike<T>, {
    [DelegatingSink_delegate]: SinkLike<T>;
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const createDelegatingSink: <T>(delegate: SinkLike<T>) => SinkLike<T>;
declare const bufferSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<readonly T[]>, T>(fromArray: (v: readonly T[][]) => C) => Class2<TSink, number, SinkLike<T>, {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const decodeWithCharsetSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<string>>(fromArray: (v: readonly string[]) => C) => Class2<SinkLike<string>, string, SinkLike<ArrayBuffer>, {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: ArrayBuffer): void;
}>;
declare const distinctUntilChangedSinkMixin: <T>() => Class2<SinkLike<T>, Equality<T>, SinkLike<T>, {
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const forEachSinkMixin: <T>() => Class2<SinkLike<T>, SideEffect1<T>, SinkLike<T>, {
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const keepSinkMixin: <T>() => Class2<SinkLike<T>, Predicate<T>, SinkLike<T>, {
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const mapSinkMixin: <TA, TB>() => Class2<SinkLike<TB>, Function1<TA, TB>, SinkLike<TA>, {
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: TA): void;
}>;
declare const pairwiseSinkMixin: <T>() => Class1<SinkLike<readonly [
    T,
    T
]>, SinkLike<T>, {
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const reduceSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<TAcc>, T, TAcc>(fromArray: (v: readonly TAcc[]) => C) => Class3<TSink, Reducer<T, TAcc>, Factory<TAcc>, SinkLike<T>, {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const scanSinkMixin: <T, TAcc>() => Class3<SinkLike<TAcc>, Reducer<T, TAcc>, Factory<TAcc>, SinkLike<T>, {
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const skipFirstSinkMixin: <T>() => Class2<SinkLike<T>, number, SinkLike<T>, {
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const takeFirstSinkMixin: <T>() => Class2<SinkLike<T>, number, SinkLike<T>, {
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const TakeLastSink_last: unique symbol;
declare const takeLastSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(fromArray: (v: readonly T[]) => C) => Class2<TSink, number, SinkLike<T>, {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const takeWhileSinkMixin: <T>() => Class3<SinkLike<T>, Predicate<T>, boolean, SinkLike<T>, {
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
declare const throwIfEmptySinkMixin: <T>() => Class2<SinkLike<T>, Factory<unknown>, SinkLike<T>, {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}>;
export { DelegatingSink_delegate, TakeLastSink_last, bufferSinkMixin, createDelegatingSink, createEnumeratorSink, createSink, decodeWithCharsetSinkMixin, delegatingSinkMixin, distinctUntilChangedSinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, reduceSinkMixin, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin, throwIfEmptySinkMixin };
