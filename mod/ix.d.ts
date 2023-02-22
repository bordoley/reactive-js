import { Container, ContainerLike, ContainerLike_T, ContainerLike_type, ContainerOf, StatefulContainerLike, StatefulContainerLike_state } from "./containers.js";
import { Function1 } from "./functions.js";
import { SchedulerLike } from "./scheduling.js";
import { StreamLike, StreamableLike } from "./streaming.js";
import { DisposableLike } from "./util.js";
/** @ignore */
export declare const SourceLike_move: unique symbol;
/**
 * @noInheritDoc
 */
export interface SourceLike extends DisposableLike {
    [SourceLike_move](): void;
}
/** @ignore */
export declare const EnumeratorLike_current: unique symbol;
/** @ignore */
export declare const EnumeratorLike_hasCurrent: unique symbol;
/**
 * @noInheritDoc
 */
export interface EnumeratorLike<T = unknown> extends SourceLike {
    readonly [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
}
/** @ignore */
export declare const InteractiveContainerLike_interact: unique symbol;
/**
 * @noInheritDoc
 * @category Container
 */
export interface InteractiveContainerLike<TSource extends DisposableLike, TCtx = void> extends StatefulContainerLike {
    [InteractiveContainerLike_interact](ctx: TCtx): TSource;
}
/**
 * Interface for iterating a Container of items.
 *
 * @noInheritDoc
 * @category Container
 */
export interface EnumerableLike<T = unknown> extends InteractiveContainerLike<EnumeratorLike<T>> {
    readonly [ContainerLike_type]?: EnumerableLike<this[typeof ContainerLike_T]>;
    readonly [StatefulContainerLike_state]?: EnumeratorLike<this[typeof ContainerLike_T]>;
}
/**
 * @noInheritDoc
 */
export interface AsyncEnumeratorLike<T = unknown> extends SourceLike, StreamLike<void, T> {
}
/**  @ignore */
export declare const AsyncEnumerableLike_isEnumerable: unique symbol;
/**  @ignore */
export declare const AsyncEnumerableLike_isRunnable: unique symbol;
/**
 * @noInheritDoc
 * @category Container
 */
export interface AsyncEnumerableLike<T = unknown> extends StreamableLike<void, T, AsyncEnumeratorLike<T>>, InteractiveContainerLike<AsyncEnumeratorLike<T>, SchedulerLike> {
    readonly [ContainerLike_type]?: AsyncEnumerableLike<this[typeof ContainerLike_T]>;
    readonly [StatefulContainerLike_state]?: AsyncEnumeratorLike<this[typeof ContainerLike_T]>;
    readonly [AsyncEnumerableLike_isEnumerable]: boolean;
    readonly [AsyncEnumerableLike_isRunnable]: boolean;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface RunnableAsyncEnumerableLike<T = unknown> extends AsyncEnumerableLike<T> {
    readonly [ContainerLike_type]?: RunnableAsyncEnumerableLike<this[typeof ContainerLike_T]>;
    readonly [AsyncEnumerableLike_isRunnable]: true;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface EnumerableAsyncEnumerableLike<T = unknown> extends RunnableAsyncEnumerableLike<T> {
    readonly [ContainerLike_type]?: EnumerableAsyncEnumerableLike<this[typeof ContainerLike_T]>;
    readonly [AsyncEnumerableLike_isEnumerable]: true;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromAsyncEnumerable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromAsyncEnumerable<T>(options?: O): Function1<AsyncEnumerableLike<T>, ContainerOf<C, T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromEnumerable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromEnumerable<T>(options?: O): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToAsyncEnumerable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toAsyncEnumerable<T>(options?: O): Function1<ContainerOf<C, T>, AsyncEnumerableLike<T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToEnumerable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Converter
     */
    toEnumerable<T>(options?: O): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}
