/// <reference types="./EnumerableObservable.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, unsafeCast, isSome, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Enumerable_create from '../../../ix/__internal__/Enumerable/Enumerable.create.mjs';
import MutableEnumerator_mixin from '../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import Continuation_run from '../../../scheduling/__internal__/Continuation/Continuation.run.mjs';
import Scheduler_isInContinuation from '../../../scheduling/__internal__/Scheduler/Scheduler.isInContinuation.mjs';
import Disposable_add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Observer_mixin from '../Observer/Observer.mixin.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';

const EnumerableObservable_toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const typedObserverMixin = Observer_mixin();
    const EnumeratorScheduler_continuations = Symbol("EnumeratorScheduler_continuations");
    const createEnumeratorScheduler = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function EnumeratorScheduler(instance) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance[EnumeratorScheduler_continuations] = [];
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
        [EnumeratorScheduler_continuations]: none,
    }), {
        [SchedulerLike_now]: 0,
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return Scheduler_isInContinuation(this);
        },
        [SchedulerLike_requestYield]() {
            // No-Op: We yield whenever the continuation is running.
        },
        [SourceLike_move]() {
            if (!Disposable_isDisposed(this)) {
                const { [EnumeratorScheduler_continuations]: continuations } = this;
                const continuation = continuations.shift();
                if (isSome(continuation)) {
                    this[SchedulerLike_inContinuation] = true;
                    Continuation_run(continuation);
                    this[SchedulerLike_inContinuation] = false;
                }
                else {
                    pipe(this, Disposable_dispose());
                }
            }
        },
        [SchedulerLike_schedule](continuation, _) {
            pipe(this, Disposable_add(continuation));
            if (!Disposable_isDisposed(continuation)) {
                this[EnumeratorScheduler_continuations].push(continuation);
            }
        },
    }));
    const createEnumeratorObserver = createInstanceFactory(mix(include(Disposable_mixin, typedObserverMixin), function EnumeratorObserver(instance, enumerator) {
        init(Disposable_mixin, instance);
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
    return () => (obs) => Enumerable_create(() => {
        const scheduler = createEnumeratorScheduler();
        pipe(createEnumeratorObserver(scheduler), Disposable_addTo(scheduler), Sink_sourceFrom(obs));
        return scheduler;
    });
})();

export { EnumerableObservable_toEnumerable as default };
