/// <reference types="./Runnable.gen.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, } from "../../../computations.js";
import { error, newInstance, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Iterator from "../../../utils/__internal__/Iterator.js";
import { DisposableLike_dispose, EnumeratorLike_current, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, SyncEnumeratorLike_moveNext, } from "../../../utils.js";
class GenRunnable {
    f;
    [ComputationLike_isPure];
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isSynchronous] = true;
    constructor(f, config) {
        this.f = f;
        this[ComputationLike_isPure] = config?.[ComputationLike_isPure];
    }
    [RunnableLike_eval](sink) {
        const enumerator = pipe(this.f(), Iterator.toSyncEnumerator(), Disposable.addTo(sink));
        let isCompleted = sink[SinkLike_isCompleted];
        try {
            while (!isCompleted && enumerator[SyncEnumeratorLike_moveNext]()) {
                const value = enumerator[EnumeratorLike_current];
                sink[EventListenerLike_notify](value);
                isCompleted = sink[SinkLike_isCompleted];
                if (isCompleted) {
                    break;
                }
            }
            // Reassign because these values may change after
            // hopping the micro task queue
            isCompleted = sink[SinkLike_isCompleted];
            if (!isCompleted) {
                sink[SinkLike_complete]();
                isCompleted = true;
            }
        }
        catch (e) {
            sink[DisposableLike_dispose](error(e));
        }
    }
}
export const Runnable_gen = ((factory) => newInstance((GenRunnable), factory, {
    [ComputationLike_isPure]: false,
}));
export const Runnable_genPure = ((factory) => newInstance((GenRunnable), factory, {
    [ComputationLike_isPure]: false,
}));
