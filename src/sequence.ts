import {
  Concat,
  ConcatAll,
  ContainerLike,
  DistinctUntilChanged,
  FromArray,
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
} from "./container";
import {
  AbstractEnumerator,
  EnumerableLike,
  ToEnumerable,
  createEnumerable,
} from "./enumerable";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  Updater,
  alwaysTrue,
  callWith,
  pipe,
  strictEquality,
} from "./functions";
import { Option, isNone, none } from "./option";
import { keepType as keepTypeArray, map as mapArray } from "./readonlyArray";
import { RunnableLike, ToRunnable, createRunnable } from "./runnable";

export interface SequenceResultNotify<T> {
  readonly data: T;
  readonly next: Sequence<T>;
}

export const sequenceResultDone = Symbol("SequenceResultDone");

export type SequenceResult<T> =
  | SequenceResultNotify<T>
  | typeof sequenceResultDone;

export interface SequenceLike extends ContainerLike {
  readonly T: unknown;
  readonly type: Sequence<this["T"]>;
}

export type Sequence<T> = Factory<SequenceResult<T>> & SequenceLike;
export type SequenceOperator<TA, TB> = Function1<Sequence<TA>, Sequence<TB>>;

export const type: Sequence<unknown> = undefined as any;

const isNotify = <T>(
  result: SequenceResult<T>,
): result is SequenceResultNotify<T> => result != sequenceResultDone;

const notify = <T>(
  data: T,
  next: Factory<SequenceResult<T>>,
): SequenceResult<T> => ({
  data,
  next: castToSequence(next),
});

const done = <T>(): SequenceResult<T> => sequenceResultDone;

const castToSequence = <T>(f: Factory<SequenceResult<T>>): Sequence<T> =>
  f as Sequence<T>;

export const concatAll =
  <T>(): SequenceOperator<Sequence<T>, T> =>
  seq => {
    const continueWith = (
      result: SequenceResult<T>,
      continuation: Sequence<Sequence<T>>,
    ): SequenceResult<T> => {
      if (isNotify(result)) {
        return notify(result.data, () =>
          continueWith(result.next(), continuation),
        );
      } else {
        return flattenIter(continuation());
      }
    };

    const flattenIter = (
      result: SequenceResult<Sequence<T>>,
    ): SequenceResult<T> => {
      if (isNotify(result)) {
        return continueWith(result.data(), result.next);
      } else {
        return done();
      }
    };

    return castToSequence(() => flattenIter(seq()));
  };

export const concatAllT: ConcatAll<Sequence<unknown>> = {
  concatAll,
};

const _fromArray = <T>(
  arr: readonly T[],
  index: number,
  endIndex: number,
): SequenceResult<T> =>
  index < endIndex && index >= 0
    ? notify(arr[index], () => _fromArray(arr, index + 1, endIndex))
    : done();

export const fromArray =
  <T>(
    options: {
      readonly startIndex?: number;
      readonly endIndex?: number;
    } = {},
  ): Function1<readonly T[], Sequence<T>> =>
  values => {
    const valuesLength = values.length;
    const startIndex = Math.min(options.startIndex ?? 0, valuesLength);
    const endIndex = Math.max(
      Math.min(options.endIndex ?? valuesLength, valuesLength),
      0,
    );

    return castToSequence(() => _fromArray(values, startIndex, endIndex));
  };

export const fromArrayT: FromArray<Sequence<unknown>> = {
  fromArray,
};

export function concat<T>(
  fst: Sequence<T>,
  snd: Sequence<T>,
  ...tail: readonly Sequence<T>[]
): Sequence<T>;

export function concat<T>(...sequences: readonly Sequence<T>[]): Sequence<T> {
  return pipe(sequences, fromArray(), concatAll());
}

export const concatT: Concat<Sequence<unknown>> = {
  concat,
};

