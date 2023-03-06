/// <reference types="./Continuation.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, isNone, isSome, newInstance, none, pipe, raiseWithDebugMessage, } from "../../../functions.js";
import { ContinuationLike_run, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
class YieldError {
    constructor(delay) {
        this.delay = delay;
    }
}
const Continuation_effect = Symbol("Continuation_effect");
const Continuation_scheduler = Symbol("Continuation_scheduler");
let currentContinuation = none;
export const Continuation__yield = (delay = 0) => {
    const continuation = isNone(currentContinuation)
        ? raiseWithDebugMessage("not in continuation")
        : currentContinuation;
    if (delay > 0 ||
        continuation[Continuation_scheduler][SchedulerLike_shouldYield]) {
        throw newInstance(YieldError, delay);
    }
};
export const Continuation__now = () => {
    const continuation = isNone(currentContinuation)
        ? raiseWithDebugMessage("not in continuation")
        : currentContinuation;
    return continuation[Continuation_scheduler][SchedulerLike_now];
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
        if (!this[DisposableLike_isDisposed]) {
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
export default Continuation_create;
