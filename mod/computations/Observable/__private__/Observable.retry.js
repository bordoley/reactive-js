/// <reference types="./Observable.retry.d.ts" />

import { EventSourceLike_subscribe, } from "../../../computations.js";
import { alwaysTrue, error, isNumber, pipe } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import { DisposableLike_dispose, SinkLike_isCompleted, } from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_concat from "./Observable.concat.js";
import Observable_delay from "./Observable.delay.js";
const Observable_retry = ((shouldRetry) => (src) => DeferredEventSource.create((consumer) => {
    const retryFunction = shouldRetry ?? alwaysTrue;
    let count = 0;
    const onDelegateObserverError = (e) => {
        const consumerIsCompleted = consumer[SinkLike_isCompleted];
        if (consumerIsCompleted) {
            return;
        }
        count++;
        try {
            const retryConfig = retryFunction(count, e);
            const delay = isNumber(retryConfig)
                ? clampPositiveInteger(retryConfig)
                : 0;
            const shouldRetry = delay > 0 || retryConfig === true;
            if (shouldRetry && delay > 0) {
                Observable_concat(Observable_delay(delay), src)[EventSourceLike_subscribe](createDelegateObserver());
            }
            else if (shouldRetry) {
                src[EventSourceLike_subscribe](createDelegateObserver());
            }
            else {
                consumer[DisposableLike_dispose](e);
            }
        }
        catch (eRetry) {
            consumer[DisposableLike_dispose](error([e, eRetry]));
        }
    };
    const createDelegateObserver = () => pipe(consumer, Observer.createDelegatingCatchError, DisposableContainer.onError(onDelegateObserverError));
    src[EventSourceLike_subscribe](createDelegateObserver());
}, src));
export default Observable_retry;
