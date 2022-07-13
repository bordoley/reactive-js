import { Option, isNone, isSome, none } from "../util/Option";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  Updater,
  alwaysTrue,
  callWith,
  getLength,
  pipe,
  returns,
  strictEquality,
} from "../util/functions";
import {
  ConcatAll,
  ContainerLike,
  ContainerOperator,
  DistinctUntilChanged,
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
  Zip,
  keepType,
} from "./ContainerLike";
import { keepT as keepTArray, map as mapArray } from "./ReadonlyArrayLike";

export type SequenceResult<T> = {
  readonly data: T;
  readonly next: SequenceLike<T>;
};

export interface SequenceLike<T = unknown> extends ContainerLike<T> {
  readonly TContainerOf?: SequenceLike<this["T"]>;

  (): Option<SequenceResult<T>>;
}

const createNext = <T>(data: T, next: SequenceLike<T>): SequenceResult<T> => ({
  data,
  next,
});

export const concatAll: ConcatAll<SequenceLike>["concatAll"] =
  <T>() =>
  (seq: SequenceLike<SequenceLike<T>>) => {
    const continueWith = (
      result: Option<SequenceResult<T>>,
      continuation: SequenceLike<SequenceLike<T>>,
    ): Option<SequenceResult<T>> => {
      if (isSome(result)) {
        return createNext(result.data, () =>
          continueWith(result.next(), continuation),
        );
      } else {
        return flattenIter(continuation());
      }
    };

    const flattenIter = (
      result: Option<SequenceResult<SequenceLike<T>>>,
    ): Option<SequenceResult<T>> => {
      if (isSome(result)) {
        return continueWith(result.data(), result.next);
      } else {
        return none;
      }
    };

    return () => flattenIter(seq());
  };

export const concatAllT: ConcatAll<SequenceLike> = {
  concatAll,
};

const _fromArray = <T>(
  arr: readonly T[],
  index: number,
  endIndex: number,
): Option<SequenceResult<T>> =>
  index < endIndex && index >= 0
    ? createNext(arr[index], () => _fromArray(arr, index + 1, endIndex))
    : none;

//export const fromArray = /*@__PURE__*/ createFromArray<SequenceLike>(
/*<T>(values: readonly T[], startIndex: number, endIndex: number) =>
    (() => _fromArray(values, startIndex, endIndex)),
);

export const fromArrayT: FromArray<SequenceLike> = {
  fromArray,
};

export function concat<T>(
  fst: SequenceLike<T>,
  snd: SequenceLike<T>,
  ...tail: readonly SequenceLike<T>[]
): SequenceLike<T>;

export function concat<T>(...sequences: readonly SequenceLike<T>[]): SequenceLike<T> {
  return pipe(sequences, fromArray(), concatAll());
}

export const concatT: Concat<SequenceLike> = {
  concat,
};*/

const _distinctUntilChanged =
  <T>(
    equality: Equality<T>,
    prevValue: T,
    next: SequenceLike<T>,
  ): SequenceLike<T> =>
  () => {
    let retval = next();
    while (true) {
      if (isSome(retval)) {
        if (!equality(prevValue, retval.data)) {
          return createNext(
            retval.data,
            _distinctUntilChanged(equality, retval.data, retval.next),
          );
        } else {
          retval = retval.next();
        }
      } else {
        return retval;
      }
    }
  };

export const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"] =

    <T>(options: { readonly equality?: Equality<T> } = {}) =>
    (seq: SequenceLike<T>) =>
    () => {
      const { equality = strictEquality } = options;
      const result = seq();
      return isSome(result)
        ? createNext(
            result.data,
            _distinctUntilChanged(equality, result.data, result.next),
          )
        : none;
    };

export const distinctUntilChangedT: DistinctUntilChanged<SequenceLike> = {
  distinctUntilChanged,
};

const _keep =
  <T>(predicate: Predicate<T>, seq: SequenceLike<T>): SequenceLike<T> =>
  () => {
    let result = seq();
    while (true) {
      if (isSome(result)) {
        if (predicate(result.data)) {
          return createNext(result.data, _keep(predicate, result.next));
        } else {
          result = result.next();
        }
      } else {
        return result;
      }
    }
  };

