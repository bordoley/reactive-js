/// <reference types="./ReadonlyArrayLike.d.ts" />
import { hasDelay, getDelay } from '../__internal__/__internal__optionParsing.mjs';
import { disposableMixin } from '../__internal__/util/__internal__Disposables.mjs';
import { enumeratorMixin } from '../__internal__/util/__internal__Enumerators.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../__internal__/util/__internal__Objects.mjs';
import { getLength, isSome, max, min, none, pipe, identity } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { i as isDisposed, f as dispose, _ as __yield, s as schedule, g as addTo, d as createRunnableObservable, b as createEnumerableObservable, h as createRunnable } from '../DisposableLike-45fa23bf.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { SourceLike_move, EnumeratorLike_current, SinkLike_notify } from '../util.mjs';

const empty = /*@__PURE__*/ (() => {
    const _empty = [];
    return () => _empty;
})();
const emptyT = {
    empty,
};
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
    const createReadonlyArrayEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedEnumerator), function ReadonlyArrayEnumerator(instance, array, start, count) {
        init(disposableMixin, instance);
        init(typedEnumerator, instance);
        instance.array = array;
        instance.index = start - 1;
        instance.count = count;
        return instance;
    }, props({
        array: none,
        count: 0,
        index: 0,
    }), {
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
    return (options) => {
        const delay = getDelay(options);
        const createObservableWithType = (f) => delay > 0 ? createRunnableObservable(f) : createEnumerableObservable(f);
        return createArrayObservable(createObservableWithType, options)(options);
    };
})();
const toObservableT = { toObservable };
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

export { empty, emptyT, every, forEach, forEachT, keep, keepT, map, mapT, some, toEnumerable, toEnumerableT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT, toSequence, toSequenceT };
