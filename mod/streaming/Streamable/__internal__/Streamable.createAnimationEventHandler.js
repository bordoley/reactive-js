/// <reference types="./Streamable.createAnimationEventHandler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe } from "../../../functions.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import { EventSourceLike_addEventListener, KeyedCollectionLike_get, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Pauseable_delegatingMixin from "../../../util/Pauseable/__internal__/Pauseable.delegatingMixin.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import Streamable_createAnimationGroupEventHandler from "./Streamable.createAnimationGroupEventHandler.js";
const createAnimationEventHandlerStream = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Stream_delegatingMixin(), Pauseable_delegatingMixin), function AnimationEventHandlerStream(instance, animation, creationOptions, scheduler, streamOptions) {
        const streamDelegate = Streamable_createAnimationGroupEventHandler({ v: animation }, creationOptions)[StreamableLike_stream](scheduler, streamOptions);
        init(Stream_delegatingMixin(), instance, streamDelegate);
        init(Pauseable_delegatingMixin, instance, streamDelegate);
        const animationEventsPublisher = streamDelegate[KeyedCollectionLike_get]("v");
        const publisher = pipe(EventPublisher_create(), Disposable_addTo(instance));
        instance.publisher = publisher;
        animationEventsPublisher[EventSourceLike_addEventListener](publisher);
        streamDelegate[EventSourceLike_addEventListener](publisher);
        return instance;
    }, props({
        publisher: none,
    }), {
        [EventSourceLike_addEventListener](listener) {
            this.publisher[EventSourceLike_addEventListener](listener);
        },
    }));
})();
const Streamable_createAnimationEventHandler = ((animation, createOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => createAnimationEventHandlerStream(animation, createOptions, scheduler, options),
}));
export default Streamable_createAnimationEventHandler;
