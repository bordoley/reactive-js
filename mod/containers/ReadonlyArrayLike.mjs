/// <reference types="./ReadonlyArrayLike.d.ts" />
import { hasDelay, getDelay } from '../__internal__/optionalArgs.mjs';
import { disposableMixin } from '../__internal__/util/DisposableLikeMixins.mjs';
import { enumeratorMixin } from '../__internal__/util/EnumeratorLikeMixin.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/Object.mjs';
import { getLength, isSome, max, min, none, pipe, identity } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { createRunnableObservable, createEnumerableObservable, createRunnable } from '../rx.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { __yield, schedule } from '../scheduling/SchedulerLike.mjs';
import { SourceLike_move, EnumeratorLike_current, SinkLike_notify } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { isDisposed, dispose, addTo } from '../__internal__/util/DisposableLikeInternal.mjs';

const every = (predicate) => arr => arr.every(predicate);
const forEach = (effect) => arr => {
    arr.forEach(effect);
    return arr;
};
const forEachT = { forEach };
const keep = (predicate) => (arr) => {
    const result = arr.filter(predicate);
    return result;
};
const keepT = { keep };
const map = (mapper) => (arr) => arr.map(mapper);
const mapT = { map };
const some = (predicate) => arr => arr.some(predicate);
const createFromArray = (factory) => (options = {}) => values => {
    const valuesLength = getLength(values);
    const { start: startOption, count: countOption } = options;
    const { start, count } = (() => {
        if (isSome(countOption) && countOption >= 0) {
            const startOrDefault = startOption !== null && startOption !== void 0 ? startOption : 0;
            const maxStart = max(startOrDefault, 0);
            const start = min(maxStart, valuesLength - 1);
            const maxCount = min(valuesLength, countOption);
            const count = min(valuesLength - start, maxCount);
            return { start, count };
        }
        else if (isSome(countOption) && countOption < 0) {
            const startOrDefault = startOption !== null && startOption !== void 0 ? startOption : valuesLength - 1;
            const maxStart = max(startOrDefault, 0);
            const start = min(maxStart, valuesLength - 1);
            const maxCount = max(-valuesLength, countOption);
            const count = max(-start - 1, maxCount);
            return { start, count };
        }
        else {
            // count is none
            const startOrDefault = startOption !== null && startOption !== void 0 ? startOption : 0;
            const maxStart = max(startOrDefault, 0);
            const start = min(maxStart, valuesLength);
            const count = valuesLength - start;
            return { start, count };
        }
    })();
    return factory(values, start, count);
};
const toEnumerable = /*@__PURE__*/ (() => {
    const typedEnumerator = enumeratorMixin();
    const createReadonlyArrayEnumerator = createInstanceFactory(clazz(__extends(disposableMixin, typedEnumerator), function ReadonlyArrayEnumerator(array, start, count) {
        init(disposableMixin, this);
        init(typedEnumerator, this);
        this.array = array;
        this.index = start - 1;
        this.count = count;
        return this;
    }, {
        array: none,
        count: 0,
        index: 0,
    }, {
        [SourceLike_move]() {
            const { array } = this;
            if (!isDisposed(this)) {
                this.index++;
                const { index, count } = this;
                if (count !== 0) {
                    this[EnumeratorLike_current] = array[index];
                    this.count = count > 0 ? this.count - 1 : this.count + 1;
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    }));
    return createFromArray((array, start, count) => createEnumerable(() => createReadonlyArrayEnumerator(array, start, count)));
})();
const toEnumerableT = { toEnumerable };
const toObservable = /*@__PURE__*/ (() => {
    const createArrayObservable = (createObservable, options) => createFromArray((values, startIndex, count) => {
        const { delayStart = false } = options !== null && options !== void 0 ? options : {};
        const onSink = (observer) => {
            let index = startIndex, cnt = count;
            const continuation = () => {
                while (!isDisposed(observer) && cnt !== 0) {
                    const value = values[index];
                    if (cnt > 0) {
                        index++;
                        cnt--;
                    }
                    else {
                        index--;
                        cnt++;
                    }
                    observer[SinkLike_notify](value);
                    if (cnt !== 0) {
                        __yield(options);
                    }
                }
                pipe(observer, dispose());
            };
            pipe(observer, getScheduler, schedule(continuation, delayStart && hasDelay(options) ? options : none), addTo(observer));
        };
        return createObservable(onSink);
    });
    return ((options) => {
        const delay = getDelay(options);
        return delay > 0
            ? createArrayObservable(createRunnableObservable, options)(options)
            : createArrayObservable(createEnumerableObservable, options)(options);
    });
})();
const toReadonlyArray = () => identity;
const toReadonlyArrayT = {
    toReadonlyArray,
};
const toRunnable = 
/*@__PURE__*/ (() => {
    return createFromArray((values, startIndex, count) => createRunnable(sink => {
        for (let index = startIndex, cnt = count; !isDisposed(sink) && cnt !== 0; cnt > 0 ? index++ : index--, cnt > 0 ? cnt-- : cnt++) {
            sink[SinkLike_notify](values[index]);
        }
    }));
})();
const toRunnableT = { toRunnable };
const toSequence = 
/*@__PURE__*/ (() => {
    const _arraySequence = (arr, index, count) => count !== 0 && index >= 0
        ? {
            data: arr[index],
            next: () => _arraySequence(arr, count > 0 ? index + 1 : index - 1, count > 0 ? count - 1 : count + 1),
        }
        : none;
    return createFromArray((values, startIndex, count) => () => _arraySequence(values, startIndex, count));
})();
const toSequenceT = {
    toSequence,
};

export { every, forEach, forEachT, keep, keepT, map, mapT, some, toEnumerable, toEnumerableT, toObservable, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT, toSequence, toSequenceT };
