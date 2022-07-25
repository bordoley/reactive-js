import { StatefulContainerLike, StatefulContainerStateOf, Container, ContainerOf, ContainerLike } from "./containers.mjs";
import { Function1 } from "./functions.mjs";
import { ObserverLike } from "./rx.mjs";
import { SchedulerLike } from "./scheduling.mjs";
import { StreamLike, StreamableLike } from "./streaming.mjs";
import { DisposableLike } from "./util.mjs";
declare const InteractiveSourceLike_move: unique symbol;
interface InteractiveSourceLike extends DisposableLike {
    [InteractiveSourceLike_move](): void;
}
declare const EnumeratorLike_current: unique symbol;
declare const EnumeratorLike_hasCurrent: unique symbol;
interface EnumeratorLike<T = unknown> extends InteractiveSourceLike {
    readonly [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
}
interface AsyncEnumeratorLike<T = unknown> extends DisposableLike, InteractiveSourceLike, StreamLike<void, T> {
    readonly TStatefulContainerState?: ObserverLike<T>;
}
declare const InteractiveContainerLike_interact: unique symbol;
interface InteractiveContainerLike extends StatefulContainerLike {
    readonly TStatefulContainerState?: InteractiveSourceLike;
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
interface CreateInteractiveContainer<C extends InteractiveContainerLike> extends Container<C> {
    create<T>(source: (ctx: C["TCtx"]) => StatefulContainerStateOf<C, T>): ContainerOf<C, T>;
}
declare type ToEnumerable<C extends ContainerLike> = Container<C> & {
    toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
};
export { AsyncEnumerableLike, AsyncEnumeratorLike, CreateInteractiveContainer, EnumerableLike, EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent, InteractiveContainerCtxOf, InteractiveContainerLike, InteractiveContainerLike_interact, InteractiveSourceLike, InteractiveSourceLike_move, ToEnumerable };
