import { StatefulContainerLike, ContainerLike_type, ContainerLike_T, StatefulContainerLike_state, ContainerLike, Container, ContainerOf, Empty, Generate } from "./containers.mjs";
import { Function1, Factory } from "./functions.mjs";
import { SchedulerLike } from "./scheduling.mjs";
import { StreamableLike, AsyncEnumeratorLike } from "./streaming.mjs";
import { DisposableLike, EnumeratorLike } from "./util.mjs";
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
declare const createEnumerable: <T>(f: Factory<EnumeratorLike<T>>) => EnumerableLike<T>;
declare const emptyEnumerable: Empty<EnumerableLike>["empty"];
declare const emptyEnumerableT: Empty<EnumerableLike>;
/**
 * Generates an EnumerableLike from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 */
declare const generateEnumerable: Generate<EnumerableLike>["generate"];
declare const generateEnumerableT: Generate<EnumerableLike>;
export { AsyncEnumerableLike, EnumerableLike, InteractiveContainerLike, InteractiveContainerLike_interact, ToAsyncEnumerable, ToEnumerable, createEnumerable, emptyEnumerable, emptyEnumerableT, generateEnumerable, generateEnumerableT };
