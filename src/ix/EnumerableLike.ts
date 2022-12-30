import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins";
import { disposableRefMixin } from "../__internal__/util/DisposableRefLike";
import {
  MutableRefLike,
  getCurrentRef,
  setCurrentRef,
} from "../__internal__/util/MutableRefLike";
import {
  Buffer,
  Concat,
  ConcatAll,
  DistinctUntilChanged,
  Empty,
  ForEach,
  Generate,
  Keep,
  Map,
  Pairwise,
  Repeat,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToIterable,
  ToReadonlyArray,
  Zip,
} from "../containers";
import { toEnumerable as toEnumerableReadonlyArray } from "../containers/ReadonlyArrayLike";
import ContainerLike__repeat from "../containers/__internal__/ContainerLike/ContainerLike.repeat";
import StatefulContainerLike__buffer from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.buffer";
import StatefulContainerLike__distinctUntilChanged from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged";
import StatefulContainerLike__forEach from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach";
import StatefulContainerLike__keep from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep";
import StatefulContainerLike__map from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map";
import StatefulContainerLike__scan from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan";
import StatefulContainerLike__skipFirst from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.skipFirst";
import StatefulContainerLike__takeFirst from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeFirst";
import StatefulContainerLike__takeLast from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast";
import StatefulContainerLike__takeWhile from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile";
import StatefulContainerLike__throwIfEmpty from "../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty";
import {
  Lift,
  TInteractive,
  interactive,
} from "../containers/__internal__/containers.internal";
import {
  Equality,
  Factory,
  Function1,
  Option,
  Predicate,
  Reducer,
  SideEffect1,
  Updater,
  getLength,
  identity,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
  raise,
  returns,
  unsafeCast,
} from "../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  InteractiveContainerLike_interact,
  SourceLike_move,
  ToEnumerable,
} from "../ix";
import { getCurrent, hasCurrent, move } from "../ix/EnumeratorLike";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";
import { Exception } from "../util";
import {
  add,
  addIgnoringChildErrors,
  addTo,
  bindTo,
  dispose,
  disposed,
  isDisposed,
  onComplete,
} from "../util/DisposableLike";
import DisposableLike__delegatingMixin from "../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DisposableLike__mixin from "../util/__internal__/DisposableLike/DisposableLike.mixin";
import DelegatingEnumeratorLike__mixin from "./__internal__/DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin";
import DelegatingEnumeratorLike__move from "./__internal__/DelegatingEnumeratorLike/DelegatingEnumeratorLike.move";
import EnumerableLike__create from "./__internal__/EnumerableLike/EnumerableLike.create";
import EnumerableLike__empty from "./__internal__/EnumerableLike/EnumerableLike.empty";
import EnumerableLike__enumerate from "./__internal__/EnumerableLike/EnumerableLike.enumerate";
import EnumerableLike__toIterable from "./__internal__/EnumerableLike/EnumerableLike.toIterable";
import EnumerableLike__toReadonlyArray from "./__internal__/EnumerableLike/EnumerableLike.toReadonlyArray";
import EnumerableLike__toRunnable from "./__internal__/EnumerableLike/EnumerableLike.toRunnable";
import EnumerableLike__toRunnableObservable from "./__internal__/EnumerableLike/EnumerableLike.toRunnableObservable";
import EnumerableLike__zip from "./__internal__/EnumerableLike/EnumerableLike.zip";
import MutableEnumeratorLike__mixin from "./__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import {
  DelegatingEnumeratorLike,
  MutableEnumeratorLike,
} from "./__internal__/ix.internal";

export const enumerate = EnumerableLike__enumerate;

const lift: Lift<EnumerableLike, TInteractive>["lift"] = /*@__PURE__*/ (() => {
  class LiftedEnumerable<TA, TB> implements EnumerableLike<TB> {
    constructor(
      readonly src: EnumerableLike<TA>,
      readonly operators: readonly Function1<
        EnumeratorLike<any>,
        EnumeratorLike<any>
      >[],
    ) {}

    [InteractiveContainerLike_interact](): EnumeratorLike<TB> {
      return pipeUnsafe(
        this.src,
        enumerate(),
        ...this.operators,
      ) as EnumeratorLike<TB>;
    }
  }

  return <TA, TB>(
      operator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    ) =>
    (enumerable: EnumerableLike<TA>): EnumerableLike<TB> => {
      const src =
        enumerable instanceof LiftedEnumerable
          ? (enumerable.src as EnumerableLike<TA>)
          : enumerable;

      const allFunctions =
        enumerable instanceof LiftedEnumerable
          ? [...enumerable.operators, operator]
          : [operator];

      return newInstance<
        EnumerableLike<TB>,
        EnumerableLike<TA>,
        readonly Function1<EnumeratorLike<any>, EnumeratorLike<any>>[]
      >(LiftedEnumerable, src, allFunctions);
    };
})();
const liftT: Lift<EnumerableLike, TInteractive> = {
  lift,
  variance: interactive,
};

export const buffer: Buffer<EnumerableLike>["buffer"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedMutableEnumeratorMixin =
    MutableEnumeratorLike__mixin<readonly T[]>();

  type TProperties = {
    readonly delegate: EnumeratorLike<T>;
    readonly maxBufferSize: number;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedMutableEnumeratorMixin),
        function BufferEnumerator(
          instance: Pick<EnumeratorLike<readonly T[]>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          maxBufferSize: number,
        ): EnumeratorLike<readonly T[]> {
          init(DisposableLike__mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.delegate = delegate;
          instance.maxBufferSize = maxBufferSize;

          pipe(instance, add(delegate));

          return instance;
        },
        props<TProperties>({
          delegate: none,
          maxBufferSize: 0,
        }),
        {
          [SourceLike_move](
            this: TProperties & MutableEnumeratorLike<readonly T[]>,
          ) {
            const buffer: T[] = [];

            const { delegate, maxBufferSize } = this;

            while (getLength(buffer) < maxBufferSize && move(delegate)) {
              buffer.push(getCurrent(delegate));
            }

            const bufferLength = getLength(buffer);
            if (bufferLength > 0) {
              this[EnumeratorLike_current] = buffer;
            } else if (bufferLength === 0) {
              pipe(this, dispose());
            }
          },
        },
      ),
    ),
    StatefulContainerLike__buffer<EnumerableLike, T, TInteractive>(liftT),
  );
})();
export const bufferT: Buffer<EnumerableLike> = {
  buffer,
};

export const concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<T>();
    const typedDisposableRefMixin = disposableRefMixin<EnumeratorLike<T>>();

    type TProperties = {
      readonly delegate: EnumeratorLike<EnumerableLike<T>>;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(
            DisposableLike__mixin,
            typedDisposableRefMixin,
            typedMutableEnumeratorMixin,
          ),
          function ConcatAllEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<EnumerableLike<T>>,
          ): EnumeratorLike<T> {
            init(DisposableLike__mixin, instance);
            init(typedDisposableRefMixin, instance, disposed);
            init(typedMutableEnumeratorMixin, instance);

            instance.delegate = delegate;

            pipe(instance, add(delegate));

            return instance;
          },
          props<TProperties>({
            delegate: none,
          }),
          {
            [SourceLike_move](
              this: TProperties &
                MutableEnumeratorLike<T> &
                MutableRefLike<EnumeratorLike<T>>,
            ) {
              const { delegate } = this;
              const innerEnumerator = getCurrentRef(this);

              if (isDisposed(innerEnumerator) && move(delegate)) {
                const next = pipe(delegate, getCurrent, enumerate());
                pipe(this, setCurrentRef(next));
              }

              while (!pipe(this, getCurrentRef, isDisposed)) {
                const innerEnumerator = getCurrentRef(this);
                if (move(innerEnumerator)) {
                  this[EnumeratorLike_current] = getCurrent(innerEnumerator);
                  break;
                } else if (move(delegate)) {
                  const next = pipe(delegate, getCurrent, enumerate());
                  pipe(this, setCurrentRef(next));
                } else {
                  pipe(this, dispose());
                }
              }
            },
          },
        ),
      ),
      lift,
      returns,
    );
  })();
export const concatAllT: ConcatAll<EnumerableLike> = { concatAll };

export const concat: Concat<EnumerableLike>["concat"] = <T>(
  ...enumerables: readonly EnumerableLike<T>[]
): EnumerableLike<T> =>
  pipe(enumerables, toEnumerableReadonlyArray(), concatAll());
