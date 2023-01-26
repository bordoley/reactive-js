/// <reference types="./Observable.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, unsafeCast, isSome, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Enumerable$create from '../../../ix/__internal__/Enumerable/Enumerable.create.mjs';
import Enumerable$empty from '../../../ix/__internal__/Enumerable/Enumerable.empty.mjs';
import MutableEnumerator$mixin from '../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import Continuation$run from '../../../scheduling/__internal__/Continuation/Continuation.run.mjs';
import Scheduler$isInContinuation from '../../../scheduling/__internal__/Scheduler/Scheduler.isInContinuation.mjs';
import Disposable$add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Observer$mixin from '../Observer/Observer.mixin.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Observable$isEnumerable from './Observable.isEnumerable.mjs';

const Observable$toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    const typedObserverMixin = Observer$mixin();
    const createEnumeratorScheduler = createInstanceFactory(mix(include(Disposable$mixin, typedMutableEnumeratorMixin), function EnumeratorScheduler(instance) {
        init(Disposable$mixin, instance);
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
            return Scheduler$isInContinuation(this);
        },
        [SchedulerLike_requestYield]() {
            // No-Op: We yield whenever the continuation is running.
        },
        [SourceLike_move]() {
            if (!Disposable$isDisposed(this)) {
                const { continuations } = this;
                const continuation = continuations.shift();
                if (isSome(continuation)) {
                    this[SchedulerLike_inContinuation] = true;
                    Continuation$run(continuation);
                    this[SchedulerLike_inContinuation] = false;
                }
                else {
                    pipe(this, Disposable$dispose());
                }
            }
        },
        [SchedulerLike_schedule](continuation, _) {
            pipe(this, Disposable$add(continuation));
            if (!Disposable$isDisposed(continuation)) {
                this.continuations.push(continuation);
            }
        },
    }));
    const createEnumeratorObserver = createInstanceFactory(mix(include(Disposable$mixin, typedObserverMixin), function EnumeratorObserver(instance, enumerator) {
        init(Disposable$mixin, instance);
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
    return () => (obs) => Observable$isEnumerable(obs)
        ? Enumerable$create(() => {
            const scheduler = createEnumeratorScheduler();
            pipe(createEnumeratorObserver(scheduler), Disposable$addTo(scheduler), Sink$sourceFrom(obs));
            return scheduler;
        })
        : Enumerable$empty();
})();

export { Observable$toEnumerable as default };
