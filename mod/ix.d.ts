import { StatefulContainerLike, StatefulContainerStateOf, ContainerLike, Container, ContainerOf, Using, Empty } from "./containers.mjs";
import { Function1, Factory } from "./functions.mjs";
import { SchedulerLike } from "./scheduling.mjs";
import { StreamableLike, AsyncEnumeratorLike } from "./streaming.mjs";
import { SourceLike, EnumeratorLike } from "./util.mjs";
/** @ignore */
declare const InteractiveContainerLike_interact: unique symbol;
interface InteractiveContainerLike extends StatefulContainerLike {
    readonly TStatefulContainerState?: SourceLike;
    readonly TCtx?: unknown;
    [InteractiveContainerLike_interact](_: this["TCtx"]): StatefulContainerStateOf<InteractiveContainerLike, this["T"]>;
}
/**
 * Interface for iterating a Container of items.
 */
interface EnumerableLike<T = unknown> extends InteractiveContainerLike {
    readonly TContainerOf?: EnumerableLike<this["T"]>;
    readonly TStatefulContainerState?: EnumeratorLike<this["T"]>;
    readonly TCtx?: void;
    [InteractiveContainerLike_interact](_: void): EnumeratorLike<T>;
}
interface AsyncEnumerableLike<T = unknown> extends StreamableLike<void, T, AsyncEnumeratorLike<T>>, InteractiveContainerLike {
    readonly TStatefulContainerState?: AsyncEnumeratorLike<T>;
    readonly TCtx?: SchedulerLike;
}
declare type InteractiveContainerCtxOf<C extends InteractiveContainerLike, T> = C extends {
    readonly TCtx?: unknown;
} ? NonNullable<(C & {
    readonly T: T;
})["TCtx"]> : {
    readonly _C: C;
    readonly _T: () => T;
};
declare type ToEnumerable<C extends ContainerLike, TOptions = never> = Container<C> & {
    toEnumerable<T>(options?: TOptions): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
};
declare const createEnumerable: <T>(enumerate: Factory<EnumeratorLike<T>>) => EnumerableLike<T>;
declare const createEnumerableUsing: Using<EnumerableLike<unknown>>["using"];
declare const createEnumerableUsingT: Using<EnumerableLike<unknown>>;
declare const emptyEnumerable: Empty<EnumerableLike>["empty"];
declare const emptyEnumerableT: Empty<EnumerableLike>;
export { AsyncEnumerableLike, EnumerableLike, InteractiveContainerCtxOf, InteractiveContainerLike, InteractiveContainerLike_interact, ToEnumerable, createEnumerable, createEnumerableUsing, createEnumerableUsingT, emptyEnumerable, emptyEnumerableT };
