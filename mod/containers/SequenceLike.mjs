/// <reference types="./SequenceLike.d.ts" />
import { create } from '../__internal__/ix/EnumerableLike.create.mjs';
import { mutableEnumeratorMixin } from '../__internal__/ix/EnumeratorLike.mutable.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../__internal__/mixins.mjs';
import { SequenceLike_data, SequenceLike_next } from '../containers.mjs';
import { isSome, none, pipe, strictEquality, getLength, callWith, returns } from '../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../ix.mjs';
import { isDisposed, dispose } from '../util/DisposableLike.mjs';
import disposableMixin from '../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { keepType } from './ContainerLike.mjs';
import { toSequence, map as map$1, keepT as keepT$1 } from './ReadonlyArrayLike.mjs';
import repeat$1 from './__internal__/ContainerLike/ContainerLike.repeat.mjs';

const createNext = (data, next) => ({
    [SequenceLike_data]: data,
    [SequenceLike_next]: next,
});
const concatAll = () => (seq) => {
    const continueWith = (result, continuation) => {
        if (isSome(result)) {
            return createNext(result[SequenceLike_data], () => continueWith(result[SequenceLike_next](), continuation));
        }
        else {
            return flattenIter(continuation());
        }
    };
    const flattenIter = (result) => {
        if (isSome(result)) {
            return continueWith(result[SequenceLike_data](), result[SequenceLike_next]);
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
                if (!equality(prevValue, retval[SequenceLike_data])) {
                    return createNext(retval[SequenceLike_data], _distinctUntilChanged(equality, retval[SequenceLike_data], retval[SequenceLike_next]));
                }
                else {
                    retval = retval[SequenceLike_next]();
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
            ? createNext(result[SequenceLike_data], _distinctUntilChanged(equality, result[SequenceLike_data], result[SequenceLike_next]))
            : none;
    };
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const generate = 
/*@__PURE__*/ (() => {
    const _generate = (generator, data) => () => ({
        [SequenceLike_data]: data,
        [SequenceLike_next]: _generate(generator, generator(data)),
    });
    return (generator, initialValue) => () => {
        const acc = generator(initialValue());
        return _generate(generator, acc)();
    };
})();
const generateT = {
    generate,
};
const keep = /*@__PURE__*/ (() => {
    const _keep = (predicate, seq) => () => {
        let result = seq();
        while (true) {
            if (isSome(result)) {
                if (predicate(result[SequenceLike_data])) {
                    return createNext(result[SequenceLike_data], _keep(predicate, result[SequenceLike_next]));
                }
                else {
                    result = result[SequenceLike_next]();
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
            ? createNext(mapper(result[SequenceLike_data]), _map(mapper, result[SequenceLike_next]))
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
            const { [SequenceLike_data]: data, [SequenceLike_next]: next } = result;
            const v = [prev, data];
            return createNext(v, _pairwise(data, next));
        }
        else {
            return none;
        }
    };
    return () => (seq) => {
        const first = seq();
        if (isSome(first)) {
            return _pairwise(first[SequenceLike_data], first[SequenceLike_next]);
        }
        else {
            return () => none;
        }
    };
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
                retval = result[SequenceLike_next];
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
                ? createNext(result[SequenceLike_data], _takeFirst(count - 1, result[SequenceLike_next]))
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
    const _repeat = (src, predicate, count, seq) => () => {
        const result = seq();
        if (isSome(result)) {
            return createNext(result[SequenceLike_data], _repeat(src, predicate, count, result[SequenceLike_next]));
        }
        else if (predicate(count)) {
            return _repeat(src, predicate, count + 1, src)();
        }
        else {
            return none;
        }
    };
    return repeat$1((seq, predicate) => _repeat(seq, predicate, 1, seq));
})();
const repeatT = { repeat };
const scan = /*@__PURE__*/ (() => {
    const _scan = (reducer, acc, seq) => () => {
        const result = seq();
        if (isSome(result)) {
            const nextAcc = reducer(acc, result[SequenceLike_data]);
            return createNext(nextAcc, _scan(reducer, nextAcc, result[SequenceLike_next]));
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
                last.push(result[SequenceLike_data]);
                if (getLength(last) > maxCount) {
                    last.shift();
                }
                result = result[SequenceLike_next]();
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
        return isSome(result) && predicate(result[SequenceLike_data])
            ? createNext(result[SequenceLike_data], _takeWhile(predicate, inclusive, result[SequenceLike_next]))
            : isSome(result) && inclusive
                ? createNext(result[SequenceLike_data], returns(none))
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
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    const createSequenceEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin), function SequenceEnumerator(instance, seq) {
        init(disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.seq = seq;
        return instance;
    }, props({
        seq: none,
    }), {
        [SourceLike_move]() {
            if (!isDisposed(this)) {
                const next = this.seq();
                if (isSome(next)) {
                    this[EnumeratorLike_current] = next[SequenceLike_data];
                    this.seq = next[SequenceLike_next];
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    }));
    return () => (seq) => create(() => createSequenceEnumerator(seq));
})();
const toEnumerableT = { toEnumerable };
const toReadonlyArray = () => (seq) => {
    const result = [];
    let next = seq();
    while (isSome(next)) {
        result.push(next[SequenceLike_data]);
        next = next[SequenceLike_next]();
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
        sink.notify(result[SequenceLike_data]);
        result = result[SequenceLike_next]();
      }
    });

export const toRunnableT: ToRunnable<SequenceLike> = {
  toRunnable,
};*/
const zip = /*@__PURE__*/ (() => {
    const zip = (...sequences) => () => {
        const nextResults = pipe(sequences, map$1(callWith()), keepType(keepT$1, isSome));
        return getLength(nextResults) === getLength(sequences)
            ? createNext(pipe(nextResults, map$1(x => x[SequenceLike_data])), zip(...pipe(nextResults, map$1(x => x[SequenceLike_next]))))
            : none;
    };
    return zip;
})();
const zipT = { zip };

export { concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, generate, generateT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, seek, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, toEnumerable, toEnumerableT, toReadonlyArray, toReadonlyArrayT, zip, zipT };
