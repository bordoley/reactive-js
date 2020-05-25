import { compose, pipe, strictEquality, alwaysTrue, } from "./functions.js";
import { isNone } from "./option.js";
import { createRunnable } from "./runnable.js";
export const isDone = (result) => result.type === 2;
export const isNotify = (result) => result.type === 1;
export const notify = (data, next) => ({
    type: 1,
    data,
    next,
});
const _done = { type: 2 };
export const done = () => _done;
export const empty = () => done;
export const concatAll = () => seq => {
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
export const fromArray = (options = {}) => values => {
    var _a, _b;
    const valuesLength = values.length;
    const startIndex = Math.min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = Math.max(Math.min((_b = options.endIndex) !== null && _b !== void 0 ? _b : valuesLength, valuesLength), 0);
    return () => _fromArray(values, startIndex, endIndex);
};
export function concat(...sequences) {
    return pipe(sequences, fromArray(), concatAll());
}
export const concatWith = (snd) => first => concat(first, snd);
const _distinctUntilChanged = (equality, prevValue, next) => () => {
    let retval = next();
    while (true) {
        if (isDone(retval)) {
            return retval;
        }
        else if (!equality(prevValue, retval.data)) {
            return notify(retval.data, _distinctUntilChanged(equality, retval.data, retval.next));
        }
        retval = retval.next();
    }
};
export const distinctUntilChanged = (options = {}) => seq => () => {
    const { equality = strictEquality } = options;
    const result = seq();
    return isNotify(result)
        ? notify(result.data, _distinctUntilChanged(equality, result.data, result.next))
        : done();
};
export function endWith(...values) {
    return pipe(values, fromArray(), concatWith);
}
const _keep = (predicate, seq) => () => {
    let result = seq();
    while (true) {
        if (isDone(result)) {
            return result;
        }
        else if (predicate(result.data)) {
            return notify(result.data, _keep(predicate, result.next));
        }
        result = result.next();
    }
};
export const keep = (predicate) => seq => _keep(predicate, seq);
const _map = (mapper, seq) => () => {
    const result = seq();
    return isNotify(result)
        ? notify(mapper(result.data), _map(mapper, result.next))
        : done();
};
export const map = (mapper) => seq => _map(mapper, seq);
export const mapTo = (v) => seq => _map(_ => v, seq);
export const concatMap = (mapper) => compose(map(mapper), concatAll());
export function startWith(...values) {
    return seq => concat(fromArray()(values), seq);
}
export const fromValue = () => v => () => _fromArray([v], 0, 1);
const _generate = (generator, acc) => () => notify(acc, _generate(generator, generator(acc)));
export const generate = (generator, initialValue) => () => {
    const acc = generator(initialValue());
    return _generate(generator, acc)();
};
export const seek = (count) => seq => {
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
        return isDone(result)
            ? done()
            : notify(result.data, _takeFirst(count - 1, result.next));
    }
    else {
        return done();
    }
};
export const takeFirst = (options = {}) => seq => {
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
export function repeat(predicate) {
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
export const scan = (reducer, initialValue) => seq => () => _scan(reducer, initialValue(), seq)();
export const skipFirst = (options = {}) => seq => () => {
    const { count = 1 } = options;
    return seek(count)(seq)();
};
const _takeLast = (maxCount, seq) => () => {
    const last = [];
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
export const takeLast = (options = {}) => seq => {
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
export const takeWhile = (predicate, options = {}) => seq => {
    const { inclusive = false } = options;
    return _takeWhile(predicate, inclusive, seq);
};
export const toRunnable = () => seq => createRunnable(sink => {
    let result = seq();
    while (isNotify(result)) {
        sink.notify(result.data);
        result = result.next();
    }
    sink.done();
});
