import { Predicate, Function1, SideEffect1, Reducer, Factory, Option } from "../../functions.mjs";
import { SinkLike, SinkLike_notify } from "../../util.mjs";
import { DisposableLike, DisposableLike_error, Error, DisposableLike_isDisposed, DisposableLike_add, DisposableOrTeardown, DisposableLike_dispose } from "./DisposableLikeInternal.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
declare const createSink: <T>() => SinkLike<T>;
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
declare const onNotifySinkMixin: <T>() => DisposableLike & {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: SinkLike<T>, monNotify: SideEffect1<T>): void;
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
declare const takeLastSinkMixin: <T>() => {
    [Object_properties]: {
        readonly [TakeLastSink_last]: readonly T[];
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
    };
    [Object_init](this: {
        readonly [TakeLastSink_last]: readonly T[];
        [DisposableLike_error]: Option<Error>;
        [DisposableLike_isDisposed]: boolean;
    }, delegate: SinkLike<T>, takeLastCount: number): void;
    [DisposableLike_add](disposable: DisposableOrTeardown, ignoreChildErrors: boolean): void;
    [DisposableLike_dispose](error?: Error): void;
    [SinkLike_notify](next: T): void;
};
declare const takeWhileSinkMixin: <T>() => DisposableLike & {
    [Object_properties]: unknown;
    [Object_init](this: unknown, delegate: SinkLike<T>, predicate: Predicate<T>, inclusive: boolean): void;
    [SinkLike_notify](next: T): void;
};
export { TakeLastSink_last, createSink, keepSinkMixin, mapSinkMixin, onNotifySinkMixin, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin };
