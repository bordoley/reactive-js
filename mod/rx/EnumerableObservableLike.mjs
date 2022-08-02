/// <reference types="./EnumerableObservableLike.d.ts" />
import { observerMixin } from '../__internal__/scheduling/ObserverLikeMixin.mjs';
import { disposableMixin } from '../__internal__/util/DisposableLikeMixins.mjs';
import { enumeratorMixin } from '../__internal__/util/EnumeratorLikeMixin.mjs';
import { clazz, init, mixWith, createObjectFactory } from '../__internal__/util/Object.mjs';
import { pipe, none, isSome } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../scheduling.mjs';
import '../scheduling/SchedulerLike.mjs';
import { SourceLike_move, SinkLike_notify, EnumeratorLike_current } from '../util.mjs';
import { run } from '../util/ContinuationLike.mjs';
import '../util/DisposableLike.mjs';
import { sourceFrom } from '../util/SinkLike.mjs';
import { concat as concat$1, decodeWithCharset as decodeWithCharset$1, distinctUntilChanged as distinctUntilChanged$1, forEach as forEach$1, keep as keep$1, map as map$1, merge as merge$1, pairwise as pairwise$1, reduce as reduce$1, scan as scan$1, skipFirst as skipFirst$1, takeFirst as takeFirst$1, takeLast as takeLast$1, takeWhile as takeWhile$1, throwIfEmpty as throwIfEmpty$1, toFlowable as toFlowable$1, toReadonlyArray as toReadonlyArray$1 } from './RunnableObservableLike.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, isInContinuation } from '../__internal__/schedulingInternal.mjs';
import { isDisposed, dispose, add, addTo } from '../__internal__/util/DisposableLikeInternal.mjs';

const concat = concat$1;
const concatT = {
    concat,
};
const decodeWithCharset = decodeWithCharset$1;
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = distinctUntilChanged$1;
const distinctUntilChangedT = { distinctUntilChanged };
const forEach = forEach$1;
const forEachT = { forEach };
const keep = keep$1;
const keepT = { keep };
const map = map$1;
const mapT = { map };
const merge = merge$1;
const mergeT = {
    concat: merge,
};
const pairwise = pairwise$1;
const pairwiseT = { pairwise };
const reduce = reduce$1;
const reduceT = { reduce };
const scan = scan$1;
const scanT = { scan };
const skipFirst = skipFirst$1;
const skipFirstT = { skipFirst };
const takeFirst = takeFirst$1;
const takeFirstT = { takeFirst };
const takeLast = takeLast$1;
const takeLastT = { takeLast };
const takeWhile = takeWhile$1;
const takeWhileT = { takeWhile };
const throwIfEmpty = throwIfEmpty$1;
const throwIfEmptyT = {
    throwIfEmpty,
};
const toEnumerable = 
/*@__PURE__*/ (() => {
    const typedEnumeratorMixin = enumeratorMixin();
    const typedObserverMixin = observerMixin();
    const createEnumeratorScheduler = pipe(clazz(function EnumeratorScheduler() {
        init(disposableMixin, this);
        init(typedEnumeratorMixin, this);
        this.continuations = [];
    }, {
        [SchedulerLike_inContinuation]: false,
        continuations: none,
    }, {
        [SchedulerLike_now]: 0,
        get [SchedulerLike_shouldYield]() {
            const self = this;
            return isInContinuation(self);
        },
        [SchedulerLike_requestYield]() {
            // No-Op: We yield whenever the continuation is running.
        },
        [SourceLike_move]() {
            if (!isDisposed(this)) {
                const { continuations } = this;
                const continuation = continuations.shift();
                if (isSome(continuation)) {
                    this[SchedulerLike_inContinuation] = true;
                    run(continuation);
                    this[SchedulerLike_inContinuation] = false;
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
        [SchedulerLike_schedule](continuation, _) {
            pipe(this, add(continuation));
            if (!isDisposed(continuation)) {
                this.continuations.push(continuation);
            }
        },
    }), mixWith(disposableMixin, typedEnumeratorMixin), createObjectFactory());
    const createEnumeratorObserver = pipe(clazz(function EnumeratorObserver(enumerator) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, enumerator);
        this.enumerator = enumerator;
    }, {
        enumerator: none,
    }, {
        [SinkLike_notify](next) {
            this.enumerator[EnumeratorLike_current] = next;
        },
    }), mixWith(disposableMixin, typedObserverMixin), createObjectFactory());
    return () => (obs) => createEnumerable(() => {
        const scheduler = createEnumeratorScheduler();
        pipe(createEnumeratorObserver(scheduler), addTo(scheduler), sourceFrom(obs));
        return scheduler;
    });
})();
const toEnumerableT = {
    toEnumerable,
};
const toFlowable = toFlowable$1;
const toFlowableT = { toFlowable };
const toReadonlyArray = toReadonlyArray$1;
const toReadonlyArrayT = { toReadonlyArray };

export { concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, keep, keepT, map, mapT, merge, mergeT, pairwise, pairwiseT, reduce, reduceT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toFlowable, toFlowableT, toReadonlyArray, toReadonlyArrayT };
