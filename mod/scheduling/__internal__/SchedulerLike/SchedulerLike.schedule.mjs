/// <reference types="./SchedulerLike.schedule.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, isSome, pipe, isFunction } from '../../../functions.mjs';
import { ContinuationLike_run, SchedulerLike_schedule } from '../../../scheduling.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { getOrNone, set } from '../CurrentScheduler.mjs';
import YieldError from '../YieldError.mjs';

const isYieldError = (e) => e instanceof YieldError;
const createContinuation = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(DisposableLike__mixin), function Continuation(instance, scheduler, f) {
        init(DisposableLike__mixin, instance);
        instance.scheduler = scheduler;
        instance.f = f;
        return instance;
    }, props({
        scheduler: none,
        f: none,
    }), {
        [ContinuationLike_run]() {
            if (!DisposableLike__isDisposed(this)) {
                let error = none;
                let yieldError = none;
                const { scheduler } = this;
                const oldCurrentScheduler = getOrNone();
                set(scheduler);
                try {
                    this.f();
                }
                catch (cause) {
                    if (isYieldError(cause)) {
                        yieldError = cause;
                    }
                    else {
                        error = { cause };
                    }
                }
                set(oldCurrentScheduler);
                if (isSome(yieldError)) {
                    pipe(scheduler, SchedulerLike__schedule(this, yieldError));
                }
                else {
                    pipe(this, DisposableLike__dispose(error));
                }
            }
        },
    }));
})();
const SchedulerLike__schedule = (f, options) => scheduler => {
    const continuation = isFunction(f) ? createContinuation(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
};

export { createContinuation, SchedulerLike__schedule as default };
