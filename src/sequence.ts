import {
  Factory,
  Updater,
  Function1,
  compose,
  pipe,
  Equality,
  strictEquality,
  Predicate,
  Reducer,
  alwaysTrue,
} from "./functions";
import { isNone } from "./option";
import { createRunnable, RunnableLike } from "./runnable";

export const enum SequenceType {
  Notify = 1,
  Done = 2,
}

export type SequenceResult<T> =
  | {
      readonly type: SequenceType.Notify;
      readonly data: T;
      readonly next: Sequence<T>;
    }
  | { readonly type: SequenceType.Done };

export type Sequence<T> = Factory<SequenceResult<T>>;
export type SequenceOperator<TA, TB> = Function1<Sequence<TA>, Sequence<TB>>;

export const isDone = <T>(
  result: SequenceResult<T>,
): result is { readonly type: SequenceType.Done } =>
  result.type === SequenceType.Done;

export const isNotify = <T>(
  result: SequenceResult<T>,
): result is {
  readonly type: SequenceType.Notify;
  readonly data: T;
  readonly next: Sequence<T>;
} => result.type === SequenceType.Notify;

export const notify = <T>(data: T, next: Sequence<T>): SequenceResult<T> => ({
  type: SequenceType.Notify,
  data,
  next,
});

const _done: SequenceResult<any> = { type: SequenceType.Done };
export const done = <T>(): SequenceResult<T> => _done;

export const empty = <T>(): Sequence<T> => done as Sequence<T>;

export const concatAll = <T>(): SequenceOperator<Sequence<T>, T> => seq => {
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

  return () => flattenIter(seq());
};

const _fromArray = <T>(arr: readonly T[], index: number, endIndex: number): SequenceResult<T> =>
  index < endIndex && index >= 0
    ? notify(arr[index], () => _fromArray(arr, index + 1, endIndex))
    : done();

export const fromArray = <T>(
  options: {
    startIndex?: number;
    endIndex?: number
  } = {},
): Function1<readonly T[], Sequence<T>> => values => {
  const valuesLength = values.length;
  const startIndex = Math.min(options.startIndex ?? 0, valuesLength);
  const endIndex = Math.max(Math.min(options.endIndex ?? valuesLength, valuesLength), 0);

  return () => _fromArray(values, startIndex, endIndex);
};

export function concat<T>(
  fst: Sequence<T>,
  snd: Sequence<T>,
  ...tail: readonly Sequence<T>[]
): Sequence<T>;

export function concat<T>(...sequences: readonly Sequence<T>[]): Sequence<T> {
  return pipe(sequences, fromArray(), concatAll());
}

export const concatWith = <T>(
  snd: Sequence<T>,
): SequenceOperator<T, T> => first => concat(first, snd);

const _distinctUntilChanged = <T>(
  equality: Equality<T>,
  prevValue: T,
  next: Sequence<T>,
): Sequence<T> => () => {
  let retval = next();
  while (true) {
    if (isDone(retval)) {
      return retval;
    } else if (!equality(prevValue, retval.data)) {
      return notify(
        retval.data,
        _distinctUntilChanged(equality, retval.data, retval.next),
      );
    }

    retval = retval.next();
  }
};

export const distinctUntilChanged = <T>(
  equality: Equality<T> = strictEquality,
): SequenceOperator<T, T> => seq => () => {
  const result = seq();
  return isNotify(result)
    ? notify(
        result.data,
        _distinctUntilChanged(equality, result.data, result.next),
      )
    : done();
};

export function endWith<T>(
  value: T,
  ...values: readonly T[]
): SequenceOperator<T, T>;
export function endWith<T>(...values: readonly T[]): SequenceOperator<T, T> {
  return pipe(values, fromArray(), concatWith);
}

const _keep = <T>(
  predicate: Predicate<T>,
  seq: Sequence<T>,
): Sequence<T> => () => {
  let result = seq();
  while (true) {
    if (isDone(result)) {
      return result;
    } else if (predicate(result.data)) {
      return notify(result.data, _keep(predicate, result.next));
    }
    result = result.next();
  }
};
export const keep = <T>(
  predicate: Predicate<T>,
): SequenceOperator<T, T> => seq => _keep(predicate, seq);

