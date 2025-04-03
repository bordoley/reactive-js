/// <reference types="./Producer.retry.d.ts" />

import { EventSourceLike_subscribe, } from "../../../computations.js";
import { alwaysTrue, error, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { DisposableLike_dispose, SinkLike_isCompleted, } from "../../../utils.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Producer_retry = ((shouldRetry) => (src) => DeferredEventSource.create((consumer) => {
    const retryFunction = shouldRetry ?? alwaysTrue;
    let count = 0;
    const onDelegateConsumerError = (e) => {
        const consumerIsCompleted = consumer[SinkLike_isCompleted];
        if (consumerIsCompleted) {
            return;
        }
        count++;
        try {
            const shouldRetry = retryFunction(count, e);
            if (shouldRetry) {
                src[EventSourceLike_subscribe](createDelegateConsumer());
            }
            else {
                consumer[DisposableLike_dispose](e);
            }
        }
        catch (eRetry) {
            consumer[DisposableLike_dispose](error([e, eRetry]));
        }
    };
    const createDelegateConsumer = () => pipe(consumer, Consumer.createDelegatingCatchError, DisposableContainer.onError(onDelegateConsumerError));
    src[EventSourceLike_subscribe](createDelegateConsumer());
}, src));
export default Producer_retry;
