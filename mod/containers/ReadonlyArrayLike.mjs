/// <reference types="./ReadonlyArrayLike.d.ts" />
import { properties, prototype } from '../__internal__/util/Disposable.mjs';
import { properties as properties$1, prototype as prototype$1 } from '../__internal__/util/Enumerator.mjs';
import { createObjectFactory, mix, Object_init, init } from '../__internal__/util/Object.mjs';
import { getLength, isSome, max, min, pipe, identity, none } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { createRunnable } from '../rx.mjs';
import { SourceLike_move, EnumeratorLike_current, SinkLike_notify } from '../util.mjs';
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
    const createInstance = createObjectFactory(properties$2, mix(prototype, prototype$1, {
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
    }));
    return createFromArray((array, start, count) => createEnumerable(() => createInstance(array, start, count)));
})();
const toEnumerableT = { toEnumerable };
/*
export const toEnumerableObservable: ToEnumerableObservable<ReadonlyArrayLike> =
 createFromArray(
      (values, start, count) => {
        createObservable(observer => {

        const callback = () => sideEffect(observer);
        pipe(
          observer,
          getScheduler,
          schedule(callback, options),
          addTo(observer),
        );
      }, 2
    );

    const fromArray =createFromArray<
      ObservableLike<unknown>,
      {
        readonly delay: number;
        readonly startIndex: number;
        readonly endIndex: number;
        readonly delayStart: boolean;
      }
    >(
      <T>(
        values: readonly T[],
        startIndex: number,
        endIndex: number,
        options?: {
          readonly delay?: number;
          readonly delayStart?: boolean;
        },
      ) => {
        const count = endIndex - startIndex;
        const isEnumerableTag = !hasDelay(options);
        const { delayStart = true } = options ?? {};
        return count === 0 && isEnumerableTag
          ? empty
          : pipe(
              defer(
                () => {
                  let index = startIndex;
                  return (observer: ObserverLike<T>) => {
                    while (index < endIndex && !isDisposed(observer)) {
                      const value = values[index];
                      index++;

                      observer.notify(value);

                      if (index < endIndex) {
                        __yield(options);
                      }
                    }
                    pipe(observer, dispose());
                  };
                },
                delayStart ? options : none,
              ),
              tagObservableType(hasDelay(options) ? 1 : 2),
            );
      },
    );

    
  })();

  export const fromArrayT: FromArray<
      ObservableLike<unknown>,
      {
        readonly delay: number;
        readonly delayStart: boolean;
        readonly startIndex: number;
        readonly endIndex: number;
      }
    > = {
      fromArray,
    };*/
const toReadonlyArray = () => identity;
const toReadonlyArrayT = {
    toReadonlyArray,
};
const toRunnable = 
/*@__PURE__*/ (() => {
    return createFromArray((values, startIndex, count) => createRunnable(sink => {
        for (let index = startIndex; !isDisposed(sink) && count !== 0; count > 0 ? index++ : index--, count > 0 ? count-- : count++) {
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

export { every, keep, keepT, map, mapT, toEnumerable, toEnumerableT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT, toSequence, toSequenceT };
