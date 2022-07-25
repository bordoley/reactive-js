/// <reference types="./ReadonlyArrayLike.d.ts" />
import { properties, prototype } from '../__internal__/util/Disposable.mjs';
import { properties as properties$1, prototype as prototype$1 } from '../__internal__/util/Enumerator.mjs';
import { mix, Object_init, init, createObjectFactory } from '../__internal__/util/Object.mjs';
import { getLength, isSome, max, min, pipe, newInstance, identity, none } from '../functions.mjs';
import { InteractiveContainerLike_interact } from '../ix.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { isDisposed, dispose } from '../__internal__/util/DisposableLikeInternal.mjs';

const every = (predicate) => arr => arr.every(predicate);
const keep = (predicate) => (arr) => {
    const result = arr.filter(predicate);
    return result;
};
const keepT = { keep };
const map = (mapper) => (arr) => arr.map(mapper);
const mapT = { map };
const forEach = (f) => arr => {
    arr.forEach(f);
    return arr;
};
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
    return factory(values, start, count, options);
};
const toEnumerable = /*@__PURE__*/ (() => {
    const properties$2 = {
        ...properties,
        ...properties$1,
        array: [],
        count: 0,
        index: 0,
    };
    const prototype$2 = mix(prototype, prototype$1, {
        [Object_init](array, start, count) {
            init(prototype, this);
            init(prototype$1, this);
            this.array = array;
            this.index = start - 1;
            this.count = count;
        },
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
    });
    const createInstance = createObjectFactory(prototype$2, properties$2);
    class ReadonlyArrayEnumerable {
        constructor(array, start, count) {
            this.array = array;
            this.start = start;
            this.count = count;
        }
        [InteractiveContainerLike_interact]() {
            return createInstance(this.array, this.start, this.count);
        }
    }
    return createFromArray((a, start, count) => {
        return newInstance(ReadonlyArrayEnumerable, a, start, count);
    });
})();
const toEnumerableT = { toEnumerable };
const toReadonlyArray = () => identity;
const toReadonlyArrayT = {
    toReadonlyArray,
};
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

export { every, forEach, keep, keepT, map, mapT, toEnumerable, toEnumerableT, toReadonlyArray, toReadonlyArrayT, toSequence, toSequenceT };