export const concatT: Concat<EnumerableLike> = {
  concat,
};

export const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

    type TProperties = {
      readonly equality: Equality<T>;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(
            DisposableLike__delegatingMixin,
            typedDelegatingEnumeratorMixin,
          ),
          function DistinctUntilChanged(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            equality: Equality<T>,
          ): EnumeratorLike<T> {
            init(DisposableLike__delegatingMixin, instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.equality = equality;

            return instance;
          },
          props<TProperties>({ equality: none }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              const hadCurrent = hasCurrent(this);
              const prevCurrent = hadCurrent ? getCurrent(this) : none;

              try {
                while (DelegatingEnumeratorLike__move(this)) {
                  if (
                    !hadCurrent ||
                    !this.equality(prevCurrent as T, getCurrent(this))
                  ) {
                    break;
                  }
                }
              } catch (cause) {
                pipe(this, dispose({ cause }));
              }
            },
          },
        ),
      ),
      StatefulContainerLike__distinctUntilChanged<
        EnumerableLike,
        T,
        TInteractive
      >(liftT),
    );
  })();
export const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike> = {
  distinctUntilChanged,
};

export const empty: Empty<EnumerableLike>["empty"] = EnumerableLike__empty;
export const emptyT: Empty<EnumerableLike> = { empty };

export const forEach: ForEach<EnumerableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

  type TProperties = {
    readonly effect: SideEffect1<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(
          DisposableLike__delegatingMixin,
          typedDelegatingEnumeratorMixin,
        ),
        function forEachEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          effect: SideEffect1<T>,
        ): EnumeratorLike<T> {
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(typedDelegatingEnumeratorMixin, instance, delegate);

          instance.effect = effect;

          return instance;
        },
        props<TProperties>({ effect: none }),
        {
          [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
            if (DelegatingEnumeratorLike__move(this)) {
              try {
                this.effect(getCurrent(this));
              } catch (cause) {
                pipe(this, dispose({ cause }));
              }
            }
          },
        },
      ),
    ),
    StatefulContainerLike__forEach<EnumerableLike, T, TInteractive>(liftT),
  );
})();
export const forEachT: ForEach<EnumerableLike> = { forEach };

/**
 * Generates an EnumerableLike from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 */
export const generate: Generate<EnumerableLike>["generate"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<T>();

  type TProperties = { readonly f: Updater<T> };

  const createGenerateEnumerator = createInstanceFactory(
    mix(
      include(DisposableLike__mixin, typedMutableEnumeratorMixin),
      function GenerateEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
          Mutable<TProperties>,
        f: Updater<T>,
        acc: T,
      ): EnumeratorLike<T> {
        init(DisposableLike__mixin, instance);
        init(typedMutableEnumeratorMixin, instance);

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
    EnumerableLike__create(() =>
      createGenerateEnumerator(generator, initialValue()),
    );
})();
export const generateT: Generate<EnumerableLike> = {
  generate,
};

export const keep: Keep<EnumerableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

  type TProperties = {
    readonly predicate: Predicate<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(
          DisposableLike__delegatingMixin,
          typedDelegatingEnumeratorMixin,
        ),
        function KeepEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          predicate: Predicate<T>,
        ): EnumeratorLike<T> {
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(typedDelegatingEnumeratorMixin, instance, delegate);

          instance.predicate = predicate;

          return instance;
        },
        props<TProperties>({ predicate: none }),
        {
          [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
            const { predicate } = this;

            try {
              while (
                DelegatingEnumeratorLike__move(this) &&
                !predicate(getCurrent(this))
              ) {}
            } catch (cause) {
              pipe(this, dispose({ cause }));
            }
          },
        },
      ),
    ),
    StatefulContainerLike__keep<EnumerableLike, T, TInteractive>(liftT),
  );
})();
export const keepT: Keep<EnumerableLike> = {
  keep,
};

