/// <reference types="./Scheduler.schedule.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, error, isSome, pipe, isFunction } from '../../../functions.mjs';
import { ContinuationLike_run, SchedulerLike_schedule } from '../../../scheduling.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import { getOrNone, set } from '../../__internal__/CurrentScheduler.mjs';
import YieldError from '../../__internal__/YieldError.mjs';

const isYieldError = (e) => e instanceof YieldError;
const createContinuation = /*@__PURE__*/ (() => {
    const Continuation_scheduler = Symbol("Continuation_scheduler");
    const Continuation_effect = Symbol("Continuation_effect");
    return createInstanceFactory(mix(include(Disposable_mixin), function Continuation(instance, scheduler, effect) {
        init(Disposable_mixin, instance);
        instance[Continuation_scheduler] = scheduler;
        instance[Continuation_effect] = effect;
        return instance;
    }, props({
        [Continuation_scheduler]: none,
        [Continuation_effect]: none,
    }), {
        [ContinuationLike_run]() {
            if (!Disposable_isDisposed(this)) {
                let err = none;
                let yieldError = none;
                const { [Continuation_scheduler]: scheduler } = this;
                const oldCurrentScheduler = getOrNone();
                set(scheduler);
                try {
                    this[Continuation_effect]();
                }
                catch (e) {
                    if (isYieldError(e)) {
                        yieldError = e;
                    }
                    else {
                        err = error(e);
                    }
                }
                set(oldCurrentScheduler);
                if (isSome(yieldError)) {
                    pipe(scheduler, Scheduler_schedule(this, yieldError));
                }
                else {
                    pipe(this, Disposable_dispose(err));
                }
            }
        },
    }));
})();
const Scheduler_schedule = (f, options) => scheduler => {
    const continuation = isFunction(f) ? createContinuation(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
};

export { createContinuation, Scheduler_schedule as default };
