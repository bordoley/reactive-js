/// <reference types="./EnumerableLike.d.ts" />
import { interactive, createScanOperator, createSkipFirstOperator } from '../__internal__/containers/StatefulContainerLike.mjs';
import { properties as properties$1, prototype as prototype$1 } from '../__internal__/ix/Enumerator.mjs';
import { properties, prototype, init } from '../__internal__/util/DelegatingDisposable.mjs';
import { createObjectFactory } from '../__internal__/util/Object.mjs';
import { empty } from '../containers/ReadonlyArrayLike.mjs';
import '../util/DisposableLike.mjs';
import { none, isSome } from '../util/Option.mjs';
import { pipeUnsafe, newInstance, pipe, strictEquality, compose, identity } from '../util/functions.mjs';
import { hasCurrent, getCurrent, move, EnumeratorLike_current } from './EnumeratorLike.mjs';
import { InteractiveContainerLike_interact } from './InteractiveContainerLike.mjs';
import { InteractiveSourceLike_move } from './InteractiveSourceLike.mjs';
import { dispose } from '../__internal__/util/DisposableLike.mjs';

const enumerate = () => (enumerable) => enumerable[InteractiveContainerLike_interact](none);
class LiftedEnumerable {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
    }
    [InteractiveContainerLike_interact]() {
        return pipeUnsafe(this.src, enumerate(), ...this.operators);
    }
}
const lift = (operator) => (enumerable) => {
    const src = enumerable instanceof LiftedEnumerable ? enumerable.src : enumerable;
    const allFunctions = enumerable instanceof LiftedEnumerable
        ? [...enumerable.operators, operator]
        : [operator];
    return newInstance(LiftedEnumerable, src, allFunctions);
};
const liftT = {
    lift,
    variance: interactive,
};
const delegatingDisposableEnumeratorProperties = {
    ...properties,
    ...properties$1,
    delegate: none,
};
const delegatingDisposableEnumeratorPrototype = {
    ...prototype,
    ...prototype$1,
};
const delegatingDisposableEnumeratorInit = (instance, delegate) => {
    init(instance, delegate);
    instance.delegate = delegate;
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        equality: none,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const hadCurrent = hasCurrent(this);
            const prevCurrent = hadCurrent ? getCurrent(this) : none;
            try {
                const { delegate } = this;
                while (move(delegate)) {
                    if (!hadCurrent ||
                        !this.equality(prevCurrent, getCurrent(delegate))) {
                        break;
                    }
                }
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    const distinctUntilChangedEnumerator = (options) => (delegate) => {
        const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.equality = equality;
        return instance;
    };
    return compose(distinctUntilChangedEnumerator, lift);
})();
const fromEnumerable = () => identity;
const fromEnumerableT = {
    fromEnumerable,
};
const keep = /*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        predicate: none,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const { delegate, predicate } = this;
            try {
                while (move(delegate) && !predicate(getCurrent(delegate))) { }
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    const keepEnumerator = (predicate) => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.predicate = predicate;
        return instance;
    };
    return compose(keepEnumerator, lift);
})();
const keepT = {
    keep,
};
const map = /*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        mapper: none,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const { delegate } = this;
            if (move(delegate)) {
                try {
                    this[EnumeratorLike_current] = this.mapper(getCurrent(delegate));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    const mapEnumerator = (mapper) => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.mapper = mapper;
        return instance;
    };
    return compose(mapEnumerator, lift);
})();
const mapT = { map };
const onNotify = /*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        onNotify: none,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const { delegate } = this;
            if (move(delegate)) {
                try {
                    this.onNotify(getCurrent(this));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    const onNotifyEnumerator = (onNotify) => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.onNotify = onNotify;
        return instance;
    };
    return compose(onNotifyEnumerator, lift);
})();
const pairwise = 
/*@__PURE__*/ (() => {
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const prev = (hasCurrent(this) ? getCurrent(this) : empty())[1];
            const { delegate } = this;
            if (move(delegate)) {
                const current = getCurrent(delegate);
                this[EnumeratorLike_current] = [prev, current];
            }
        },
    };
    const createInstance = createObjectFactory(prototype, delegatingDisposableEnumeratorProperties);
    const pairwiseEnumerator = () => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        return instance;
    };
    return () => pipe(pairwiseEnumerator(), lift);
})();
const pairwiseT = {
    pairwise,
};
const scan = /*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        reducer: none,
        current: none,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const acc = hasCurrent(this) ? getCurrent(this) : none;
            const { delegate, reducer } = this;
            if (isSome(acc) && move(delegate)) {
                try {
                    this.current = reducer(acc, getCurrent(delegate));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    const scanEnumerator = (reducer, initialValue) => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.reducer = reducer;
        instance.current = initialValue;
        return instance;
    };
    return pipe(scanEnumerator, createScanOperator(liftT));
})();
const scanT = {
    scan,
};
const skipFirst = 
/*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        skipCount: 0,
        count: 0,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const { delegate, skipCount } = this;
            for (let { count } = this; count < skipCount; count++) {
                if (!move(delegate)) {
                    break;
                }
            }
            this.count = skipCount;
            move(delegate);
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    const skipFirstEnumerator = (skipCount) => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.skipCount = skipCount;
        return instance;
    };
    return pipe(skipFirstEnumerator, createSkipFirstOperator(liftT));
})();
const skipFirstT = {
    skipFirst,
};
 /*(() => {
  const properties = {
    ...delegatingDisposableProperties,
    delegate: none as unknown as EnumeratorLike,
    maxCount: 0 as number,
    count: 0 as number,
  };

  const prototype = {
     ...delegatingDisposableEnumeratorPrototype,
    get [EnumeratorLike_current](): unknown {
      const self = this as unknown as typeof properties;
      return self.delegate[EnumeratorLike_current]
    },
    get [EnumeratorLike_hasCurrent](): boolean {
      const self = this as unknown as typeof properties;
      return self.delegate[EnumeratorLike_hasCurrent]
    },
    [InteractiveSourceLike_move](
      this: typeof properties & MutableEnumeratorLike,
    ) {
      if (this.count < this.maxCount) {
        this.count++;
        pipe(this.delegate, move);
      } else {
        pipe(this, dispose());
      }
    },
  };

  const createInstance = createObjectFactory(prototype, properties);

  const takeFirstEnumerator = <T>(maxCount: number) => (delegate: EnumeratorLike<T>): EnumeratorLike<T> => {
    const instance = createInstance();
    delegatingDisposableInit(instance, delegate);
    instance.delegate = delegate;
    instance.maxCount = maxCount;
    return instance as EnumeratorLike<T>;
  }

  return pipe(takeFirstEnumerator, createTakeFirstOperator(liftT));
})();

export const takeFirstT: TakeFirst<EnumerableLike> = {
  takeFirst,
};*/
const TContainerOf = undefined;
const toEnumerable = () => identity;
const toEnumerableT = {
    toEnumerable,
};

export { TContainerOf, distinctUntilChanged, fromEnumerable, fromEnumerableT, keep, keepT, map, mapT, onNotify, pairwise, pairwiseT, scan, scanT, skipFirst, skipFirstT, toEnumerable, toEnumerableT };
