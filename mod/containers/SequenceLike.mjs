/// <reference types="./SequenceLike.d.ts" />
import { prototype } from '../__internal__/util/Disposable.mjs';
import { prototype as prototype$1 } from '../__internal__/util/Enumerator.mjs';
import { Object_properties, createObjectFactory, mix, Object_init, init } from '../__internal__/util/Object.mjs';
import { isSome, none, pipe, strictEquality, isNone, alwaysTrue, getLength, callWith, returns } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { keepType } from './ContainerLike.mjs';
import { toSequence, map as map$1, keepT as keepT$1 } from './ReadonlyArrayLike.mjs';
import { isDisposed, dispose } from '../__internal__/util/DisposableLikeInternal.mjs';

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
function concat(...sequences) {
    return pipe(sequences, toSequence(), concatAll());
}
const concatT = {
    concat,
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
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
    return (options = {}) => (seq) => () => {
        const { equality = strictEquality } = options;
        const result = seq();
        return isSome(result)
            ? createNext(result.data, _distinctUntilChanged(equality, result.data, result.next))
            : none;
    };
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const keep = /*@__PURE__*/ (() => {
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
    return (predicate) => (seq) => _keep(predicate, seq);
})();
const keepT = { keep };
const map = /*@__PURE__*/ (() => {
    const _map = (mapper, seq) => () => {
        const result = seq();
        return isSome(result)
            ? createNext(mapper(result.data), _map(mapper, result.next))
            : none;
    };
    return (mapper) => (seq) => _map(mapper, seq);
})();
const mapT = { map };
const pairwise = 
/*@__PURE__*/ (() => {
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
    return () => (seq) => _pairwise(none, seq);
})();
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
const takeFirst = 
/*@__PURE__*/ (() => {
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
    return (options = {}) => (seq) => {
        const { count = 1 } = options;
        return _takeFirst(count, seq);
    };
})();
const takeFirstT = {
    takeFirst,
};
const repeat = /*@__PURE__*/ (() => {
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
    return (predicate) => {
        const repeatPredicate = isNone(predicate)
            ? alwaysTrue
            : typeof predicate === "number"
                ? (count) => count < predicate
                : (count) => predicate(count);
        return (seq) => _repeat(repeatPredicate, 1, seq, seq);
    };
})();
const repeatT = { repeat };
const scan = /*@__PURE__*/ (() => {
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
    return (reducer, initialValue) => (seq) => () => _scan(reducer, initialValue(), seq)();
})();
const scanT = { scan };
const skipFirst = (options = {}) => (seq) => () => {
    const { count = 1 } = options;
    return seek(count)(seq)();
};
const skipFirstT = { skipFirst };
const takeLast = 
/*@__PURE__*/ (() => {
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
        return pipe(last, toSequence(), callWith());
    };
    return (options = {}) => (seq) => {
        const { count = 1 } = options;
        return _takeLast(count, seq);
    };
})();
const takeLastT = { takeLast };
const takeWhile = 
/*@__PURE__*/ (() => {
    const _takeWhile = (predicate, inclusive, seq) => () => {
        const result = seq();
        return isSome(result) && predicate(result.data)
            ? createNext(result.data, _takeWhile(predicate, inclusive, result.next))
            : isSome(result) && inclusive
                ? createNext(result.data, returns(none))
                : none;
    };
    return (predicate, options = {}) => (seq) => {
        const { inclusive = false } = options;
        return _takeWhile(predicate, inclusive, seq);
    };
})();
const takeWhileT = { takeWhile };
const toEnumerable = 
/*@__PURE__*/ (() => {
    const properties = {
        ...prototype[Object_properties],
        ...prototype$1[Object_properties],
        seq: (() => none),
    };
    const createInstance = createObjectFactory(mix(prototype, prototype$1, {
        [Object_properties]: properties,
        [Object_init](seq) {
            init(prototype, this);
            init(prototype$1, this);
            this.seq = seq;
        },
        [SourceLike_move]() {
            if (!isDisposed(this)) {
                const next = this.seq();
                if (isSome(next)) {
                    this[EnumeratorLike_current] = next.data;
                    this.seq = next.next;
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    }));
    return () => (seq) => createEnumerable(() => createInstance(seq));
})();
const toEnumerableT = { toEnumerable };
const toReadonlyArray = () => (seq) => {
    const result = [];
    let next = seq();
    while (isSome(next)) {
        result.push(next.data);
        next = next.next();
    }
    return result;
};
const toReadonlyArrayT = {
    toReadonlyArray,
};
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
const zip = /*@__PURE__*/ (() => {
    const zip = (...sequences) => () => {
        const nextResults = pipe(sequences, map$1(callWith()), keepType(keepT$1, isSome));
        return getLength(nextResults) === getLength(sequences)
            ? createNext(pipe(nextResults, map$1(x => x.data)), zip(...pipe(nextResults, map$1(x => x.next))))
            : none;
    };
    return zip;
})();
const zipT = { zip };

export { concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, seek, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, toEnumerable, toEnumerableT, toReadonlyArray, toReadonlyArrayT, zip, zipT };
