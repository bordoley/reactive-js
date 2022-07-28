import { Predicate, Function1, SideEffect1, Reducer, Factory } from "../../functions.mjs";
import { SinkLike, SinkLike_notify } from "../../util.mjs";
import { DisposableLike } from "./DisposableLikeInternal.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
declare const Sink_delegate: unique symbol;
declare const createSink: <T>() => SinkLike<T>;
declare const keepSinkMixin: <T>() => DisposableLike & {
    [Object_properties]: {
        [Sink_delegate]: SinkLike<T>;
        predicate: Predicate<T>;
    };
    [Object_init](this: {
        [Sink_delegate]: SinkLike<T>;
        predicate: Predicate<T>;
    }, delegate: SinkLike<T>, predicate: Predicate<T>): void;
    [SinkLike_notify](next: T): void;
};
declare const mapSinkMixin: <TA, TB>() => DisposableLike & {
    [Object_properties]: {
        [Sink_delegate]: SinkLike<TB>;
        mapper: Function1<TA, TB>;
    };
    [Object_init](this: {
        [Sink_delegate]: SinkLike<TB>;
        mapper: Function1<TA, TB>;
    }, delegate: SinkLike<TB>, mapper: Function1<TA, TB>): void;
    [SinkLike_notify](next: TA): void;
};
declare const onNotifySinkMixin: <T>() => DisposableLike & {
    [Object_properties]: {
        [Sink_delegate]: SinkLike<T>;
        onNotify: SideEffect1<T>;
    };
    [Object_init](this: {
        [Sink_delegate]: SinkLike<T>;
        onNotify: SideEffect1<T>;
    }, delegate: SinkLike<T>, monNotify: SideEffect1<T>): void;
    [SinkLike_notify](next: T): void;
};
declare const scanSinkMixin: <T, TAcc>() => DisposableLike & {
    [Object_properties]: {
        [Sink_delegate]: SinkLike<TAcc>;
        reducer: Reducer<T, TAcc>;
        acc: TAcc;
    };
    [Object_init](this: {
        [Sink_delegate]: SinkLike<TAcc>;
        reducer: Reducer<T, TAcc>;
        acc: TAcc;
    }, delegate: SinkLike<TAcc>, reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): void;
    [SinkLike_notify](next: T): void;
};
export { Sink_delegate, createSink, keepSinkMixin, mapSinkMixin, onNotifySinkMixin, scanSinkMixin };