const _distinctUntilChanged = <T>(
  equality: Equality<T>,
  prevValue: T,
  next: Sequence<T>,
): Sequence<T> =>
  castToSequence(() => {
    let retval = next();
    while (true) {
      if (isNotify(retval)) {
        if (!equality(prevValue, retval.data)) {
          return notify(
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
  });

export const distinctUntilChanged =
  <T>(
    options: { readonly equality?: Equality<T> } = {},
  ): SequenceOperator<T, T> =>
  seq =>
    castToSequence(() => {
      const { equality = strictEquality } = options;
      const result = seq();
      return isNotify(result)
        ? notify(
            result.data,
            _distinctUntilChanged(equality, result.data, result.next),
          )
        : done();
    });

export const distinctUntilChangedT: DistinctUntilChanged<Sequence<unknown>> = {
  distinctUntilChanged,
};

const _keep = <T>(predicate: Predicate<T>, seq: Sequence<T>): Sequence<T> =>
  castToSequence(() => {
    let result = seq();
    while (true) {
      if (isNotify(result)) {
        if (predicate(result.data)) {
          return notify(result.data, _keep(predicate, result.next));
        } else {
          result = result.next();
        }
      } else {
        return result;
      }
    }
  });

export const keep =
  <T>(predicate: Predicate<T>): SequenceOperator<T, T> =>
  seq =>
    _keep(predicate, seq);

export const keepT: Keep<Sequence<unknown>> = {
  keep,
};

const _map = <TA, TB>(
  mapper: Function1<TA, TB>,
  seq: Sequence<TA>,
): Sequence<TB> =>
  castToSequence(() => {
    const result = seq();

    return isNotify(result)
      ? notify(mapper(result.data), _map(mapper, result.next))
      : done();
  });
export const map =
  <TA, TB>(mapper: Function1<TA, TB>): SequenceOperator<TA, TB> =>
  seq =>
    _map(mapper, seq);

export const mapT: Map<Sequence<unknown>> = {
  map,
};

const _generate = <T>(generator: Updater<T>, acc: T): Sequence<T> =>
  castToSequence(() => notify(acc, _generate(generator, generator(acc))));

export const generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
): Sequence<T> =>
  castToSequence(() => {
    const acc = generator(initialValue());
    return _generate(generator, acc)();
  });

export const generateT: Generate<Sequence<unknown>> = {
  generate,
};

const _pairwise = <T>(
  prev: Option<T>,
  seq: Sequence<T>,
): Sequence<readonly [Option<T>, T]> =>
  castToSequence(() => {
    const result = seq();
    if (isNotify(result)) {
      const { data, next } = result;
      const v: [Option<T>, T] = [prev, data];
      return notify(v, _pairwise(data, next));
    } else {
      return done();
    }
  });

export const pairwise =
  <T>(): SequenceOperator<T, readonly [Option<T>, T]> =>
  seq =>
    castToSequence(() => _pairwise(none, seq)());

export const pairwiseT: Pairwise<Sequence<unknown>> = {
  pairwise,
};

export const seek =
  <T>(count: number): SequenceOperator<T, T> =>
  seq => {
    if (count <= 0) {
      return seq;
    } else {
      let retval = seq;

      for (let i = 0; i < count; i++) {
        const result = retval();

        if (isNotify(result)) {
          retval = result.next;
        }
      }
      return retval;
    }
  };

const _takeFirst = <T>(count: number, seq: Sequence<T>): Sequence<T> =>
  castToSequence(() => {
    if (count > 0) {
      const result = seq();
      return isNotify(result)
        ? notify(result.data, _takeFirst(count - 1, result.next))
        : done();
    } else {
      return done();
    }
  });

export const takeFirst =
  <T>(options: { readonly count?: number } = {}): SequenceOperator<T, T> =>
  seq => {
    const { count = 1 } = options;
    return _takeFirst(count, seq);
  };

export const takeFirstT: TakeFirst<Sequence<unknown>> = {
  takeFirst,
};

const _repeat = <T>(
  predicate: Predicate<number>,
  count: number,
  src: Sequence<T>,
  seq: Sequence<T>,
): Sequence<T> =>
  castToSequence(() => {
    const result = seq();
    if (isNotify(result)) {
      return notify(result.data, _repeat(predicate, count, src, result.next));
    } else if (predicate(count)) {
      return _repeat(predicate, count + 1, src, src)();
    } else {
      return done();
    }
  });

export function repeat<T>(predicate: Predicate<number>): SequenceOperator<T, T>;
export function repeat<T>(count: number): SequenceOperator<T, T>;
export function repeat<T>(): SequenceOperator<T, T>;
export function repeat<T>(
  predicate?: Predicate<number> | number,
): SequenceOperator<T, T> {
  const repeatPredicate = isNone(predicate)
    ? alwaysTrue
    : typeof predicate === "number"
    ? (count: number) => count < predicate
    : (count: number) => predicate(count);

  return seq => _repeat(repeatPredicate, 1, seq, seq);
}

export const repeatT: Repeat<Sequence<unknown>> = {
  repeat,
};

const _scan = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  acc: TAcc,
  seq: Sequence<T>,
): Sequence<TAcc> =>
  castToSequence(() => {
    const result = seq();
    if (isNotify(result)) {
      const nextAcc = reducer(acc, result.data);
      return notify(nextAcc, _scan(reducer, nextAcc, result.next));
    } else {
      return done();
    }
  });

export const scan =
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): SequenceOperator<T, TAcc> =>
  seq =>
    castToSequence(() => _scan(reducer, initialValue(), seq)());

export const scanT: Scan<Sequence<unknown>> = {
  scan,
};

export const skipFirst =
  <T>(options: { readonly count?: number } = {}): SequenceOperator<T, T> =>
  seq =>
    castToSequence(() => {
      const { count = 1 } = options;
      return seek<T>(count)(seq)();
    });

export const skipFirstT: SkipFirst<Sequence<unknown>> = {
  skipFirst,
};

const _takeLast = <T>(maxCount: number, seq: Sequence<T>): Sequence<T> =>
  castToSequence(() => {
    const last: T[] = [];
    let result = seq();
    while (true) {
      if (isNotify(result)) {
        last.push(result.data);
        if (last.length > maxCount) {
          last.shift();
        }
        result = result.next();
      } else {
        break;
      }
    }
    return _fromArray(last, 0, last.length);
  });
export const takeLast =
  <T>(options: { readonly count?: number } = {}): SequenceOperator<T, T> =>
  seq => {
    const { count = 1 } = options;
    return _takeLast(count, seq);
  };

export const takeLastT: TakeLast<Sequence<unknown>> = {
  takeLast,
};

const _takeWhile = <T>(
  predicate: Predicate<T>,
  inclusive: boolean,
  seq: Sequence<T>,
): Sequence<T> =>
  castToSequence(() => {
    const result = seq();

    return isNotify(result) && predicate(result.data)
      ? notify(result.data, _takeWhile(predicate, inclusive, result.next))
      : isNotify(result) && inclusive
      ? notify<T>(result.data, done)
      : done();
  });

export const takeWhile =
  <T>(
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ): SequenceOperator<T, T> =>
  seq => {
    const { inclusive = false } = options;
    return _takeWhile(predicate, inclusive, seq);
  };

export const takeWhileT: TakeWhile<Sequence<unknown>> = {
  takeWhile,
};

export const toRunnable =
  <T>(): Function1<Sequence<T>, RunnableLike<T>> =>
  seq =>
    createRunnable(sink => {
      let result = seq();
      while (isNotify(result)) {
        sink.notify(result.data);
        result = result.next();
      }
    });

export const toRunnableT: ToRunnable<Sequence<unknown>> = {
  toRunnable,
};

const _zip = <T>(
  ...sequences: readonly Sequence<T>[]
): Sequence<readonly any[]> =>
  castToSequence(() => {
    const notifyResults = pipe(
      sequences,
      mapArray(callWith()),
      keepTypeArray(isNotify),
    );

    return notifyResults.length === sequences.length
      ? notify(
          pipe(
            notifyResults,
            mapArray(x => x.data),
          ),
          _zip(
            ...pipe(
              notifyResults,
              mapArray(x => x.next),
            ),
          ),
        )
      : done();
  });

export const zip: Zip<Sequence<unknown>>["zip"] = _zip as any;

export const zipT: Zip<Sequence<unknown>> = {
  zip,
};

class SequenceEnumerator<T> extends AbstractEnumerator<T> {
  constructor(private seq: Sequence<T>) {
    super();
  }

  move(): boolean {
    if (!this.isDisposed) {
      const next = this.seq();
      if (isNotify(next)) {
        this.current = next.data;
        this.seq = next.next;
      } else {
        this.dispose();
      }
    }
    return this.hasCurrent;
  }
}

export const toEnumerable =
  <T>() =>
  (seq: Sequence<T>): EnumerableLike<T> =>
    createEnumerable(() => new SequenceEnumerator(seq));

export const toEnumerableT: ToEnumerable<Sequence<unknown>> = {
  toEnumerable,
};