export const map: Map<EnumerableLike>["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<TB>();

  type TProperties = {
    readonly mapper: Function1<TA, TB>;
    readonly delegate: EnumeratorLike<TA>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin),
        function MapEnumerator(
          instance: Pick<EnumeratorLike<TB>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<TA>,
          mapper: Function1<TA, TB>,
        ): EnumeratorLike<TB> {
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(typedMutableEnumeratorMixin, instance);

          instance.delegate = delegate;
          instance.mapper = mapper;

          return instance;
        },
        props<TProperties>({
          mapper: none,
          delegate: none,
        }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<TB>) {
            const { delegate } = this;

            if (move(delegate)) {
              try {
                this[EnumeratorLike_current] = this.mapper(
                  getCurrent(delegate),
                );
              } catch (cause) {
                pipe(this, dispose({ cause }));
              }
            }
          },
        },
      ),
    ),
    StatefulContainerLike__map<EnumerableLike, TA, TB, TInteractive>(liftT),
  );
})();
export const mapT: Map<EnumerableLike> = { map };

export const pairwise: Pairwise<EnumerableLike>["pairwise"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<[T, T]>();

  type TProperties = {
    readonly delegate: EnumeratorLike<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin),
        function PairwiseEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
        ): EnumeratorLike<readonly [T, T]> {
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(typedMutableEnumeratorMixin, instance);

          instance.delegate = delegate;

          return instance;
        },
        props<TProperties>({
          delegate: none,
        }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<[T, T]>) {
            const { delegate } = this;

            const prev = hasCurrent(this)
              ? getCurrent(this)[1]
              : move(delegate)
              ? getCurrent(delegate)
              : none;

            if (isSome(prev) && move(delegate)) {
              const current = getCurrent(delegate);
              this[EnumeratorLike_current] = [prev, current];
            } else {
              pipe(this, dispose());
            }
          },
        },
      ),
    ),
    lift,
    returns,
  );
})();
export const pairwiseT: Pairwise<EnumerableLike> = {
  pairwise,
};

export const repeat: Repeat<EnumerableLike>["repeat"] = /*@__PURE__*/ (<
  T,
>() => {
  type TProperties = {
    count: number;
    enumerator: Option<EnumeratorLike<T>>;
    readonly shouldRepeat: Predicate<number>;
    readonly src: EnumerableLike<T>;
  };

  const createRepeatEnumerator = createInstanceFactory(
    mix(
      include(DisposableLike__mixin),
      function RepeatEnumerator(
        instance: Pick<
          EnumeratorLike<T>,
          | typeof SourceLike_move
          | typeof EnumeratorLike_current
          | typeof EnumeratorLike_hasCurrent
        > &
          Mutable<TProperties>,
        src: EnumerableLike<T>,
        shouldRepeat: Predicate<number>,
      ): EnumeratorLike<T> {
        init(DisposableLike__mixin, instance);

        instance.src = src;
        instance.shouldRepeat = shouldRepeat;

        return instance;
      },
      props<TProperties>({
        count: 0,
        enumerator: none,
        shouldRepeat: none,
        src: none,
      }),
      {
        [SourceLike_move](this: TProperties & EnumeratorLike<T>) {
          if (isNone(this.enumerator)) {
            this.enumerator = pipe(this.src, enumerate(), addTo(this));
          }

          let { enumerator } = this;
          while (!move(enumerator)) {
            this.count++;

            try {
              if (this.shouldRepeat(this.count)) {
                enumerator = pipe(this.src, enumerate(), addTo(this));
                this.enumerator = enumerator;
              } else {
                break;
              }
            } catch (cause) {
              pipe(this, dispose({ cause }));
              break;
            }
          }
        },
        get [EnumeratorLike_current](): T {
          unsafeCast<TProperties>(this);
          return hasCurrent(this)
            ? this.enumerator?.[EnumeratorLike_current] ?? raise()
            : raise();
        },
        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<TProperties>(this);
          return this.enumerator?.[EnumeratorLike_hasCurrent] ?? false;
        },
      },
    ),
  );

  return ContainerLike__repeat<EnumerableLike, T>((delegate, predicate) =>
    EnumerableLike__create(() => createRepeatEnumerator(delegate, predicate)),
  );
})();
export const repeatT: Repeat<EnumerableLike> = {
  repeat,
};