export const keep: Keep<SequenceLike>["keep"] =
  <T>(predicate: Predicate<T>) =>
  (seq: SequenceLike<T>) =>
    _keep(predicate, seq);

export const keepT: Keep<SequenceLike> = { keep };

const _map =
  <TA, TB>(
    mapper: Function1<TA, TB>,
    seq: SequenceLike<TA>,
  ): SequenceLike<TB> =>
  () => {
    const result = seq();

    return isSome(result)
      ? createNext(mapper(result.data), _map(mapper, result.next))
      : none;
  };

export const map: Map<SequenceLike>["map"] =
  <TA, TB>(mapper: Function1<TA, TB>) =>
  (seq: SequenceLike<TA>) =>
    _map(mapper, seq);

export const mapT: Map<SequenceLike> = { map };

const _generate =
  <T>(generator: Updater<T>, acc: T): SequenceLike<T> =>
  () =>
    createNext(acc, _generate(generator, generator(acc)));

export const generate: Generate<SequenceLike>["generate"] =
  <T>(generator: Updater<T>, initialValue: Factory<T>) =>
  () => {
    const acc = generator(initialValue());
    return _generate(generator, acc)();
  };

export const generateT: Generate<SequenceLike> = { generate };

const _pairwise =
  <T>(
    prev: Option<T>,
    seq: SequenceLike<T>,
  ): SequenceLike<readonly [Option<T>, T]> =>
  () => {
    const result = seq();
    if (isSome(result)) {
      const { data, next } = result;
      const v: [Option<T>, T] = [prev, data];
      return createNext(v, _pairwise(data, next));
    } else {
      return none;
    }
  };

export const pairwise: Pairwise<SequenceLike>["pairwise"] =
  <T>() =>
  (seq: SequenceLike<T>) =>
    _pairwise(none, seq);

export const pairwiseT: Pairwise<SequenceLike> = { pairwise };

export const seek =
  <T>(count: number): ContainerOperator<SequenceLike, T, T> =>
  (seq: SequenceLike<T>) => {
    if (count <= 0) {
      return seq;
    } else {
      let retval = seq;

      for (let i = 0; i < count; i++) {
        const result = retval();

        if (isSome(result)) {
          retval = result.next;
        }
      }
      return retval;
    }
  };

const _takeFirst =
  <T>(count: number, seq: SequenceLike<T>): SequenceLike<T> =>
  () => {
    if (count > 0) {
      const result = seq();
      return isSome(result)
        ? createNext(result.data, _takeFirst(count - 1, result.next))
        : none;
    } else {
      return none;
    }
  };

export const takeFirst: TakeFirst<SequenceLike>["takeFirst"] =
  <T>(options: { readonly count?: number } = {}) =>
  (seq: SequenceLike<T>) => {
    const { count = 1 } = options;
    return _takeFirst(count, seq);
  };

export const takeFirstT: TakeFirst<SequenceLike> = {
  takeFirst,
};

const _repeat =
  <T>(
    predicate: Predicate<number>,
    count: number,
    src: SequenceLike<T>,
    seq: SequenceLike<T>,
  ): SequenceLike<T> =>
  () => {
    const result = seq();
    if (isSome(result)) {
      return createNext(
        result.data,
        _repeat(predicate, count, src, result.next),
      );
    } else if (predicate(count)) {
      return _repeat(predicate, count + 1, src, src)();
    } else {
      return none;
    }
  };

export const repeat: Repeat<SequenceLike>["repeat"] = <T>(
  predicate?: Predicate<number> | number,
) => {
  const repeatPredicate = isNone(predicate)
    ? alwaysTrue
    : typeof predicate === "number"
    ? (count: number) => count < predicate
    : (count: number) => predicate(count);

  return (seq: SequenceLike<T>) => _repeat(repeatPredicate, 1, seq, seq);
};

export const repeatT: Repeat<SequenceLike> = { repeat };

const _scan =
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    acc: TAcc,
    seq: SequenceLike<T>,
  ): SequenceLike<TAcc> =>
  () => {
    const result = seq();
    if (isSome(result)) {
      const nextAcc = reducer(acc, result.data);
      return createNext(nextAcc, _scan(reducer, nextAcc, result.next));
    } else {
      return none;
    }
  };