const _map = <TA, TB>(
  mapper: Function1<TA, TB>,
  seq: Sequence<TA>,
): Sequence<TB> => () => {
  const result = seq();

  return isNotify(result)
    ? notify(mapper(result.data), _map(mapper, result.next))
    : done();
};
export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): SequenceOperator<TA, TB> => seq => _map(mapper, seq);

export const mapTo = <TA, TB>(v: TB): SequenceOperator<TA, TB> => seq =>
  _map(_ => v, seq);

export const concatMap = <TA, TB>(
  mapper: Function1<TA, Sequence<TB>>,
): SequenceOperator<TA, TB> => compose(map(mapper), concatAll());

export function startWith<T>(
  value: T,
  ...values: readonly T[]
): SequenceOperator<T, T>;
export function startWith<T>(...values: readonly T[]): SequenceOperator<T, T> {
  return seq => concat(fromArray<T>()(values), seq);
}

export const fromValue = <T>(): Function1<T, Sequence<T>> => v => () =>
  _fromArray([v], 0, 1);

const _generate = <T>(generator: Updater<T>, acc: T): Sequence<T> => () =>
  notify(acc, _generate(generator, generator(acc)));

export const generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
): Sequence<T> => () => {
  const acc = generator(initialValue());
  return _generate(generator, acc)();
};

export const seek = <T>(count: number): SequenceOperator<T, T> => seq => {
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

const _takeFirst = <T>(count: number, seq: Sequence<T>): Sequence<T> => () => {
  if (count > 0) {
    const result = seq();
    return isDone(result)
      ? done()
      : notify(result.data, _takeFirst(count - 1, result.next));
  } else {
    return done();
  }
};

export const takeFirst = <T>(count: number): SequenceOperator<T, T> => seq =>
  _takeFirst(count, seq);

const _repeat = <T>(
  predicate: Predicate<number>,
  count: number,
  src: Sequence<T>,
  seq: Sequence<T>,
): Sequence<T> => () => {
  const result = seq();
  if (isNotify(result)) {
    return notify(result.data, _repeat(predicate, count, src, result.next));
  } else if (predicate(count)) {
    return _repeat(predicate, count + 1, src, src)();
  } else {
    return done();
  }
};

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

const _scan = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  acc: TAcc,
  seq: Sequence<T>,
): Sequence<TAcc> => () => {
  const result = seq();
  if (isNotify(result)) {
    const nextAcc = reducer(acc, result.data);
    return notify(nextAcc, _scan(reducer, nextAcc, result.next));
  } else {
    return done();
  }
};

export const scan = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): SequenceOperator<T, TAcc> => seq => () =>
  _scan(reducer, initialValue(), seq)();

export const skipFirst = <T>(
  count: number,
): SequenceOperator<T, T> => seq => () => seek<T>(count)(seq)();

const _takeLast = <T>(
  maxCount: number,
  seq: Sequence<T>,
): Sequence<T> => () => {
  const last: T[] = [];
  let result = seq();
  while (true) {
    if (isDone(result)) {
      break;
    }
    last.push(result.data);
    if (last.length > maxCount) {
      last.shift();
    }
    result = result.next();
  }
  return _fromArray(last, 0, last.length);
};
export const takeLast = <T>(count: number): SequenceOperator<T, T> => seq =>
  _takeLast(count, seq);

const _takeWhile = <T>(
  predicate: Predicate<T>,
  inclusive: boolean,
  seq: Sequence<T>,
): Sequence<T> => () => {
  const result = seq();

  return isNotify(result) && predicate(result.data)
    ? notify(result.data, _takeWhile(predicate, inclusive, result.next))
    : isNotify(result) && inclusive
    ? notify<T>(result.data, done)
    : done();
};

export const takeWhile = <T>(
  predicate: Predicate<T>,
  { inclusive } = { inclusive: false },
): SequenceOperator<T, T> => seq => _takeWhile(predicate, inclusive, seq);

export const toRunnable = <T>(): Function1<
  Sequence<T>,
  RunnableLike<T>
> => seq =>
  createRunnable(sink => {
    let result = seq();
    while (isNotify(result)) {
      sink.notify(result.data);
      result = result.next();
    }
    sink.done();
  });
