import { Predicate, Function1, SideEffect1, Reducer, Factory } from "../../functions.mjs";
import { SinkLike, SinkLike_notify } from "../../util.mjs";
import { DisposableLike } from "./DisposableLikeInternal.mjs";
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
export { createSink, keepSinkMixin, mapSinkMixin, onNotifySinkMixin, scanSinkMixin };
