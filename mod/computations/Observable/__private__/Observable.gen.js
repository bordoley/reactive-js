/// <reference types="./Observable.gen.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { bindMethod, error, none, pipe, pipeLazy, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Iterator from "../../../utils/__internal__/Iterator.js";
import { ContinuationContextLike_yield, DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, SchedulerLike_schedule, SchedulerLike_shouldYield, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const genFactory = (factory, options) => (observer) => {
    const { delay = 0, delayStart = false } = options ?? {};
    const enumerator = pipe(factory(), Iterator.toEnumerator(), Disposable.addTo(observer));
    let isActive = false;
    const continue_ = (ctx) => {
        if (isActive) {
            return;
        }
        isActive = true;
        let shouldYield = false;
        let isReady = observer[FlowControllerLike_isReady];
        let isCompleted = observer[SinkLike_isCompleted];
        try {
            while (isReady &&
                !isCompleted &&
                !shouldYield &&
                enumerator[EnumeratorLike_moveNext]()) {
                const value = enumerator[EnumeratorLike_current];
                observer[EventListenerLike_notify](value);
                isReady = observer[FlowControllerLike_isReady];
                isCompleted = observer[SinkLike_isCompleted];
                // Only request a yield if the observer is ready
                // to accept more notifications, but the scheduler
                // has requested a yield or we want to intentionally delay
                shouldYield =
                    (delay > 0 || observer[SchedulerLike_shouldYield]) &&
                        isReady &&
                        !isCompleted;
            }
            if (!shouldYield && isReady && !isCompleted) {
                observer[SinkLike_complete]();
            }
        }
        catch (e) {
            observer[DisposableLike_dispose](error(e));
            isReady = false;
        }
        isActive = false;
        if (shouldYield) {
            ctx[ContinuationContextLike_yield](delay);
            // Will throw a yield exception and we'll exit the continuation
        }
        // Otherwise return and let the onReadySink reschedule
        // the continuations
    };
    observer[FlowControllerLike_addOnReadyListener](pipeLazy(continue_, bindMethod(observer, SchedulerLike_schedule), Disposable.addTo(observer)));
    pipe(observer[SchedulerLike_schedule](continue_, delayStart ? options : none), Disposable.addTo(observer));
};
export const Observable_gen = (factory => DeferredSource.create(genFactory(factory), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
}));
export const Observable_genPure = (factory => DeferredSource.create(genFactory(factory), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: true,
}));
