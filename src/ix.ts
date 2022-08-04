import { disposableMixin } from "./__internal__/util/DisposableLikeMixins";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "./__internal__/util/EnumeratorLikeMixin";
import {
  PropertyTypeOf,
  clazz,
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
} from "./functions";
import { SchedulerLike } from "./scheduling";
import { AsyncEnumeratorLike, StreamableLike } from "./streaming";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "./util";
import { addTo, dispose, isDisposed } from "./util/DisposableLike";

/** @ignore */
export const InteractiveContainerLike_interact = Symbol(
  "InteractiveContainerLike_interact",
);

export interface InteractiveContainerLike<
  TSource extends DisposableLike,
  TCtx = void,
> extends StatefulContainerLike {
  [InteractiveContainerLike_interact](ctx: TCtx): TSource;
}

/**
 * Interface for iterating a Container of items.
 */
export interface EnumerableLike<T = unknown>
  extends InteractiveContainerLike<EnumeratorLike<T>> {
  readonly TContainerOf?: EnumerableLike<this["T"]>;
  readonly TStatefulContainerState?: EnumeratorLike<this["T"]>;
}
export interface AsyncEnumerableLike<T = unknown>
  extends StreamableLike<void, T, AsyncEnumeratorLike<T>>,
    InteractiveContainerLike<AsyncEnumeratorLike<T>, SchedulerLike> {
  readonly TContainerOf?: AsyncEnumerableLike<this["T"]>;
  readonly TStatefulContainerState?: AsyncEnumeratorLike<this["T"]>;
}

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
          empty[InteractiveContainerLike_interact](),
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

export const emptyEnumerable: Empty<EnumerableLike>["empty"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedEnumeratorMixin = enumeratorMixin<T>();
  const f = pipe(
    clazz(
      function EmptyEnumerator(
        this: PropertyTypeOf<
          [typeof disposableMixin, typeof typedEnumeratorMixin]
        > &
          EnumeratorLike<T>,
      ): EnumeratorLike<T> {
        init(disposableMixin, this);
        init(typedEnumeratorMixin, this);

        return this;
      },
      {},
      {
        [SourceLike_move](this: MutableEnumeratorLike) {
          pipe(this, dispose());
        },
      },
    ),
    mixWith(disposableMixin, typedEnumeratorMixin),
    createObjectFactory<EnumeratorLike<T>>(),
  );

  return () => createEnumerable(f);
})();
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
    const typedEnumerator = enumeratorMixin<T>();

    type TProperties = PropertyTypeOf<
      [typeof disposableMixin, typeof typedEnumerator]
    > & { f: Updater<T> };

    const createGenerateEnumerator = pipe(
      clazz(
        function GenerateEnumerator(
          this: TProperties & MutableEnumeratorLike<T>,
          f: Updater<T>,
          acc: T,
        ): MutableEnumeratorLike<T> {
          init(disposableMixin, this);
          init(typedEnumerator, this);
          this.f = f;
          this[EnumeratorLike_current] = acc;

          return this;
        },
        { f: none },
        {
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
      ),
      mixWith(disposableMixin, typedEnumerator),
      createObjectFactory<EnumeratorLike<T>, Updater<T>, T>(),
    );

    return (generator: Updater<T>, initialValue: Factory<T>) =>
      createEnumerable(() =>
        createGenerateEnumerator(generator, initialValue()),
      );
  })();
export const generateEnumerableT: Generate<EnumerableLike> = {
  generate: generateEnumerable,
};
