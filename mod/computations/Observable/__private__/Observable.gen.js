/// <reference types="./Observable.gen.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { bindMethod, error, pipe, pipeLazy, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Iterator from "../../../utils/__internal__/Iterator.js";
import { DisposableLike_dispose, EnumeratorLike_current, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, SchedulerLike_schedule, SchedulerLike_shouldYield, SinkLike_complete, SinkLike_isCompleted, SyncEnumeratorLike_moveNext, YieldDelay, } from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const genFactory = (factory) => (observer) => {
    const enumerator = pipe(factory(observer), Iterator.toSyncEnumerator(), Disposable.addTo(observer));
    let isActive = false;
    function* continue_() {
        if (isActive) {
            return;
        }
        isActive = true;
        let isReady = observer[FlowControllerLike_isReady];
        let isCompleted = observer[SinkLike_isCompleted];
        try {
            while (isReady &&
                !isCompleted &&
                enumerator[SyncEnumeratorLike_moveNext]()) {
                const value = enumerator[EnumeratorLike_current];
                if (value instanceof YieldDelay) {
                    yield value;
                }
                else {
                    observer[EventListenerLike_notify](value);
                    isReady = observer[FlowControllerLike_isReady];
                    isCompleted = observer[SinkLike_isCompleted];
                    // Only request a yield if the observer is ready
                    // to accept more notifications, but the scheduler
                    // has requested a yield or we want to intentionally delay
                    const shouldYield = isReady && !isCompleted && observer[SchedulerLike_shouldYield];
                    if (shouldYield) {
                        yield;
                    }
                }
                isReady = observer[FlowControllerLike_isReady];
                isCompleted = observer[SinkLike_isCompleted];
            }
            if (isReady && !isCompleted) {
                observer[SinkLike_complete]();
            }
        }
        catch (e) {
            observer[DisposableLike_dispose](error(e));
            isReady = false;
        }
        isActive = false;
        // let the onReadySink reschedule the continuations
    }
    observer[FlowControllerLike_addOnReadyListener](pipeLazy(continue_, bindMethod(observer, SchedulerLike_schedule), Disposable.addTo(observer)));
    pipe(observer[SchedulerLike_schedule](continue_), Disposable.addTo(observer));
};
export const Observable_gen = (factory => DeferredEventSource.create(genFactory(factory), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
}));
export const Observable_genPure = (factory => DeferredEventSource.create(genFactory(factory), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
}));
