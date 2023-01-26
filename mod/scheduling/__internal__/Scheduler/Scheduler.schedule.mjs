/// <reference types="./Scheduler.schedule.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, error, isSome, pipe, isFunction } from '../../../functions.mjs';
import { ContinuationLike_run, SchedulerLike_schedule } from '../../../scheduling.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import { getOrNone, set } from '../CurrentScheduler.mjs';
import YieldError from '../YieldError.mjs';

const isYieldError = (e) => e instanceof YieldError;
const createContinuation = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin), function Continuation(instance, scheduler, f) {
        init(Disposable_mixin, instance);
        instance.scheduler = scheduler;
        instance.f = f;
        return instance;
    }, props({
        scheduler: none,
        f: none,
    }), {
        [ContinuationLike_run]() {
            if (!Disposable_isDisposed(this)) {
                let err = none;
                let yieldError = none;
                const { scheduler } = this;
                const oldCurrentScheduler = getOrNone();
                set(scheduler);
                try {
                    this.f();
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
