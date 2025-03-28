/// <reference types="./Producer.genAsyncEnumerator.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { error, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { AsyncEnumeratorLike_current, AsyncEnumeratorLike_moveNext, DisposableLike_dispose, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Source from "../../__internal__/DeferredSource.js";
const genOnSubscribe = (factory) => async (consumer) => {
    const enumerator = pipe(factory(), Disposable.addTo(consumer));
    let isActive = false;
    let hasValueToNotify = false;
    let valueToNotify = none;
    const continue_ = async () => {
        if (isActive || consumer[SinkLike_isCompleted]) {
            return;
        }
        isActive = true;
        try {
            let isReady = consumer[FlowControllerLike_isReady];
            let isCompleted = consumer[SinkLike_isCompleted];
            if (hasValueToNotify && isReady && !isCompleted) {
                consumer[EventListenerLike_notify](valueToNotify);
                isReady = consumer[FlowControllerLike_isReady];
                isCompleted = consumer[SinkLike_isCompleted];
                hasValueToNotify = false;
                valueToNotify = none;
            }
            while (isReady &&
                !isCompleted &&
                (await enumerator[AsyncEnumeratorLike_moveNext]())) {
                // Reassign because these values may change after
                // hopping the micro task queue
                isReady = consumer[FlowControllerLike_isReady];
                isCompleted = consumer[SinkLike_isCompleted];
                const value = enumerator[AsyncEnumeratorLike_current];
                if (!isReady && !isCompleted) {
                    hasValueToNotify = true;
                    valueToNotify = value;
                }
                else {
                    consumer[EventListenerLike_notify](value);
                    isReady = consumer[FlowControllerLike_isReady];
                    isCompleted = consumer[SinkLike_isCompleted];
                }
                if (!isReady || isCompleted) {
                    break;
                }
            }
            // Reassign because these values may change after
            // hopping the micro task queue
            isReady = consumer[FlowControllerLike_isReady];
            isCompleted = consumer[SinkLike_isCompleted];
            if (!hasValueToNotify || !isCompleted) {
                consumer[SinkLike_complete]();
            }
        }
        catch (e) {
            consumer[DisposableLike_dispose](error(e));
        }
        isActive = false;
        // Return and let the onReadySink reschedule
        // the continuation
    };
    consumer[FlowControllerLike_addOnReadyListener](async () => {
        await Promise.resolve();
        continue_;
    });
    await Promise.resolve();
    continue_();
};
export const Producer_genAsyncEnumerator = (factory) => Source.create(genOnSubscribe(factory), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
});
export const Producer_genPureAsyncEnumerator = (factory) => Source.create(genOnSubscribe(factory), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
});
