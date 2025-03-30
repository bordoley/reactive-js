/// <reference types="./Runnable.gen.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { error, newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Iterator from "../../../utils/__internal__/Iterator.js";
import { DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_moveNext, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
class GenRunnable {
    f;
    [ComputationLike_isPure];
    constructor(f, config) {
        this.f = f;
        this[ComputationLike_isPure] = Computation.isPure(config ?? {});
    }
    [RunnableLike_eval](sink) {
        const enumerator = pipe(this.f(), Iterator.toEnumerator(), Disposable.addTo(sink));
        let isCompleted = sink[SinkLike_isCompleted];
        try {
            while (!isCompleted && enumerator[EnumeratorLike_moveNext]()) {
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
