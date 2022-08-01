import { Option, Equality, SideEffect1, Predicate, Function1, Reducer, Factory } from "../../functions.mjs";
import { ReactiveContainerLike } from "../../rx.mjs";
import { SinkLike, DisposableLike_exception, Exception, DisposableLike_isDisposed, DisposableLike_add, DisposableOrTeardown, DisposableLike_dispose, SinkLike_notify } from "../../util.mjs";
import { Class1, Class2, Class3 } from "./Object.mjs";
declare const createSink: <T>() => SinkLike<T>;
declare const DelegatingSink_delegate: unique symbol;
declare const delegatingSinkMixin: <T>() => Class1<{
    [DelegatingSink_delegate]: SinkLike<T>;
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, SinkLike<T>>;
declare const createDelegatingSink: <T>(delegate: SinkLike<T>) => SinkLike<T>;
declare const bufferSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<readonly T[]>, T>(fromArray: (v: readonly T[][]) => C) => Class2<{
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, TSink, number>;
declare const decodeWithCharsetSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<string>>(fromArray: (v: readonly string[]) => C) => Class2<{
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: ArrayBuffer): void;
}, SinkLike<string>, string>;
declare const distinctUntilChangedSinkMixin: <T>() => Class2<{
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, SinkLike<T>, Equality<T>>;
declare const forEachSinkMixin: <T>() => Class2<{
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, SinkLike<T>, SideEffect1<T>>;
declare const keepSinkMixin: <T>() => Class2<{
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, SinkLike<T>, Predicate<T>>;
declare const mapSinkMixin: <TA, TB>() => Class2<{
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: TA): void;
}, SinkLike<TB>, Function1<TA, TB>>;
declare const pairwiseSinkMixin: <T>() => Class1<{
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, SinkLike<readonly [
    T,
    T
]>>;
declare const reduceSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<TAcc>, T, TAcc>(fromArray: (v: readonly TAcc[]) => C) => Class3<{
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, TSink, Reducer<T, TAcc>, Factory<TAcc>>;
declare const scanSinkMixin: <T, TAcc>() => Class3<{
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, SinkLike<TAcc>, Reducer<T, TAcc>, Factory<TAcc>>;
declare const skipFirstSinkMixin: <T>() => Class2<{
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, SinkLike<T>, number>;
declare const takeFirstSinkMixin: <T>() => Class2<{
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, SinkLike<T>, number>;
declare const TakeLastSink_last: unique symbol;
declare const takeLastSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(fromArray: (v: readonly T[]) => C) => Class2<{
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, TSink, number>;
declare const takeWhileSinkMixin: <T>() => Class3<{
    readonly [DisposableLike_isDisposed]: boolean;
}, {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, SinkLike<T>, Predicate<T>, boolean>;
declare const throwIfEmptySinkMixin: <T>() => Class2<{
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
}, {
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Exception): void;
    [SinkLike_notify](next: T): void;
}, SinkLike<T>, Factory<unknown>>;
export { DelegatingSink_delegate, TakeLastSink_last, bufferSinkMixin, createDelegatingSink, createSink, decodeWithCharsetSinkMixin, delegatingSinkMixin, distinctUntilChangedSinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, reduceSinkMixin, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin, throwIfEmptySinkMixin };
