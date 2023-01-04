/// <reference types="./ObservableLike.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, unsafeCast, isSome, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import EnumerableLike__create from '../../../ix/__internal__/EnumerableLike/EnumerableLike.create.mjs';
import EnumerableLike__empty from '../../../ix/__internal__/EnumerableLike/EnumerableLike.empty.mjs';
import MutableEnumeratorLike__mixin from '../../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import { run } from '../../../scheduling/ContinuationLike.mjs';
import { isInContinuation } from '../../../scheduling/SchedulerLike.mjs';
import { isDisposed, dispose, add, addTo } from '../../../util/DisposableLike.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { sourceFrom } from '../../SinkLike.mjs';
import ObserverLike__mixin from '../ObserverLike/ObserverLike.mixin.mjs';
import ObservableLike__isEnumerable from './ObservableLike.isEnumerable.mjs';

const ObservableLike__toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    const typedObserverMixin = ObserverLike__mixin();
    const createEnumeratorScheduler = createInstanceFactory(mix(include(DisposableLike__mixin, typedMutableEnumeratorMixin), function EnumeratorScheduler(instance) {
        init(DisposableLike__mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.continuations = [];
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
        continuations: none,
    }), {
        [SchedulerLike_now]: 0,
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return isInContinuation(this);
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
    }));
    const createEnumeratorObserver = createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function EnumeratorObserver(instance, enumerator) {
        init(DisposableLike__mixin, instance);
        init(typedObserverMixin, instance, enumerator);
        instance.enumerator = enumerator;
        return instance;
    }, props({
        enumerator: none,
    }), {
        [SinkLike_notify](next) {
            this.enumerator[EnumeratorLike_current] = next;
        },
    }));
    return () => (obs) => ObservableLike__isEnumerable(obs)
        ? EnumerableLike__create(() => {
            const scheduler = createEnumeratorScheduler();
            pipe(createEnumeratorObserver(scheduler), addTo(scheduler), sourceFrom(obs));
            return scheduler;
        })
        : EnumerableLike__empty();
})();

export { ObservableLike__toEnumerable as default };
