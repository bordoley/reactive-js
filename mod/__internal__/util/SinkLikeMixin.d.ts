import { Option, Equality, SideEffect1, Predicate, Function1, Reducer, Factory } from "../../functions.mjs";
import { ReactiveContainerLike } from "../../rx.mjs";
import { SinkLike, DisposableLike_exception, Exception, DisposableLike_isDisposed, DisposableLike_add, DisposableOrTeardown, DisposableLike_dispose, SinkLike_notify } from "../../util.mjs";
import { Object_init, Object_properties, Object_prototype } from "./Object.mjs";
declare const createSink: <T>() => SinkLike<T>;
declare const DelegatingSink_delegate: unique symbol;
declare const delegatingSinkMixin: <T>() => {
    [Object_init](this: {
        [DelegatingSink_delegate]: SinkLike<T>;
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    }, delegate: SinkLike<T>): void;
    [Object_properties]: {
        [DelegatingSink_delegate]: SinkLike<T>;
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const createDelegatingSink: <T>(delegate: SinkLike<T>) => SinkLike<T>;
declare const bufferSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<readonly T[]>, T>(fromArray: (v: readonly T[][]) => C) => {
    [Object_init](this: {
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    }, delegate: TSink, maxBufferSize: number): void;
    [Object_properties]: {
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const decodeWithCharsetSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<string>>(fromArray: (v: readonly string[]) => C) => {
    [Object_init](this: {
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    }, delegate: SinkLike<string>, charset: string): void;
    [Object_properties]: {
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: ArrayBuffer): void;
    };
};
declare const distinctUntilChangedSinkMixin: <T>() => {
    [Object_init](this: {
        readonly [DisposableLike_isDisposed]: boolean;
    }, delegate: SinkLike<T>, equality: Equality<T>): void;
    [Object_properties]: {
        readonly [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        get [DisposableLike_exception](): Option<Exception>;
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const forEachSinkMixin: <T>() => {
    [Object_init](this: unknown, delegate: SinkLike<T>, effect: SideEffect1<T>): void;
    [Object_properties]: {
        readonly [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        get [DisposableLike_exception](): Option<Exception>;
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const keepSinkMixin: <T>() => {
    [Object_init](this: unknown, delegate: SinkLike<T>, predicate: Predicate<T>): void;
    [Object_properties]: {
        readonly [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        get [DisposableLike_exception](): Option<Exception>;
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const mapSinkMixin: <TA, TB>() => {
    [Object_init](this: unknown, delegate: SinkLike<TB>, mapper: Function1<TA, TB>): void;
    [Object_properties]: {
        readonly [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        get [DisposableLike_exception](): Option<Exception>;
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: TA): void;
    };
};
declare const pairwiseSinkMixin: <T>() => {
    [Object_init](this: {
        readonly [DisposableLike_isDisposed]: boolean;
    }, delegate: SinkLike<readonly [
        T,
        T
    ]>): void;
    [Object_properties]: {
        readonly [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        get [DisposableLike_exception](): Option<Exception>;
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const reduceSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<TAcc>, T, TAcc>(fromArray: (v: readonly TAcc[]) => C) => {
    [Object_init](this: unknown, delegate: TSink, reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): void;
    [Object_properties]: {
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const scanSinkMixin: <T, TAcc>() => {
    [Object_init](this: unknown, delegate: SinkLike<TAcc>, reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): void;
    [Object_properties]: {
        readonly [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        get [DisposableLike_exception](): Option<Exception>;
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const skipFirstSinkMixin: <T>() => {
    [Object_init](this: {
        readonly [DisposableLike_isDisposed]: boolean;
    }, delegate: SinkLike<T>, skipCount: number): void;
    [Object_properties]: {
        readonly [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        get [DisposableLike_exception](): Option<Exception>;
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const takeFirstSinkMixin: <T>() => {
    [Object_init](this: {
        readonly [DisposableLike_isDisposed]: boolean;
    }, delegate: SinkLike<T>, skipCount: number): void;
    [Object_properties]: {
        readonly [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        get [DisposableLike_exception](): Option<Exception>;
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const TakeLastSink_last: unique symbol;
declare const takeLastSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(fromArray: (v: readonly T[]) => C) => {
    [Object_init](this: {
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    }, delegate: TSink, takeLastCount: number): void;
    [Object_properties]: {
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const takeWhileSinkMixin: <T>() => {
    [Object_init](this: {
        readonly [DisposableLike_isDisposed]: boolean;
    }, delegate: SinkLike<T>, predicate: Predicate<T>, inclusive: boolean): void;
    [Object_properties]: {
        readonly [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        get [DisposableLike_exception](): Option<Exception>;
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
declare const throwIfEmptySinkMixin: <T>() => {
    [Object_init](this: unknown, delegate: SinkLike<T>, factory: Factory<unknown>): void;
    [Object_properties]: {
        [DisposableLike_exception]: Option<Exception>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_prototype]: {
        [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
        [DisposableLike_dispose](error?: Exception): void;
        [SinkLike_notify](next: T): void;
    };
};
export { DelegatingSink_delegate, TakeLastSink_last, bufferSinkMixin, createDelegatingSink, createSink, decodeWithCharsetSinkMixin, delegatingSinkMixin, distinctUntilChangedSinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, reduceSinkMixin, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin, throwIfEmptySinkMixin };
