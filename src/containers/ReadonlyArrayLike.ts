import { getDelay, hasDelay } from "../__internal__/optionalArgs";
import { disposableMixin } from "../__internal__/util/DisposableLikeMixins";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/EnumeratorLikeMixin";
import {
  PropertyTypeOf,
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "../__internal__/util/Object";
import {
  ForEach,
  Keep,
  Map,
  ReadonlyArrayLike,
  SequenceLike,
  ToReadonlyArray,
  ToSequence,
} from "../containers";
import {
  Function1,
  Option,
  Predicate,
  SideEffect1,
  getLength,
  identity,
  isSome,
  max,
  min,
  none,
  pipe,
} from "../functions";
import { EnumerableLike, ToEnumerable, createEnumerable } from "../ix";
import {
  EnumerableObservableLike,
  ObservableLike,
  RunnableLike,
  RunnableObservableLike,
  ToObservable,
  ToRunnable,
  createEnumerableObservable,
  createRunnable,
  createRunnableObservable,
} from "../rx";
import { ObserverLike } from "../scheduling";
import { getScheduler } from "../scheduling/ObserverLike";
import { __yield, schedule } from "../scheduling/SchedulerLike";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  SinkLike_notify,
  SourceLike_move,
} from "../util";
import { addTo, dispose, isDisposed } from "../util/DisposableLike";

export const every =
  <T>(predicate: Predicate<T>): Function1<readonly T[], boolean> =>
  arr =>
    arr.every(predicate);

export const forEach: ForEach<ReadonlyArrayLike>["forEach"] =
  <T>(effect: SideEffect1<T>): Function1<readonly T[], readonly T[]> =>
  arr => {
    arr.forEach(effect);
    return arr;
  };
export const forEachT: ForEach<ReadonlyArrayLike> = { forEach };

export const keep: Keep<ReadonlyArrayLike>["keep"] =
  <T>(predicate: Predicate<T>) =>
  (arr: readonly T[]): readonly T[] => {
    const result: ReadonlyArray<T> = arr.filter(
      predicate as (value: T) => value is T,
    );
    return result;
  };
export const keepT: Keep<ReadonlyArrayLike> = { keep };

export const map: Map<ReadonlyArrayLike>["map"] =
  <TA, TB>(mapper: Function1<TA, TB>) =>
  (arr: readonly TA[]): readonly TB[] =>
    arr.map(mapper);
export const mapT: Map<ReadonlyArrayLike> = { map };

export const some =
  <T>(predicate: Predicate<T>): Function1<ReadonlyArrayLike<T>, boolean> =>
  arr =>
    arr.some(predicate);

export type FromArrayOptions = {
  readonly start: number;
  readonly count: number;
};

const createFromArray =
  <C, T>(factory: (values: readonly T[], start: number, count: number) => C) =>
  (
    options: Partial<FromArrayOptions> = {},
  ): Function1<ReadonlyArrayLike<T>, C> =>
  values => {
    const valuesLength = getLength(values);
    const { start: startOption, count: countOption } = options;

    const { start, count } = (() => {
      if (isSome(countOption) && countOption >= 0) {
        const startOrDefault = startOption ?? 0;
        const maxStart = max(startOrDefault, 0);
        const start = min(maxStart, valuesLength - 1);

        const maxCount = min(valuesLength, countOption);
        const count = min(valuesLength - start, maxCount);

        return { start, count };
      } else if (isSome(countOption) && countOption < 0) {
        const startOrDefault = startOption ?? valuesLength - 1;
        const maxStart = max(startOrDefault, 0);
        const start = min(maxStart, valuesLength - 1);

        const maxCount = max(-valuesLength, countOption);
        const count = max(-start - 1, maxCount);

        return { start, count };
      } else {
        // count is none
        const startOrDefault = startOption ?? 0;
        const maxStart = max(startOrDefault, 0);
        const start = min(maxStart, valuesLength);
        const count = valuesLength - start;

        return { start, count };
      }
    })();

    return factory(values, start, count);
  };