export const scan: Scan<EnumerableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<TAcc>();

  type TProperties = {
    readonly reducer: Reducer<T, TAcc>;
    readonly delegate: EnumeratorLike<T>;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin),
        function ScanEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ): MutableEnumeratorLike<TAcc> {
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(typedMutableEnumeratorMixin, instance);

          instance.delegate = delegate;
          instance.reducer = reducer;

          try {
            const acc = initialValue();
            instance[EnumeratorLike_current] = acc;
          } catch (cause) {
            pipe(instance, dispose({ cause }));
          }

          return instance;
        },
        props<TProperties>({ reducer: none, delegate: none }),
        {
          [SourceLike_move](this: TProperties & MutableEnumeratorLike<TAcc>) {
            const acc = hasCurrent(this) ? getCurrent(this) : none;

            const { delegate, reducer } = this;
            if (isSome(acc) && move(delegate)) {
              try {
                this[EnumeratorLike_current] = reducer(
                  acc,
                  getCurrent(delegate),
                );
              } catch (cause) {
                pipe(this, dispose({ cause }));
              }
            }
          },
        },
      ),
    ),
    StatefulContainerLike__scan<EnumerableLike, T, TAcc, TInteractive>(liftT),
  );
})();
export const scanT: Scan<EnumerableLike> = {
  scan,
};

export const skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

    type TProperties = {
      readonly skipCount: number;
      count: number;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(
            DisposableLike__delegatingMixin,
            typedDelegatingEnumeratorMixin,
          ),
          function SkipFirstEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            skipCount: number,
          ): EnumeratorLike<T> {
            init(DisposableLike__delegatingMixin, instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.skipCount = skipCount;
            instance.count = 0;

            return instance;
          },
          props<TProperties>({
            skipCount: 0,
            count: 0,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              const { skipCount } = this;

              for (let { count } = this; count < skipCount; count++) {
                if (!DelegatingEnumeratorLike__move(this)) {
                  break;
                }
              }

              this.count = skipCount;
              DelegatingEnumeratorLike__move(this);
            },
          },
        ),
      ),
      StatefulContainerLike__skipFirst<EnumerableLike, T, TInteractive>(liftT),
    );
  })();
export const skipFirstT: SkipFirst<EnumerableLike> = {
  skipFirst,
};

export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

    type TProperties = {
      readonly maxCount: number;
      count: number;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(
            DisposableLike__delegatingMixin,
            typedDelegatingEnumeratorMixin,
          ),
          function TakeFirstEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            maxCount: number,
          ): EnumeratorLike<T> {
            init(DisposableLike__delegatingMixin, instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.maxCount = maxCount;

            return instance;
          },
          props<TProperties>({
            maxCount: 0,
            count: 0,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (this.count < this.maxCount) {
                this.count++;
                DelegatingEnumeratorLike__move(this);
              } else {
                pipe(this, dispose());
              }
            },
          },
        ),
      ),
      StatefulContainerLike__takeFirst<EnumerableLike, T, TInteractive>({
        ...liftT,
      }),
    );
  })();
export const takeFirstT: TakeFirst<EnumerableLike> = {
  takeFirst,
};

export const takeLast: TakeLast<EnumerableLike>["takeLast"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

  type TProperties = {
    readonly maxCount: number;
    isStarted: boolean;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedDelegatingEnumeratorMixin),
        function TakeLastEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          maxCount: number,
        ): EnumeratorLike<T> {
          init(DisposableLike__mixin, instance);
          init(typedDelegatingEnumeratorMixin, instance, delegate);

          instance.maxCount = maxCount;
          instance.isStarted = false;

          pipe(instance, add(delegate));

          return instance;
        },
        props<TProperties>({
          maxCount: 0,
          isStarted: false,
        }),
        {
          [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
            if (!isDisposed(this) && !this.isStarted) {
              this.isStarted = true;

              const last: unknown[] = [];

              while (DelegatingEnumeratorLike__move(this)) {
                last.push(getCurrent(this));

                if (getLength(last) > this.maxCount) {
                  last.shift();
                }
              }

              const enumerator = pipe(
                last,
                toEnumerableReadonlyArray(),
                enumerate(),
                bindTo(this),
              );
              init(typedDelegatingEnumeratorMixin, this, enumerator);
            }

            DelegatingEnumeratorLike__move(this);
          },
        },
      ),
    ),
    StatefulContainerLike__takeLast<EnumerableLike, T, TInteractive>({
      ...liftT,
    }),
  );
})();
export const takeLastT: TakeLast<EnumerableLike> = { takeLast };

