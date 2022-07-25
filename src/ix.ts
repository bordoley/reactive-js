import {
  MutableEnumeratorLike,
  properties as enumeratorProperties,
  prototype as enumeratorPrototype,
} from "./__internal__/ix/Enumerator";
import {
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "./__internal__/util/Disposable";
import {
  Object_init,
  createObjectFactory,
  init,
} from "./__internal__/util/Object";
import {
  Container,
  ContainerLike,
  ContainerOf,
  Empty,
  StatefulContainerLike,
  StatefulContainerStateOf,
} from "./containers";
import { Factory, Function1, newInstance, none, pipe } from "./functions";
import { ObserverLike } from "./rx";
import { SchedulerLike } from "./scheduling";
import { StreamLike, StreamableLike } from "./streaming";
import { DisposableLike } from "./util";
import { dispose } from "./util/DisposableLike";

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

export type ToEnumerable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toEnumerable<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
};

export const createEnumerable = /*@__PURE__*/ (() => {
  class CreateEnumerable<T> implements EnumerableLike<T> {
    constructor(readonly _enumerate: Factory<EnumeratorLike<T>>) {}

    [InteractiveContainerLike_interact](): EnumeratorLike<T> {
      try {
        return this._enumerate();
      } catch (cause) {
        const empty = emptyEnumerable<T>();
        return pipe(
          empty[InteractiveContainerLike_interact](none),
          dispose({ cause }),
        );
      }
    }
  }

  return <T>(enumerate: Factory<EnumeratorLike<T>>): EnumerableLike<T> =>
    newInstance(CreateEnumerable, enumerate);
})();

export const emptyEnumerable: Empty<EnumerableLike>["empty"] =
  /*@__PURE__*/ (() => {
    const properties = {
      ...disposableProperties,
      ...enumeratorProperties,
    };

    const prototype = {
      ...disposablePrototype,
      ...enumeratorPrototype,
      [Object_init](this: typeof properties) {
        init(disposablePrototype, this);
        init(enumeratorPrototype, this);
      },
      [InteractiveSourceLike_move](
        this: typeof properties & MutableEnumeratorLike,
      ) {
        pipe(this, dispose());
      },
    };

    const createInstance = createObjectFactory<
      typeof prototype,
      typeof properties
    >(prototype, properties);

    class EmptyEnumerable<T> implements EnumerableLike<T> {
      [InteractiveContainerLike_interact](): EnumeratorLike<T> {
        return createInstance() as EnumeratorLike<T>;
      }
    }

    return <T>() => newInstance(EmptyEnumerable) as EnumerableLike<T>;
  })();

export const emptyEnumerableT: Empty<EnumerableLike> = {
  empty: emptyEnumerable,
};
