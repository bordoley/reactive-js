import { prototype as disposablePrototype } from "./__internal__/util/Disposable";
import {
  MutableEnumeratorLike,
  prototype as enumeratorPrototype,
} from "./__internal__/util/Enumerator";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  anyProperty,
  createObjectFactory,
  init,
  mixWith,
} from "./__internal__/util/Object";
import {
  Container,
  ContainerLike,
  ContainerOf,
  Empty,
  Generate,
  StatefulContainerLike,
  StatefulContainerStateOf,
  Using,
} from "./containers";
import {
  Factory,
  Function1,
  Updater,
  forEach,
  newInstance,
  none,
  pipe,
  pipeLazy,
} from "./functions";
import { SchedulerLike } from "./scheduling";
import { AsyncEnumeratorLike, StreamableLike } from "./streaming";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike,
  SourceLike_move,
} from "./util";
import { addTo, dispose, isDisposed } from "./util/DisposableLike";

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

export const createEnumerableUsing: Using<EnumerableLike<unknown>>["using"] = <
  TResource extends DisposableLike,
  T,
>(
  resourceFactory: Factory<TResource | readonly TResource[]>,
  enumerableFactory: (...resources: readonly TResource[]) => EnumerableLike<T>,
): EnumerableLike<T> =>
  createEnumerable<T>(() => {
    const resources = resourceFactory();
    const resourcesArray = Array.isArray(resources) ? resources : [resources];
    const enumerator = enumerableFactory(...resourcesArray)[
      InteractiveContainerLike_interact
    ]();

    pipe(resourcesArray, forEach(addTo(enumerator)));

    return enumerator;
  });

export const createEnumerableUsingT: Using<EnumerableLike<unknown>> = {
  using: createEnumerableUsing,
};

export const emptyEnumerable: Empty<EnumerableLike>["empty"] =
  /*@__PURE__*/ pipe(
    {
      [Object_properties]: {},
      [Object_init](
        this: PropertyTypeOf<
          [typeof disposablePrototype, ReturnType<typeof enumeratorPrototype>]
        >,
      ) {
        init(disposablePrototype, this);
        init(enumeratorPrototype(), this);
      },
      [SourceLike_move](this: MutableEnumeratorLike) {
        pipe(this, dispose());
      },
    },
    mixWith(disposablePrototype, enumeratorPrototype()),
    createObjectFactory<
      EnumeratorLike<any>,
      PropertyTypeOf<
        [typeof disposablePrototype, ReturnType<typeof enumeratorPrototype>]
      >
    >(),
    f => pipeLazy(f, createEnumerable),
  );

export const emptyEnumerableT: Empty<EnumerableLike> = {
  empty: emptyEnumerable,
};

/**
 * Generates an EnumerableLike from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 */
export const generateEnumerable: Generate<EnumerableLike>["generate"] =
  /*@__PURE__*/ (<T>() => {
    const typedEnumerator = enumeratorPrototype<T>();

    type TProperties = PropertyTypeOf<
      [typeof disposablePrototype, typeof typedEnumerator]
    > & { f: Updater<T> };

    const createInstance = pipe(
      {
        [Object_properties]: { f: anyProperty },
        [Object_init](
          this: TProperties & MutableEnumeratorLike,
          f: Updater<T>,
          acc: T,
        ) {
          init(disposablePrototype, this);
          init(enumeratorPrototype(), this);
          this.f = f;
          this[EnumeratorLike_current] = acc;
        },
        [SourceLike_move](this: TProperties & MutableEnumeratorLike<T>) {
          if (!isDisposed(this)) {
            try {
              this[EnumeratorLike_current] = this.f(
                this[EnumeratorLike_current],
              );
            } catch (cause) {
              pipe(this, dispose({ cause }));
            }
          }
        },
      },
      mixWith(disposablePrototype, typedEnumerator),
      createObjectFactory<
        EnumeratorLike<T>,
        TProperties,
        Updater<T>,
        unknown
      >(),
    );

    return (generator: Updater<T>, initialValue: Factory<T>) =>
      createEnumerable(() => createInstance(generator, initialValue()));
  })();

export const generateEnumerableT: Generate<EnumerableLike> = {
  generate: generateEnumerable,
};