export const scan: Scan<SequenceLike>["scan"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (seq: SequenceLike<T>) =>
  () =>
    _scan(reducer, initialValue(), seq)();

export const scanT: Scan<SequenceLike> = { scan };

export const skipFirst: SkipFirst<SequenceLike>["skipFirst"] =
  <T>(options: { readonly count?: number } = {}) =>
  (seq: SequenceLike<T>) =>
  () => {
    const { count = 1 } = options;
    return seek<T>(count)(seq)();
  };

export const skipFirstT: SkipFirst<SequenceLike> = { skipFirst };

const _takeLast =
  <T>(maxCount: number, seq: SequenceLike<T>): SequenceLike<T> =>
  () => {
    const last: T[] = [];
    let result = seq();
    while (true) {
      if (isSome(result)) {
        last.push(result.data);
        if (getLength(last) > maxCount) {
          last.shift();
        }
        result = result.next();
      } else {
        break;
      }
    }
    return _fromArray(last, 0, getLength(last));
  };

export const takeLast: TakeLast<SequenceLike>["takeLast"] =
  <T>(options: { readonly count?: number } = {}) =>
  (seq: SequenceLike<T>) => {
    const { count = 1 } = options;
    return _takeLast(count, seq);
  };

export const takeLastT: TakeLast<SequenceLike> = { takeLast };

const _takeWhile =
  <T>(
    predicate: Predicate<T>,
    inclusive: boolean,
    seq: SequenceLike<T>,
  ): SequenceLike<T> =>
  () => {
    const result = seq();

    return isSome(result) && predicate(result.data)
      ? createNext(result.data, _takeWhile(predicate, inclusive, result.next))
      : isSome(result) && inclusive
      ? createNext<T>(result.data, returns(none))
      : none;
  };

export const takeWhile: TakeWhile<SequenceLike>["takeWhile"] =
  <T>(
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ) =>
  (seq: SequenceLike<T>) => {
    const { inclusive = false } = options;
    return _takeWhile(predicate, inclusive, seq);
  };

export const takeWhileT: TakeWhile<SequenceLike> = { takeWhile };

/*
export const toRunnable =
  <T>(): Function1<SequenceLike<T>, RunnableLike<T>> =>
  (seq: SequenceLike<T>) =>
    createRunnable(sink => {
      let result = seq();
      while (isSome(result)) {
        sink.notify(result.data);
        result = result.next();
      }
    });

export const toRunnableT: ToRunnable<SequenceLike> = {
  toRunnable,
};*/

const _zip =
  (
    ...sequences: readonly SequenceLike<unknown>[]
  ): SequenceLike<readonly any[]> =>
  () => {
    const nextResults = pipe(
      sequences,
      mapArray(callWith()),
      keepType(keepTArray, isSome),
    );

    return getLength(nextResults) === getLength(sequences)
      ? createNext(
          pipe(
            nextResults,
            mapArray(x => x.data),
          ),
          _zip(
            ...pipe(
              nextResults,
              mapArray(x => x.next),
            ),
          ),
        )
      : none;
  };

export const zip: Zip<SequenceLike>["zip"] = _zip as Zip<SequenceLike>["zip"];

export const zipT: Zip<SequenceLike> = { zip };

/*
class SequenceEnumerator<T> extends AbstractEnumerator<T> {
  constructor(private seq: SequenceLike<T>) {
    super();
  }

  move(): boolean {
    if (!isDisposed(this)) {
      const next = this.seq();
      if (isSome(next)) {
        this.current = next.data;
        this.seq = next.next;
      } else {
        pipe(this, dispose());
      }
    }
    return hasCurrent(this);
  }
}

export const toEnumerable =
  <T>(): Function1<SequenceLike<T>, EnumerableLike<T>> =>
  (seq: SequenceLike<T>) =>
    createEnumerable(
      pipeLazy(
        SequenceEnumerator,
        newInstanceWith<SequenceEnumerator<T>, SequenceLike<T>>(seq),
      ),
    );

export const toEnumerableT: ToEnumerable<SequenceLike> = {
  toEnumerable,
};
*/
