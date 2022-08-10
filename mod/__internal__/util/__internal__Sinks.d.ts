import { Equality, SideEffect1, Predicate, Function1, Reducer, Factory } from "../../functions.mjs";
import { ReactiveContainerLike } from "../../rx.mjs";
import { EnumeratorLike, SinkLike } from "../../util.mjs";
import { Mixin1, Mixin2, Mixin3 } from "./__internal__Objects.mjs";
declare const createEnumeratorSink: <T>() => EnumeratorLike<T> & SinkLike<T>;
declare const createSink: <T>() => SinkLike<T>;
declare const DelegatingSink_delegate: unique symbol;
interface DelegateSinkLike<T> extends SinkLike<T> {
    [DelegatingSink_delegate]: SinkLike<T>;
}
declare const delegatingSinkMixin: <T>() => Mixin1<DelegateSinkLike<T>, SinkLike<T>>;
declare const createDelegatingSink: <T>(delegate: SinkLike<T>) => SinkLike<T>;
declare const bufferSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<readonly T[]>, T>(fromArray: (v: readonly T[][]) => C) => Mixin2<SinkLike<T>, TSink, number>;
declare const decodeWithCharsetSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<string>>(fromArray: (v: readonly string[]) => C) => Mixin2<SinkLike<ArrayBuffer>, SinkLike<string>, string>;
declare const distinctUntilChangedSinkMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Equality<T>>;
declare const forEachSinkMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, SideEffect1<T>>;
declare const keepSinkMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Predicate<T>>;
declare const mapSinkMixin: <TA, TB>() => Mixin2<SinkLike<TA>, SinkLike<TB>, Function1<TA, TB>>;
declare const pairwiseSinkMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<readonly [
    T,
    T
]>>;
declare const reduceSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<TAcc>, T, TAcc>(fromArray: (v: readonly TAcc[]) => C) => Mixin3<SinkLike<T>, TSink, Reducer<T, TAcc>, Factory<TAcc>>;
declare const scanSinkMixin: <T, TAcc>() => Mixin3<SinkLike<T>, SinkLike<TAcc>, Reducer<T, TAcc>, Factory<TAcc>>;
declare const skipFirstSinkMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number>;
declare const takeFirstSinkMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number>;
declare const TakeLastSink_last: unique symbol;
declare const takeLastSinkMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(fromArray: (v: readonly T[]) => C) => Mixin2<SinkLike<T>, TSink, number>;
declare const takeWhileSinkMixin: <T>() => Mixin3<SinkLike<T>, SinkLike<T>, Predicate<T>, boolean>;
declare const throwIfEmptySinkMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Factory<unknown>>;
export { DelegateSinkLike, DelegatingSink_delegate, TakeLastSink_last, bufferSinkMixin, createDelegatingSink, createEnumeratorSink, createSink, decodeWithCharsetSinkMixin, delegatingSinkMixin, distinctUntilChangedSinkMixin, forEachSinkMixin, keepSinkMixin, mapSinkMixin, pairwiseSinkMixin, reduceSinkMixin, scanSinkMixin, skipFirstSinkMixin, takeFirstSinkMixin, takeLastSinkMixin, takeWhileSinkMixin, throwIfEmptySinkMixin };
