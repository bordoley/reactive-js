/// <reference types="./Producer.gen.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { error, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Iterator from "../../../utils/__internal__/Iterator.js";
import { DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, QueueableLike_addOnReadyListener, QueueableLike_isReady, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Source from "../../__internal__/DeferredSource.js";
const genFactory = (factory) => async (consumer) => {
    const enumerator = pipe(factory(), Iterator.toEnumerator());
    pipe(enumerator, Disposable.addTo(consumer));
    let isActive = false;
    const continue_ = async () => {
        if (isActive) {
            return;
        }
        isActive = true;
        let isReady = consumer[QueueableLike_isReady];
        let isCompleted = consumer[SinkLike_isCompleted];
        try {
            while (isReady &&
                !isCompleted &&
                enumerator[EnumeratorLike_moveNext]()) {
                const value = enumerator[EnumeratorLike_current];
                consumer[EventListenerLike_notify](value);
                isReady = consumer[QueueableLike_isReady];
                isCompleted = consumer[SinkLike_isCompleted];
                if (!isReady || isCompleted) {
                    break;
                }
                await Promise.resolve();
            }
            // Reassign because these values may change after
            // hopping the micro task queue
            isReady = consumer[QueueableLike_isReady];
            isCompleted = consumer[SinkLike_isCompleted];
            if (isReady || isCompleted) {
                consumer[SinkLike_complete]();
                isReady = false;
                isCompleted = true;
            }
            isActive = false;
        }
        catch (e) {
            consumer[DisposableLike_dispose](error(e));
            isReady = false;
        }
        // Return and let the onReadySink reschedule
        // the continuation
    };
    consumer[QueueableLike_addOnReadyListener](async () => {
        await Promise.resolve();
        continue_;
    });
    await Promise.resolve();
    continue_();
};
export const Producer_gen = (factory => Source.create(genFactory(factory), {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
}));
export const Producer_genPure = (factory => Source.create(genFactory(factory), {
    [ComputationLike_isPure]: true,
    [ComputationLike_isSynchronous]: false,
}));
