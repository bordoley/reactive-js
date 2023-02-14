/// <reference types="./Continuation.create.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, isNone, raiseWithDebugMessage, newInstance, error, isSome, pipe } from '../../../functions.mjs';
import { SchedulerLike_shouldYield, ContinuationLike_run, SchedulerLike_schedule } from '../../../scheduling.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';

class YieldError {
    constructor(delay) {
        this.delay = delay;
    }
}
const Continuation_effect = Symbol("Continuation_effect");
const Continuation_scheduler = Symbol("Continuation_scheduler");
let currentContinuation = none;
const Continuation__yield = (delay = 0) => {
    const continuation = isNone(currentContinuation)
        ? raiseWithDebugMessage("not in continuation")
        : currentContinuation;
    if (delay > 0 ||
        continuation[Continuation_scheduler][SchedulerLike_shouldYield]) {
        throw newInstance(YieldError, delay);
    }
};
const Continuation_create = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin), function Continuation(instance, scheduler, effect) {
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
            const oldContinuation = currentContinuation;
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            currentContinuation = this;
            try {
                this[Continuation_effect]();
            }
            catch (e) {
                if (e instanceof YieldError) {
                    yieldError = e;
                }
                else {
                    err = error(e);
                }
            }
            currentContinuation = oldContinuation;
            if (isSome(yieldError)) {
                this[Continuation_scheduler][SchedulerLike_schedule](this, yieldError);
            }
            else {
                pipe(this, Disposable_dispose(err));
            }
        }
    },
})))();

export { Continuation__yield, Continuation_create as default };
