import {
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "./__internal__/util/Disposable";
import {
  MutableEnumeratorLike,
  properties as enumeratorProperties,
  prototype as enumeratorPrototype,
} from "./__internal__/util/Enumerator";
import {
  Object_init,
  createObjectFactory,
  init,
  mix,
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
import { SchedulerLike } from "./scheduling";
import { AsyncEnumeratorLike, StreamableLike } from "./streaming";
import { EnumeratorLike, SourceLike, SourceLike_move } from "./util";
import { dispose } from "./util/DisposableLike";

/** @ignore */
export const InteractiveContainerLike_interact = Symbol(
  "InteractiveContainerLike_interact",
);

export interface InteractiveContainerLike extends StatefulContainerLike {
  readonly TStatefulContainerState?: SourceLike;
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

    const prototype = mix(disposablePrototype, enumeratorPrototype, {
      [Object_init](this: typeof properties) {
        init(disposablePrototype, this);
        init(enumeratorPrototype, this);
      },
      [SourceLike_move](this: typeof properties & MutableEnumeratorLike) {
        pipe(this, dispose());
      },
    });

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
