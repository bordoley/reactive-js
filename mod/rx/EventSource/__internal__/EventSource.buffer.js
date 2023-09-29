/// <reference types="./EventSource.buffer.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, partial, pipe } from "../../../functions.js";
import { EventListenerLike_isErrorSafe, SinkLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../utils.js";
import Sink_bufferMixin from "../../Sink/__internal__/Sink.bufferMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_buffer = 
/*@__PURE__*/ (() => {
    const createBufferEventListener = (() => createInstanceFactory(mix(include(Sink_bufferMixin()), function BufferEventListener(instance, delegate, count) {
        const onComplete = (buffer) => {
            let err = none;
            try {
                delegate[SinkLike_notify](buffer);
            }
            catch (e) {
                err = error(e);
            }
            delegate[DisposableLike_dispose](err);
        };
        init(Sink_bufferMixin(), instance, delegate, count, onComplete);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return (options) => pipe(createBufferEventListener, partial(options?.count), EventSource_lift);
})();
export default EventSource_buffer;
