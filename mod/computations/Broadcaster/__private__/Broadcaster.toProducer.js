/// <reference types="./Broadcaster.toProducer.d.ts" />

import { SourceLike_subscribe, } from "../../../computations.js";
import { bindMethod, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { EventListenerLike_notify, PauseableLike_pause, PauseableLike_resume, QueueableLike_addOnReadyListener, QueueableLike_isReady, SinkLike_complete, } from "../../../utils.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_isPauseable from "./Broadcaster.isPauseable.js";
const Broadcaster_toProducer = 
/*@__PURE__*/ returns((src) => DeferredSource.create((consumer) => {
    if (!Broadcaster_isPauseable(src)) {
        src[SourceLike_subscribe](consumer);
        return;
    }
    src[PauseableLike_pause]();
    consumer[QueueableLike_addOnReadyListener](bindMethod(src, PauseableLike_resume));
    pipe(src, Broadcaster_addEventHandler(v => {
        consumer[EventListenerLike_notify](v);
        if (!consumer[QueueableLike_isReady]) {
            src[PauseableLike_pause]();
        }
    }), DisposableContainer.onComplete(bindMethod(consumer, SinkLike_complete)), Disposable.addTo(consumer));
    if (consumer[QueueableLike_isReady]) {
        src[PauseableLike_resume]();
    }
}));
export default Broadcaster_toProducer;
