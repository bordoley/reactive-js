import {
  Container,
  ContainerLike,
  ContainerOf,
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "./containers";
import { Function1 } from "./functions";
import { ObserverLike } from "./rx";
import { SchedulerLike } from "./scheduling";
import { StreamLike, StreamableLike } from "./streaming";
import { DisposableLike } from "./util";

/** @ignore */
export const InteractiveSourceLike_move = Symbol("InteractiveSourceLike_move");
export interface InteractiveSourceLike extends DisposableLike {
  [InteractiveSourceLike_move](): void;
}

/** @ignore */
export const EnumeratorLike_current = Symbol("EnumeratorLike_current");

/** @ignore */
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");

export interface EnumeratorLike<T = unknown> extends InteractiveSourceLike {
  readonly [EnumeratorLike_current]: T;
  readonly [EnumeratorLike_hasCurrent]: boolean;
}

export interface AsyncEnumeratorLike<T = unknown>
  extends DisposableLike,
    InteractiveSourceLike,
    StreamLike<void, T> {
  readonly TStatefulContainerState?: ObserverLike<T>;
}

/** @ignore */
export const InteractiveContainerLike_interact = Symbol(
  "InteractiveContainerLike_interact",
);

export interface InteractiveContainerLike extends StatefulContainerLike {
  readonly TStatefulContainerState?: InteractiveSourceLike;
  readonly TCtx?: unknown;

  [InteractiveContainerLike_interact](
    _: this["TCtx"],
  ): StatefulContainerStateOf<InteractiveContainerLike, this["T"]>;
}

/**
 * Interface for iterating a Container of items.
 */
export interface EnumerableLike<T = unknown> extends InteractiveContainerLike {
  readonly TContainerOf?: EnumerableLike<this["T"]>;
  readonly TStatefulContainerState?: EnumeratorLike<this["T"]>;
  readonly TCtx?: void;

  [InteractiveContainerLike_interact](_: void): EnumeratorLike<T>;
}
export interface AsyncEnumerableLike<T = unknown>
  extends StreamableLike<void, T, AsyncEnumeratorLike<T>>,
    InteractiveContainerLike {
  readonly TStatefulContainerState?: AsyncEnumeratorLike<T>;
  readonly TCtx?: SchedulerLike;
}

export type InteractiveContainerCtxOf<
  C extends InteractiveContainerLike,
  T,
> = C extends {
  readonly TCtx?: unknown;
}
  ? NonNullable<
      (C & {
        readonly T: T;
      })["TCtx"]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

export interface CreateInteractiveContainer<C extends InteractiveContainerLike>
  extends Container<C> {
  create<T>(
    source: (ctx: C["TCtx"]) => StatefulContainerStateOf<C, T>,
  ): ContainerOf<C, T>;
}

export type ToEnumerable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toEnumerable<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
};
