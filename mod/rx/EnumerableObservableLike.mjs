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
import { concat, decodeWithCharset, distinctUntilChanged, forEach, keep, map, merge, pairwise, reduce, scan, skipFirst, takeFirst, takeLast, takeWhile, throwIfEmpty } from './ObservableLike.mjs';
import { toFlowable as toFlowable$1, toReadonlyArray as toReadonlyArray$1 } from './RunnableObservableLike.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, isInContinuation } from '../__internal__/schedulingInternal.mjs';
import { isDisposed, dispose, add, addTo } from '../__internal__/util/DisposableLikeInternal.mjs';

const concatT = {
    concat,
};
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChangedT = { distinctUntilChanged };
const forEachT = { forEach };
const keepT = { keep };
const mapT = { map };
const mergeT = {
    concat: merge,
};
const pairwiseT = { pairwise };
const reduceT = { reduce };
const scanT = { scan };
const skipFirstT = { skipFirst };
const takeFirstT = { takeFirst };
const takeLastT = { takeLast };
const takeWhileT = { takeWhile };
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
const toHotObservable = () => v => v;
const toReadonlyArray = toReadonlyArray$1;
const toReadonlyArrayT = { toReadonlyArray };

export { concatT, decodeWithCharsetT, distinctUntilChangedT, forEachT, keepT, mapT, mergeT, pairwiseT, reduceT, scanT, skipFirstT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toEnumerable, toEnumerableT, toFlowable, toFlowableT, toHotObservable, toReadonlyArray, toReadonlyArrayT };
