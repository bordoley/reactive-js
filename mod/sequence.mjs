/// <reference types="./sequence.d.ts" />
import { pipe, strictEquality, compose, alwaysTrue } from './functions.mjs';
import { isNone } from './option.mjs';
import { createRunnable } from './runnable.mjs';

const sequenceResultDone = Symbol('SequenceResultDone');
const isNotify = (result) => result != sequenceResultDone;
const notify = (data, next) => ({ data, next });
const done = () => sequenceResultDone;
const empty = () => done;
const concatAll = () => seq => {
    const continueWith = (result, continuation) => {
        if (isNotify(result)) {
            return notify(result.data, () => continueWith(result.next(), continuation));
        }
        else {
            return flattenIter(continuation());
        }
    };
    const flattenIter = (result) => {
        if (isNotify(result)) {
            return continueWith(result.data(), result.next);
        }
        else {
            return done();
        }
    };
    return () => flattenIter(seq());
};
const _fromArray = (arr, index, endIndex) => index < endIndex && index >= 0
    ? notify(arr[index], () => _fromArray(arr, index + 1, endIndex))
    : done();
const fromArray = (options = {}) => values => {
    var _a, _b;
    const valuesLength = values.length;
    const startIndex = Math.min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = Math.max(Math.min((_b = options.endIndex) !== null && _b !== void 0 ? _b : valuesLength, valuesLength), 0);
    return () => _fromArray(values, startIndex, endIndex);
};
function concat(...sequences) {
    return pipe(sequences, fromArray(), concatAll());
}
const concatWith = (snd) => first => concat(first, snd);
const _distinctUntilChanged = (equality, prevValue, next) => () => {
    let retval = next();
    while (true) {
        if (isNotify(retval)) {
            if (!equality(prevValue, retval.data)) {
                return notify(retval.data, _distinctUntilChanged(equality, retval.data, retval.next));
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
const distinctUntilChanged = (options = {}) => seq => () => {
    const { equality = strictEquality } = options;
    const result = seq();
    return isNotify(result)
        ? notify(result.data, _distinctUntilChanged(equality, result.data, result.next))
        : done();
};
function endWith(...values) {
    return pipe(values, fromArray(), concatWith);
}
const _keep = (predicate, seq) => () => {
    let result = seq();
    while (true) {
        if (isNotify(result)) {
            if (predicate(result.data)) {
                return notify(result.data, _keep(predicate, result.next));
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
const keep = (predicate) => seq => _keep(predicate, seq);
const _map = (mapper, seq) => () => {
    const result = seq();
    return isNotify(result)
        ? notify(mapper(result.data), _map(mapper, result.next))
        : done();
};
const map = (mapper) => seq => _map(mapper, seq);
const mapTo = (v) => seq => _map(_ => v, seq);
const concatMap = (mapper) => compose(map(mapper), concatAll());
function startWith(...values) {
    return seq => concat(fromArray()(values), seq);
}
const fromValue = () => v => () => _fromArray([v], 0, 1);
const _generate = (generator, acc) => () => notify(acc, _generate(generator, generator(acc)));
const generate = (generator, initialValue) => () => {
    const acc = generator(initialValue());
    return _generate(generator, acc)();
};
const seek = (count) => seq => {
    if (count <= 0) {
        return seq;
    }
    else {
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
const _takeFirst = (count, seq) => () => {
    if (count > 0) {
        const result = seq();
        return isNotify(result)
            ? notify(result.data, _takeFirst(count - 1, result.next))
            : done();
    }
    else {
        return done();
    }
};
const takeFirst = (options = {}) => seq => {
    const { count = 1 } = options;
    return _takeFirst(count, seq);
};
const _repeat = (predicate, count, src, seq) => () => {
    const result = seq();
    if (isNotify(result)) {
        return notify(result.data, _repeat(predicate, count, src, result.next));
    }
    else if (predicate(count)) {
        return _repeat(predicate, count + 1, src, src)();
    }
    else {
        return done();
    }
};
function repeat(predicate) {
    const repeatPredicate = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return seq => _repeat(repeatPredicate, 1, seq, seq);
}
const _scan = (reducer, acc, seq) => () => {
    const result = seq();
    if (isNotify(result)) {
        const nextAcc = reducer(acc, result.data);
        return notify(nextAcc, _scan(reducer, nextAcc, result.next));
    }
    else {
        return done();
    }
};
const scan = (reducer, initialValue) => seq => () => _scan(reducer, initialValue(), seq)();
const skipFirst = (options = {}) => seq => () => {
    const { count = 1 } = options;
    return seek(count)(seq)();
};
const _takeLast = (maxCount, seq) => () => {
    const last = [];
    let result = seq();
    while (true) {
        if (isNotify(result)) {
            last.push(result.data);
            if (last.length > maxCount) {
                last.shift();
            }
            result = result.next();
        }
        else {
            break;
        }
    }
    return _fromArray(last, 0, last.length);
};
const takeLast = (options = {}) => seq => {
    const { count = 1 } = options;
    return _takeLast(count, seq);
};
const _takeWhile = (predicate, inclusive, seq) => () => {
    const result = seq();
    return isNotify(result) && predicate(result.data)
        ? notify(result.data, _takeWhile(predicate, inclusive, result.next))
        : isNotify(result) && inclusive
            ? notify(result.data, done)
            : done();
};
const takeWhile = (predicate, options = {}) => seq => {
    const { inclusive = false } = options;
    return _takeWhile(predicate, inclusive, seq);
};
const toRunnable = () => seq => createRunnable(sink => {
    let result = seq();
    while (isNotify(result)) {
        sink.notify(result.data);
        result = result.next();
    }
    sink.done();
});

export { concat, concatAll, concatMap, concatWith, distinctUntilChanged, empty, endWith, fromArray, fromValue, generate, keep, map, mapTo, repeat, scan, seek, sequenceResultDone, skipFirst, startWith, takeFirst, takeLast, takeWhile, toRunnable };
