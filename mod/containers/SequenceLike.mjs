/// <reference types="./SequenceLike.d.ts" />
import { isSome, none, isNone } from '../util/Option.mjs';
import { strictEquality, alwaysTrue, getLength, returns, pipe, callWith } from '../util/functions.mjs';
import { keepType } from './ContainerLike.mjs';
import { map as map$1, keepT as keepT$1 } from './ReadonlyArrayLike.mjs';

const createNext = (data, next) => ({
    data,
    next,
});
const concatAll = () => (seq) => {
    const continueWith = (result, continuation) => {
        if (isSome(result)) {
            return createNext(result.data, () => continueWith(result.next(), continuation));
        }
        else {
            return flattenIter(continuation());
        }
    };
    const flattenIter = (result) => {
        if (isSome(result)) {
            return continueWith(result.data(), result.next);
        }
        else {
            return none;
        }
    };
    return () => flattenIter(seq());
};
const concatAllT = {
    concatAll,
};
const _fromArray = (arr, index, endIndex) => index < endIndex && index >= 0
    ? createNext(arr[index], () => _fromArray(arr, index + 1, endIndex))
    : none;

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
const _distinctUntilChanged = (equality, prevValue, next) => () => {
    let retval = next();
    while (true) {
        if (isSome(retval)) {
            if (!equality(prevValue, retval.data)) {
                return createNext(retval.data, _distinctUntilChanged(equality, retval.data, retval.next));
            }
            else {
                retval = retval.next();
            }
        }
        else {
            return retval;
        }
    }
};
const distinctUntilChanged = (options = {}) => (seq) => () => {
    const { equality = strictEquality } = options;
    const result = seq();
    return isSome(result)
        ? createNext(result.data, _distinctUntilChanged(equality, result.data, result.next))
        : none;
};
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const _keep = (predicate, seq) => () => {
    let result = seq();
    while (true) {
        if (isSome(result)) {
            if (predicate(result.data)) {
                return createNext(result.data, _keep(predicate, result.next));
            }
            else {
                result = result.next();
            }
        }
        else {
            return result;
        }
    }
};
const keep = (predicate) => (seq) => _keep(predicate, seq);
const keepT = { keep };
const _map = (mapper, seq) => () => {
    const result = seq();
    return isSome(result)
        ? createNext(mapper(result.data), _map(mapper, result.next))
        : none;
};
const map = (mapper) => (seq) => _map(mapper, seq);
const mapT = { map };
const _generate = (generator, acc) => () => createNext(acc, _generate(generator, generator(acc)));
const generate = (generator, initialValue) => () => {
    const acc = generator(initialValue());
    return _generate(generator, acc)();
};
const generateT = { generate };
const _pairwise = (prev, seq) => () => {
    const result = seq();
    if (isSome(result)) {
        const { data, next } = result;
        const v = [prev, data];
        return createNext(v, _pairwise(data, next));
    }
    else {
        return none;
    }
};
const pairwise = () => (seq) => _pairwise(none, seq);
const pairwiseT = { pairwise };
const seek = (count) => (seq) => {
    if (count <= 0) {
        return seq;
    }
    else {
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
const _takeFirst = (count, seq) => () => {
    if (count > 0) {
        const result = seq();
        return isSome(result)
            ? createNext(result.data, _takeFirst(count - 1, result.next))
            : none;
    }
    else {
        return none;
    }
};
const takeFirst = (options = {}) => (seq) => {
    const { count = 1 } = options;
    return _takeFirst(count, seq);
};
const takeFirstT = {
    takeFirst,
};
const _repeat = (predicate, count, src, seq) => () => {
    const result = seq();
    if (isSome(result)) {
        return createNext(result.data, _repeat(predicate, count, src, result.next));
    }
    else if (predicate(count)) {
        return _repeat(predicate, count + 1, src, src)();
    }
    else {
        return none;
    }
};
const repeat = (predicate) => {
    const repeatPredicate = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return (seq) => _repeat(repeatPredicate, 1, seq, seq);
};
const repeatT = { repeat };
const _scan = (reducer, acc, seq) => () => {
    const result = seq();
    if (isSome(result)) {
        const nextAcc = reducer(acc, result.data);
        return createNext(nextAcc, _scan(reducer, nextAcc, result.next));
    }
    else {
        return none;
    }
};
const scan = (reducer, initialValue) => (seq) => () => _scan(reducer, initialValue(), seq)();
const scanT = { scan };
const skipFirst = (options = {}) => (seq) => () => {
    const { count = 1 } = options;
    return seek(count)(seq)();
};
const skipFirstT = { skipFirst };
const _takeLast = (maxCount, seq) => () => {
    const last = [];
    let result = seq();
    while (true) {
        if (isSome(result)) {
            last.push(result.data);
            if (getLength(last) > maxCount) {
                last.shift();
            }
            result = result.next();
        }
        else {
            break;
        }
    }
    return _fromArray(last, 0, getLength(last));
};
const takeLast = (options = {}) => (seq) => {
    const { count = 1 } = options;
    return _takeLast(count, seq);
};
const takeLastT = { takeLast };
const _takeWhile = (predicate, inclusive, seq) => () => {
    const result = seq();
    return isSome(result) && predicate(result.data)
        ? createNext(result.data, _takeWhile(predicate, inclusive, result.next))
        : isSome(result) && inclusive
            ? createNext(result.data, returns(none))
            : none;
};
const takeWhile = (predicate, options = {}) => (seq) => {
    const { inclusive = false } = options;
    return _takeWhile(predicate, inclusive, seq);
};
const takeWhileT = { takeWhile };
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
const _zip = (...sequences) => () => {
    const nextResults = pipe(sequences, map$1(callWith()), keepType(keepT$1, isSome));
    return getLength(nextResults) === getLength(sequences)
        ? createNext(pipe(nextResults, map$1(x => x.data)), _zip(...pipe(nextResults, map$1(x => x.next))))
        : none;
};
const zip = _zip;
const zipT = { zip };
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

export { concatAll, concatAllT, distinctUntilChanged, distinctUntilChangedT, generate, generateT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, seek, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, zip, zipT };
