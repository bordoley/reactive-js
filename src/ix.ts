import { disposableMixin } from "./__internal__/util/__internal__Disposables";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "./__internal__/util/__internal__Enumerators";
import {
  Mutable,
  __extends,
  clazz,
  createInstanceFactory,
  init,
  props,
} from "./__internal__/util/__internal__Objects";
import {
  Container,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  ContainerOf,
  Empty,
  Generate,
  StatefulContainerLike,
  StatefulContainerLike_state,
} from "./containers";
import { Factory, Function1, Updater, none, pipe } from "./functions";
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
  readonly [ContainerLike_type]?: EnumerableLike<this[typeof ContainerLike_T]>;
  readonly [StatefulContainerLike_state]?: EnumeratorLike<
    this[typeof ContainerLike_T]
  >;
}
export interface AsyncEnumerableLike<T = unknown>
  extends StreamableLike<void, T, AsyncEnumeratorLike<T>>,
    InteractiveContainerLike<AsyncEnumeratorLike<T>, SchedulerLike> {
  readonly [ContainerLike_type]?: AsyncEnumerableLike<
    this[typeof ContainerLike_T]
  >;
  readonly [StatefulContainerLike_state]?: AsyncEnumeratorLike<
    this[typeof ContainerLike_T]
  >;
}

export type ToAsyncEnumerable<
  C extends ContainerLike,
  TOptions = never,
> = Container<C> & {
  toAsyncEnumerable<T>(
    options?: TOptions,
  ): Function1<ContainerOf<C, T>, AsyncEnumerableLike<T>>;
};

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
) => EnumerableLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly enumerate: Factory<EnumeratorLike<T>>;
  };

  return createInstanceFactory(
    clazz(
      function CreateEnumerable(
        instance: Pick<
          EnumerableLike<T>,
          typeof InteractiveContainerLike_interact
        > &
          Mutable<TProperties>,
        enumerate: Factory<EnumeratorLike<T>>,
      ): EnumerableLike<T> {
        instance.enumerate = enumerate;
        return instance;
      },
      props<TProperties>({
        enumerate: none,
      }),
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
  );
})();

export const emptyEnumerable: Empty<EnumerableLike>["empty"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedEnumeratorMixin = enumeratorMixin<T>();
  const createEnumerator = createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedEnumeratorMixin),
      function EmptyEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof SourceLike_move>,
      ): EnumeratorLike<T> {
        init(disposableMixin, instance);
        init(typedEnumeratorMixin, instance);

        return instance;
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

    type TProperties = { readonly f: Updater<T> };

    const createGenerateEnumerator = createInstanceFactory(
      clazz(
        __extends(disposableMixin, typedEnumerator),
        function GenerateEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          f: Updater<T>,
          acc: T,
        ): EnumeratorLike<T> {
          init(disposableMixin, instance);
          init(typedEnumerator, instance);

          instance.f = f;
          instance[EnumeratorLike_current] = acc;

          return instance;
        },
        props<TProperties>({ f: none }),
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
