import { StatefulContainerLike, ContainerLike_type, ContainerLike_T, StatefulContainerLike_state, ContainerLike, Container, ContainerOf } from "./containers.js";
import { Function1 } from "./functions.js";
import { SchedulerLike } from "./scheduling.js";
import { StreamLike, StreamableLike } from "./streaming.js";
import { DisposableLike } from "./util.js";
/** @ignore */
declare const SourceLike_move: unique symbol;
interface SourceLike extends DisposableLike {
    [SourceLike_move](): void;
}
/** @ignore */
declare const EnumeratorLike_current: unique symbol;
/** @ignore */
declare const EnumeratorLike_hasCurrent: unique symbol;
interface EnumeratorLike<T = unknown> extends SourceLike {
    readonly [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
}
/** @ignore */
declare const InteractiveContainerLike_interact: unique symbol;
/**
 * @category Container
 */
interface InteractiveContainerLike<TSource extends DisposableLike, TCtx = void> extends StatefulContainerLike {
    [InteractiveContainerLike_interact](ctx: TCtx): TSource;
}
/**
 * Interface for iterating a Container of items.
 *  @category Container
 */
interface EnumerableLike<T = unknown> extends InteractiveContainerLike<EnumeratorLike<T>> {
    readonly [ContainerLike_type]?: EnumerableLike<this[typeof ContainerLike_T]>;
    readonly [StatefulContainerLike_state]?: EnumeratorLike<this[typeof ContainerLike_T]>;
}
interface AsyncEnumeratorLike<T = unknown> extends SourceLike, StreamLike<void, T> {
}
/**  @ignore */
declare const AsyncEnumerableLike_isEnumerable: unique symbol;
/**  @ignore */
declare const AsyncEnumerableLike_isRunnable: unique symbol;
/**
 * @category Container
 */
interface AsyncEnumerableLike<T = unknown> extends StreamableLike<void, T, AsyncEnumeratorLike<T>>, InteractiveContainerLike<AsyncEnumeratorLike<T>, SchedulerLike> {
    readonly [ContainerLike_type]?: AsyncEnumerableLike<this[typeof ContainerLike_T]>;
    readonly [StatefulContainerLike_state]?: AsyncEnumeratorLike<this[typeof ContainerLike_T]>;
    readonly [AsyncEnumerableLike_isEnumerable]: boolean;
    readonly [AsyncEnumerableLike_isRunnable]: boolean;
}
/**
 * @category Container
 */
interface RunnableAsyncEnumerableLike<T = unknown> extends AsyncEnumerableLike<T> {
    readonly [ContainerLike_type]?: RunnableAsyncEnumerableLike<this[typeof ContainerLike_T]>;
    readonly [AsyncEnumerableLike_isRunnable]: true;
}
/**
 * @category Container
 */
interface EnumerableAsyncEnumerableLike<T = unknown> extends RunnableAsyncEnumerableLike<T> {
    readonly [ContainerLike_type]?: EnumerableAsyncEnumerableLike<this[typeof ContainerLike_T]>;
    readonly [AsyncEnumerableLike_isEnumerable]: true;
}
/**
 * @category TypeClass
 */
interface FromAsyncEnumerable<C extends ContainerLike, O = never> extends Container<C> {
    fromAsyncEnumerable<T>(options?: O): Function1<AsyncEnumerableLike<T>, ContainerOf<C, T>>;
}
/**
 * @category TypeClass
 */
interface FromEnumerable<C extends ContainerLike, O = never> extends Container<C> {
    fromEnumerable<T>(options?: O): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
}
/**
 * @category TypeClass
 */
interface ToAsyncEnumerable<C extends ContainerLike, O = never> extends Container<C> {
    toAsyncEnumerable<T>(options?: O): Function1<ContainerOf<C, T>, AsyncEnumerableLike<T>>;
}
/**
 * @category TypeClass
 */
interface ToEnumerable<C extends ContainerLike, O = never> extends Container<C> {
    toEnumerable<T>(options?: O): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}
export { AsyncEnumerableLike, AsyncEnumerableLike_isEnumerable, AsyncEnumerableLike_isRunnable, AsyncEnumeratorLike, EnumerableAsyncEnumerableLike, EnumerableLike, EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent, FromAsyncEnumerable, FromEnumerable, InteractiveContainerLike, InteractiveContainerLike_interact, RunnableAsyncEnumerableLike, SourceLike, SourceLike_move, ToAsyncEnumerable, ToEnumerable };
