/// <reference types="./EventSource.toProducer.d.ts" />

import { unsafeCast } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ProducerLike_consume, } from "../../../computations.js";
import { bindMethod, isNone, newInstance, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { ConsumerLike_addOnReadyListener, ConsumerLike_isReady, EventListenerLike_notify, PauseableLike_pause, PauseableLike_resume, } from "../../../utils.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
class ProducerFromEventSource {
    e;
    [ComputationLike_isPure] = true;
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isSynchronous] = false;
    constructor(e) {
        this.e = e;
    }
    [ProducerLike_consume](consumer) {
        const src = this.e;
        if (isNone(src[PauseableLike_pause])) {
            return;
        }
        unsafeCast(src);
        src[PauseableLike_pause]();
        consumer[ConsumerLike_addOnReadyListener](bindMethod(src, PauseableLike_resume));
        pipe(src, EventSource_addEventHandler(v => {
            consumer[EventListenerLike_notify](v);
            if (!consumer[ConsumerLike_isReady]) {
                src[PauseableLike_pause]();
            }
        }), Disposable.addTo(consumer));
        if (consumer[ConsumerLike_isReady]) {
            src[PauseableLike_resume]();
        }
    }
}
const EventSource_toProducer = () => (pauseable) => newInstance(ProducerFromEventSource, pauseable);
export default EventSource_toProducer;
