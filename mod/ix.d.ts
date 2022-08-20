import { StatefulContainerLike, ContainerLike_type, ContainerLike_T, StatefulContainerLike_state, ContainerLike, Container, ContainerOf } from "./containers.mjs";
import { Function1 } from "./functions.mjs";
import { SchedulerLike } from "./scheduling.mjs";
import { StreamLike, StreamableLike } from "./streaming.mjs";
import { DisposableLike, EnumeratorLike, SourceLike } from "./util.mjs";
/** @ignore */
declare const InteractiveContainerLike_interact: unique symbol;
interface InteractiveContainerLike<TSource extends DisposableLike, TCtx = void> extends StatefulContainerLike {
    [InteractiveContainerLike_interact](ctx: TCtx): TSource;
}
/**
 * Interface for iterating a Container of items.
 */
interface EnumerableLike<T = unknown> extends InteractiveContainerLike<EnumeratorLike<T>> {
    readonly [ContainerLike_type]?: EnumerableLike<this[typeof ContainerLike_T]>;
    readonly [StatefulContainerLike_state]?: EnumeratorLike<this[typeof ContainerLike_T]>;
}
interface AsyncEnumeratorLike<T = unknown> extends SourceLike, StreamLike<void, T> {
}
interface AsyncEnumerableLike<T = unknown> extends StreamableLike<void, T, AsyncEnumeratorLike<T>>, InteractiveContainerLike<AsyncEnumeratorLike<T>, SchedulerLike> {
    readonly [ContainerLike_type]?: AsyncEnumerableLike<this[typeof ContainerLike_T]>;
    readonly [StatefulContainerLike_state]?: AsyncEnumeratorLike<this[typeof ContainerLike_T]>;
}
declare type ToAsyncEnumerable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toAsyncEnumerable<T>(options?: TOptions): Function1<ContainerOf<C, T>, AsyncEnumerableLike<T>>;
};
declare type ToEnumerable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toEnumerable<T>(options?: TOptions): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
};
export { AsyncEnumerableLike, AsyncEnumeratorLike, EnumerableLike, InteractiveContainerLike, InteractiveContainerLike_interact, ToAsyncEnumerable, ToEnumerable };
