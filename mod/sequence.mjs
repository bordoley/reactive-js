/// <reference types="./sequence.d.ts" />
import { createFromArray } from './__internal__.container.mjs';
import { AbstractEnumerator } from './__internal__.enumerator.mjs';
import { map as map$1, keepType } from './__internal__.readonlyArray.mjs';
import { isDisposed, dispose } from './disposable.mjs';
import { createEnumerable } from './enumerable.mjs';
import { hasCurrent } from './enumerator.mjs';
import { pipe, strictEquality, alwaysTrue, getLength, callWith, pipeLazy, newInstanceWith } from './functions.mjs';
import { none, isNone } from './option.mjs';
import { createRunnable } from './runnable.mjs';

const sequenceResultDone = Symbol("SequenceResultDone");
const TContainerOf = undefined;
const isNext = (result) => result != sequenceResultDone;
const createNext = (data, next) => ({
    data,
    next: castToSequence(next),
});
const done = () => sequenceResultDone;
const castToSequence = (f) => f;
const concatAll = () => seq => {
    const continueWith = (result, continuation) => {
        if (isNext(result)) {
            return createNext(result.data, () => continueWith(result.next(), continuation));
        }
        else {
            return flattenIter(continuation());
        }
    };
    const flattenIter = (result) => {
        if (isNext(result)) {
            return continueWith(result.data(), result.next);
        }
        else {
            return done();
        }
    };
    return castToSequence(() => flattenIter(seq()));
};
const concatAllT = {
    concatAll,
};
const _fromArray = (arr, index, endIndex) => index < endIndex && index >= 0
    ? createNext(arr[index], () => _fromArray(arr, index + 1, endIndex))
    : done();
const fromArray = /*@__PURE__*/ createFromArray((values, startIndex, endIndex) => castToSequence(() => _fromArray(values, startIndex, endIndex)));
const fromArrayT = {
    fromArray,
};
function concat(...sequences) {
    return pipe(sequences, fromArray(), concatAll());
}
const concatT = {
    concat,
};
const _distinctUntilChanged = (equality, prevValue, next) => castToSequence(() => {
    let retval = next();
    while (true) {
        if (isNext(retval)) {
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
});
const distinctUntilChanged = (options = {}) => seq => castToSequence(() => {
    const { equality = strictEquality } = options;
    const result = seq();
    return isNext(result)
        ? createNext(result.data, _distinctUntilChanged(equality, result.data, result.next))
        : done();
});
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const _keep = (predicate, seq) => castToSequence(() => {
    let result = seq();
    while (true) {
        if (isNext(result)) {
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
});
const keep = (predicate) => seq => _keep(predicate, seq);
const keepT = {
    keep,
};
const _map = (mapper, seq) => castToSequence(() => {
    const result = seq();
    return isNext(result)
        ? createNext(mapper(result.data), _map(mapper, result.next))
        : done();
});
const map = (mapper) => seq => _map(mapper, seq);
const mapT = {
    map,
};
const _generate = (generator, acc) => castToSequence(() => createNext(acc, _generate(generator, generator(acc))));
const generate = (generator, initialValue) => castToSequence(() => {
    const acc = generator(initialValue());
    return _generate(generator, acc)();
});
const generateT = {
    generate,
};
const _pairwise = (prev, seq) => castToSequence(() => {
    const result = seq();
    if (isNext(result)) {
        const { data, next } = result;
        const v = [prev, data];
        return createNext(v, _pairwise(data, next));
    }
    else {
        return done();
    }
});
const pairwise = () => seq => castToSequence(() => _pairwise(none, seq)());
const pairwiseT = {
    pairwise,
};
const seek = (count) => seq => {
    if (count <= 0) {
        return seq;
    }
    else {
        let retval = seq;
        for (let i = 0; i < count; i++) {
            const result = retval();
            if (isNext(result)) {
                retval = result.next;
            }
        }
        return retval;
    }
};
const _takeFirst = (count, seq) => castToSequence(() => {
    if (count > 0) {
        const result = seq();
        return isNext(result)
            ? createNext(result.data, _takeFirst(count - 1, result.next))
            : done();
    }
    else {
        return done();
    }
});
const takeFirst = (options = {}) => seq => {
    const { count = 1 } = options;
    return _takeFirst(count, seq);
};
const takeFirstT = {
    takeFirst,
};
const _repeat = (predicate, count, src, seq) => castToSequence(() => {
    const result = seq();
    if (isNext(result)) {
        return createNext(result.data, _repeat(predicate, count, src, result.next));
    }
    else if (predicate(count)) {
        return _repeat(predicate, count + 1, src, src)();
    }
    else {
        return done();
    }
});
function repeat(predicate) {
    const repeatPredicate = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return seq => _repeat(repeatPredicate, 1, seq, seq);
}
const repeatT = {
    repeat,
};
const _scan = (reducer, acc, seq) => castToSequence(() => {
    const result = seq();
    if (isNext(result)) {
        const nextAcc = reducer(acc, result.data);
        return createNext(nextAcc, _scan(reducer, nextAcc, result.next));
    }
    else {
        return done();
    }
});
const scan = (reducer, initialValue) => seq => castToSequence(() => _scan(reducer, initialValue(), seq)());
const scanT = {
    scan,
};
const skipFirst = (options = {}) => seq => castToSequence(() => {
    const { count = 1 } = options;
    return seek(count)(seq)();
});
const skipFirstT = {
    skipFirst,
};
const _takeLast = (maxCount, seq) => castToSequence(() => {
    const last = [];
    let result = seq();
    while (true) {
        if (isNext(result)) {
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
});
const takeLast = (options = {}) => seq => {
    const { count = 1 } = options;
    return _takeLast(count, seq);
};
const takeLastT = {
    takeLast,
};
const _takeWhile = (predicate, inclusive, seq) => castToSequence(() => {
    const result = seq();
    return isNext(result) && predicate(result.data)
        ? createNext(result.data, _takeWhile(predicate, inclusive, result.next))
        : isNext(result) && inclusive
            ? createNext(result.data, done)
            : done();
});
const takeWhile = (predicate, options = {}) => seq => {
    const { inclusive = false } = options;
    return _takeWhile(predicate, inclusive, seq);
};
const takeWhileT = {
    takeWhile,
};
const toRunnable = () => seq => createRunnable(sink => {
    let result = seq();
    while (isNext(result)) {
        sink.notify(result.data);
        result = result.next();
    }
});
const toRunnableT = {
    toRunnable,
};
const _zip = (...sequences) => castToSequence(() => {
    const nextResults = pipe(sequences, map$1(callWith()), keepType(isNext));
    return getLength(nextResults) === getLength(sequences)
        ? createNext(pipe(nextResults, map$1(x => x.data)), _zip(...pipe(nextResults, map$1(x => x.next))))
        : done();
});
const zip = _zip;
const zipT = {
    zip,
};
class SequenceEnumerator extends AbstractEnumerator {
    constructor(seq) {
        super();
        this.seq = seq;
    }
    move() {
        if (!isDisposed(this)) {
            const next = this.seq();
            if (isNext(next)) {
                this.current = next.data;
                this.seq = next.next;
            }
            else {
                pipe(this, dispose());
            }
        }
        return hasCurrent(this);
    }
}
const toEnumerable = () => seq => createEnumerable(pipeLazy(SequenceEnumerator, newInstanceWith(seq)));
const toEnumerableT = {
    toEnumerable,
};

export { TContainerOf, concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, fromArray, fromArrayT, generate, generateT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, seek, sequenceResultDone, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, toEnumerable, toEnumerableT, toRunnable, toRunnableT, zip, zipT };