export const toEnumerable: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toEnumerable"] = /*@__PURE__*/ (<T>() => {
  const typedEnumerator = enumeratorMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof disposableMixin & typeof typedEnumerator]
  > & {
    array: readonly unknown[];
    count: number;
    index: number;
  };

  const createReadonlyArrayEnumerator = createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedEnumerator),
      function ReadonlyArrayEnumerator(
        this: TProperties & EnumeratorLike<T>,
        array: readonly unknown[],
        start: number,
        count: number,
      ) {
        init(disposableMixin, this);
        init(typedEnumerator, this);

        this.array = array;
        this.index = start - 1;
        this.count = count;

        return this;
      },
      {
        array: none,
        count: 0,
        index: 0,
      },
      {
        [SourceLike_move](this: TProperties & MutableEnumeratorLike) {
          const { array } = this;
          if (!isDisposed(this)) {
            this.index++;
            const { index, count } = this;

            if (count !== 0) {
              this[EnumeratorLike_current] = array[index];

              this.count = count > 0 ? this.count - 1 : this.count + 1;
            } else {
              pipe(this, dispose());
            }
          }
        },
      },
    ),
  );

  return createFromArray<EnumerableLike<T>, T>(
    (array: readonly T[], start: number, count: number) =>
      createEnumerable(() =>
        createReadonlyArrayEnumerator(array, start, count),
      ),
  );
})();

export const toEnumerableT: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
> = { toEnumerable };

interface ReadonlyArrayToObservable {
  <T>(options?: { count?: number; start?: number }): Function1<
    ReadonlyArrayLike<T>,
    EnumerableObservableLike<T>
  >;
  <T>(options: {
    delay: number;
    delayStart?: boolean;
    count?: number;
    start?: number;
  }): Function1<ReadonlyArrayLike<T>, RunnableObservableLike<T>>;
}
export const toObservable: ReadonlyArrayToObservable = /*@__PURE__*/ (() => {
  const createArrayObservable = <T>(
    createObservable: (f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>,
    options?: {
      readonly delay?: number;
      readonly delayStart?: boolean;
    },
  ) =>
    createFromArray<ObservableLike<T>, T>(
      (values: readonly T[], startIndex: number, count: number) => {
        const { delayStart = false } = options ?? {};

        const onSink = (observer: ObserverLike<T>) => {
          let index = startIndex,
            cnt = count;

          const continuation = () => {
            while (!isDisposed(observer) && cnt !== 0) {
              const value = values[index];
              if (cnt > 0) {
                index++;
                cnt--;
              } else {
                index--;
                cnt++;
              }

              observer[SinkLike_notify](value);

              if (cnt !== 0) {
                __yield(options);
              }
            }
            pipe(observer, dispose());
          };

          pipe(
            observer,
            getScheduler,
            schedule(
              continuation,
              delayStart && hasDelay(options) ? options : none,
            ),
            addTo(observer),
          );
        };
        return createObservable(onSink);
      },
    );

  return <T>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }) => {
    const delay = getDelay(options);
    const createObservableWithType = (f: SideEffect1<ObserverLike<T>>) =>
      delay > 0 ? createRunnableObservable(f) : createEnumerableObservable(f);

    return createArrayObservable(createObservableWithType, options)(options);
  };
})() as ReadonlyArrayToObservable;

export const toObservableT: ToObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
> = { toObservable };

export const toReadonlyArray: ToReadonlyArray<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toReadonlyArray"] = () => identity;

export const toReadonlyArrayT: ToReadonlyArray<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
> = {
  toReadonlyArray,
};

export const toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"] =
  /*@__PURE__*/ (<T>() => {
    return createFromArray<RunnableLike<T>, T>(
      (values: readonly T[], startIndex: number, count: number) =>
        createRunnable<T>(sink => {
          for (
            let index = startIndex, cnt = count;
            !isDisposed(sink) && cnt !== 0;
            cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++
          ) {
            sink[SinkLike_notify](values[index]);
          }
        }),
    );
  })();

export const toRunnableT: ToRunnable<ReadonlyArrayLike> = { toRunnable };

export const toSequence: ToSequence<ReadonlyArrayLike>["toSequence"] =
  /*@__PURE__*/ (<T>() => {
    const _arraySequence = (
      arr: readonly T[],
      index: number,
      count: number,
    ): Option<{
      readonly data: T;
      readonly next: SequenceLike<T>;
    }> =>
      count !== 0 && index >= 0
        ? {
            data: arr[index],
            next: () =>
              _arraySequence(
                arr,
                count > 0 ? index + 1 : index - 1,
                count > 0 ? count - 1 : count + 1,
              ),
          }
        : none;

    return createFromArray<SequenceLike<T>, T>(
      (values: readonly T[], startIndex: number, count: number) => () =>
        _arraySequence(values, startIndex, count),
    );
  })();

export const toSequenceT: ToSequence<ReadonlyArrayLike> = {
  toSequence,
};