export const takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

    type TProperties = {
      readonly predicate: Predicate<T>;
      readonly inclusive: boolean;
      done: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(
            DisposableLike__delegatingMixin,
            typedDelegatingEnumeratorMixin,
          ),
          function TakeWhileEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            predicate: Predicate<T>,
            inclusive: boolean,
          ): EnumeratorLike<T> {
            init(DisposableLike__delegatingMixin, instance, delegate);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.predicate = predicate;
            instance.inclusive = inclusive;

            return instance;
          },
          props<TProperties>({
            predicate: none,
            inclusive: false,
            done: false,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              const { inclusive, predicate } = this;

              if (this.done && !isDisposed(this)) {
                pipe(this, dispose());
              } else if (DelegatingEnumeratorLike__move(this)) {
                const current = getCurrent(this);

                try {
                  const satisfiesPredicate = predicate(current);

                  if (!satisfiesPredicate && inclusive) {
                    this.done = true;
                  } else if (!satisfiesPredicate) {
                    pipe(this, dispose());
                  }
                } catch (cause) {
                  pipe(this, dispose({ cause }));
                }
              }
            },
          },
        ),
      ),
      StatefulContainerLike__takeWhile<EnumerableLike, T, TInteractive>(liftT),
    );
  })();
export const takeWhileT: TakeWhile<EnumerableLike> = { takeWhile };

export const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin<T>();

    type TProperties = {
      isEmpty: boolean;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(DisposableLike__mixin, typedDelegatingEnumeratorMixin),
          function TakeWhileEnumerator(
            instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
              TProperties,
            delegate: EnumeratorLike,
            factory: Factory<unknown>,
          ): EnumeratorLike<T> {
            init(DisposableLike__mixin, instance);
            init(typedDelegatingEnumeratorMixin, instance, delegate);

            instance.isEmpty = true;

            pipe(instance, addIgnoringChildErrors(delegate));
            pipe(
              delegate,
              onComplete(() => {
                let error: Option<Exception> = none;

                if (instance.isEmpty) {
                  let cause: unknown = none;
                  try {
                    cause = factory();
                  } catch (e) {
                    cause = e;
                  }

                  error = { cause };
                }

                pipe(instance, dispose(error));
              }),
            );

            return instance;
          },
          props<TProperties>({
            isEmpty: true,
          }),
          {
            [SourceLike_move](this: TProperties & DelegatingEnumeratorLike<T>) {
              if (DelegatingEnumeratorLike__move(this)) {
                this.isEmpty = false;
              }
            },
          },
        ),
      ),
      StatefulContainerLike__throwIfEmpty<EnumerableLike, T, TInteractive>(
        liftT,
      ),
    );
  })();
export const throwIfEmptyT: ThrowIfEmpty<EnumerableLike> = {
  throwIfEmpty,
};

export const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"] = () =>
  identity;
export const toEnumerableT: ToEnumerable<EnumerableLike> = {
  toEnumerable,
};

export const toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"] =
  EnumerableLike__toRunnableObservable as ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"];
export const toEnumerableObservableT: ToEnumerableObservable<EnumerableLike> = {
  toEnumerableObservable,
};

/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
export const toIterable: ToIterable<EnumerableLike>["toIterable"] =
  EnumerableLike__toIterable;
export const toIterableT: ToIterable<EnumerableLike> = { toIterable };

export const toObservable: ToObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toObservable"] = EnumerableLike__toRunnableObservable;
export const toObservableT: ToObservable<
  EnumerableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
> = { toObservable };

export const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =
  EnumerableLike__toReadonlyArray;
export const toReadonlyArrayT: ToReadonlyArray<EnumerableLike> = {
  toReadonlyArray,
};

export const toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  EnumerableLike__toRunnable;
export const toRunnableT: ToRunnable<EnumerableLike> = { toRunnable };

export const toRunnableObservable: ToRunnableObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = EnumerableLike__toRunnableObservable;
export const toRunnableObservableT: ToRunnableObservable<
  EnumerableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
> = { toRunnableObservable };

export const zip: Zip<EnumerableLike>["zip"] = EnumerableLike__zip;
export const zipT: Zip<EnumerableLike> = { zip };
