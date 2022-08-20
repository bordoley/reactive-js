import { disposableMixin } from "./__internal__/util/__internal__Disposables";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "./__internal__/util/__internal__Enumerators";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "./__internal__/util/__internal__Objects";
import {
  Container,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  ContainerOf,
  Empty,
  StatefulContainerLike,
  StatefulContainerLike_state,
} from "./containers";
import { Factory, Function1, none, pipe } from "./functions";
import { SchedulerLike } from "./scheduling";
import { StreamLike, StreamableLike } from "./streaming";
import {
  DisposableLike,
  EnumeratorLike,
  SourceLike,
  SourceLike_move,
} from "./util";
import { dispose } from "./util/DisposableLike";

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

export interface AsyncEnumeratorLike<T = unknown>
  extends SourceLike,
    StreamLike<void, T> {}

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
    mixin(
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
    mixin(
      include(disposableMixin, typedEnumeratorMixin),
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
