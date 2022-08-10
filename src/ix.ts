import { disposableMixin } from "./__internal__/util/__internal__Disposables";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "./__internal__/util/__internal__Enumerators";
import {
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "./__internal__/util/__internal__Objects";
import {
  Container,
  ContainerLike,
  ContainerOf,
  Empty,
  Generate,
  StatefulContainerLike,
} from "./containers";
import {
  Factory,
  Function1,
  Updater,
  none,
  pipe,
  unsafeCast,
} from "./functions";
import { SchedulerLike } from "./scheduling";
import { AsyncEnumeratorLike, StreamableLike } from "./streaming";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "./util";
import { dispose, isDisposed } from "./util/DisposableLike";

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

export const createEnumerable: <T>(
  f: Factory<EnumeratorLike<T>>,
) => EnumerableLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    clazz(
      function CreateEnumerable(
        instance: unknown,
        enumerate: Factory<EnumeratorLike<T>>,
      ): asserts instance is EnumerableLike<T> {
        unsafeCast<{
          enumerate: Factory<EnumeratorLike<T>>;
        }>(instance);

        instance.enumerate = enumerate;
      },
      {
        enumerate: none,
      },
      {
        [InteractiveContainerLike_interact](this: {
          enumerate: Factory<EnumeratorLike<T>>;
        }): EnumeratorLike<T> {
          try {
            return this.enumerate();
          } catch (cause) {
            const empty = emptyEnumerable<T>();
            return pipe(
              empty[InteractiveContainerLike_interact](),
              dispose({ cause }),
            );
          }
        },
      },
    ),
  ))();

export const emptyEnumerable: Empty<EnumerableLike>["empty"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedEnumeratorMixin = enumeratorMixin<T>();
  const createEnumerator = createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedEnumeratorMixin),
      function EmptyEnumerator(
        instance: unknown,
      ): asserts instance is EnumeratorLike<T> {
        init(disposableMixin, instance);
        init(typedEnumeratorMixin, instance);
      },
      {},
      {
        [SourceLike_move](this: MutableEnumeratorLike) {
          pipe(this, dispose());
        },
      },
    ),
  );

  return () => createEnumerable(createEnumerator);
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

    type TProperties = { f: Updater<T> };

    const createGenerateEnumerator = createInstanceFactory(
      clazz(
        __extends(disposableMixin, typedEnumerator),
        function GenerateEnumerator(
          instance: unknown,
          f: Updater<T>,
          acc: T,
        ): asserts instance is EnumeratorLike<T> {
          init(disposableMixin, instance);
          init(typedEnumerator, instance);
          unsafeCast<TProperties>(instance);

          instance.f = f;

          instance[EnumeratorLike_current] = acc;
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
    );

    return (generator: Updater<T>, initialValue: Factory<T>) =>
      createEnumerable(() =>
        createGenerateEnumerator(generator, initialValue()),
      );
  })();
export const generateEnumerableT: Generate<EnumerableLike> = {
  generate: generateEnumerable,
};
