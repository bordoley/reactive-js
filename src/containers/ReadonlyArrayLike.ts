import {
  MutableEnumeratorLike,
  properties as enumeratorProperties,
  prototype as enumeratorPrototype,
} from "../__internal__/ix/Enumerator";
import {
  properties as disposableProperties,
  prototype as disposablePrototype,
} from "../__internal__/util/Disposable";
import {
  Object_init,
  createObjectFactory,
  init,
} from "../__internal__/util/Object";
import {
  ContainerLike,
  ContainerOf,
  Empty,
  Keep,
  Map,
  ReadonlyArrayLike,
  SequenceLike,
  ToReadonlyArray,
  ToSequence,
} from "../containers";
import {
  Function1,
  Predicate,
  SideEffect1,
  getLength,
  identity,
  max,
  min,
  newInstance,
  pipe,
} from "../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  InteractiveContainerLike_interact,
  InteractiveSourceLike_move,
  ToEnumerable,
} from "../ix";
import { Option } from "../util";
import { dispose, isDisposed } from "../util/DisposableLike";
import { isSome, none } from "../util/Option";

export const empty = /*@__PURE__*/ (() => {
  const _empty: readonly any[] = [];
  return <T>(): readonly T[] => _empty;
})();

export const emptyT: Empty<ReadonlyArrayLike> = { empty };

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

export const forEach =
  <T>(f: SideEffect1<T>): Function1<readonly T[], readonly T[]> =>
  arr => {
    arr.forEach(f);
    return arr;
  };

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
        const start = min(maxStart, valuesLength - 1);
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
    ...disposableProperties,
    ...enumeratorProperties,
    array: [] as readonly unknown[],
    count: 0,
    index: 0,
  };

  const prototype = {
    ...disposablePrototype,
    ...enumeratorPrototype,
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
    [InteractiveSourceLike_move](
      this: typeof properties & MutableEnumeratorLike,
    ) {
      const { array } = this;

      if (!isDisposed(this)) {
        this.index++;
        const { index, count } = this;

        if (count !== 0) {
          this[EnumeratorLike_current] = array[index];

          this.count = count > 0 ? this.count-- : this.count++;
        } else {
          pipe(this, dispose());
        }
      }
    },
  };

  const createInstance = createObjectFactory<
    typeof prototype,
    typeof properties,
    readonly unknown[],
    number,
    number
  >(prototype, properties);

  class ReadonlyArrayEnumerable<T> implements EnumerableLike<T> {
    constructor(
      private readonly array: readonly T[],
      private readonly start: number,
      private readonly count: number,
    ) {}

    [InteractiveContainerLike_interact](): EnumeratorLike<T> {
      return createInstance(
        this.array,
        this.start,
        this.count,
      ) as EnumeratorLike<T>;
    }
  }

  return createFromArray<EnumerableLike>(
    <T>(a: readonly T[], start: number, count: number) =>
      newInstance(ReadonlyArrayEnumerable, a, start, count),
  );
})();

export const toEnumerableT: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
> = { toEnumerable };

export const toReadonlyArray: ToReadonlyArray<ReadonlyArrayLike>["toReadonlyArray"] =
  () => identity;

export const toReadonlyArrayT: ToReadonlyArray<ReadonlyArrayLike> = {
  toReadonlyArray,
};

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
