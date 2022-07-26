import { prototype as disposablePrototype } from "../__internal__/util/Disposable";
import {
  MutableEnumeratorLike,
  prototype as enumeratorPrototype,
} from "../__internal__/util/Enumerator";
import {
  Object_init,
  Object_properties,
  createObjectFactory,
  init,
  mixWith,
} from "../__internal__/util/Object";
import {
  ContainerLike,
  ContainerOf,
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
  getLength,
  identity,
  isSome,
  max,
  min,
  none,
  pipe,
} from "../functions";
import { EnumerableLike, ToEnumerable, createEnumerable } from "../ix";
import { RunnableLike, ToRunnable, createRunnable } from "../rx";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  SinkLike_notify,
  SourceLike_move,
} from "../util";
import { dispose, isDisposed } from "../util/DisposableLike";

export const every =
  <T>(predicate: Predicate<T>): Function1<readonly T[], boolean> =>
  arr =>
    arr.every(predicate);

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

export type FromArrayOptions = {
  readonly start: number;
  readonly count: number;
};

const createFromArray =
  <C extends ContainerLike, O extends FromArrayOptions = FromArrayOptions>(
    factory: <T>(
      values: readonly T[],
      start: number,
      count: number,
      options?: Partial<O>,
    ) => ContainerOf<C, T>,
  ) =>
  <T>(options: Partial<O> = {}): Function1<readonly T[], ContainerOf<C, T>> =>
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

    return factory(values, start, count, options);
  };

export const toEnumerable: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toEnumerable"] = /*@__PURE__*/ (() => {
  const properties = {
    ...disposablePrototype[Object_properties],
    ...enumeratorPrototype[Object_properties],
    array: [] as readonly unknown[],
    count: 0,
    index: 0,
  };

  const createInstance = pipe(
    {
      [Object_properties]: properties,
      [Object_init](
        this: typeof properties,
        array: readonly unknown[],
        start: number,
        count: number,
      ) {
        init(disposablePrototype, this);
        init(enumeratorPrototype, this);

        this.array = array;
        this.index = start - 1;
        this.count = count;
      },
      [SourceLike_move](this: typeof properties & MutableEnumeratorLike) {
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
    mixWith(disposablePrototype, enumeratorPrototype),
    createObjectFactory<
      EnumeratorLike<any>,
      typeof properties,
      readonly unknown[],
      number,
      number
    >(),
  );

  return createFromArray<EnumerableLike>(
    <T>(array: readonly T[], start: number, count: number) =>
      createEnumerable(() => createInstance(array, start, count)),
  );
})();

export const toEnumerableT: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
> = { toEnumerable };

/*
export const toEnumerableObservable: ToEnumerableObservable<ReadonlyArrayLike> = 
 createFromArray(
      (values, start, count) => {
        createObservable(observer => {

        const callback = () => sideEffect(observer);
        pipe(
          observer,
          getScheduler,
          schedule(callback, options),
          addTo(observer),
        );
      }, 2
    );

    const fromArray =createFromArray<
      ObservableLike<unknown>,
      {
        readonly delay: number;
        readonly startIndex: number;
        readonly endIndex: number;
        readonly delayStart: boolean;
      }
    >(
      <T>(
        values: readonly T[],
        startIndex: number,
        endIndex: number,
        options?: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        },
      ) => {
        const count = endIndex - startIndex;
        const isEnumerableTag = !hasDelay(options);
        const { delayStart = true } = options ?? {};
        return count === 0 && isEnumerableTag
          ? empty
          : pipe(
              defer(
                () => {
                  let index = startIndex;
                  return (observer: ObserverLike<T>) => {
                    while (index < endIndex && !isDisposed(observer)) {
                      const value = values[index];
                      index++;

                      observer.notify(value);

                      if (index < endIndex) {
                        __yield(options);
                      }
                    }
                    pipe(observer, dispose());
                  };
                },
                delayStart ? options : none,
              ),
              tagObservableType(hasDelay(options) ? 1 : 2),
            );
      },
    );

    
  })();

  export const fromArrayT: FromArray<
      ObservableLike<unknown>,
      {
        readonly delay: number;
        readonly delayStart: boolean;
        readonly startIndex: number;
        readonly endIndex: number;
      }
    > = {
      fromArray,
    };*/

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
  /*@__PURE__*/ (() => {
    return createFromArray<RunnableLike>(
      <T>(values: readonly T[], startIndex: number, count: number) =>
        createRunnable<T>(sink => {
          for (
            let index = startIndex;
            !isDisposed(sink) && count !== 0;
            count > 0 ? index++ : index--, count > 0 ? count-- : count++
          ) {
            sink[SinkLike_notify](values[index]);
          }
        }),
    );
  })();

export const toRunnableT: ToRunnable<ReadonlyArrayLike> = { toRunnable };

export const toSequence: ToSequence<ReadonlyArrayLike>["toSequence"] =
  /*@__PURE__*/ (() => {
    const _arraySequence = <T>(
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

    return createFromArray<SequenceLike>(
      <T>(values: readonly T[], startIndex: number, count: number) =>
        () =>
          _arraySequence(values, startIndex, count),
    );
  })();

export const toSequenceT: ToSequence<ReadonlyArrayLike> = {
  toSequence,
};
