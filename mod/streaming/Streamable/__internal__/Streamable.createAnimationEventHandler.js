/// <reference types="./Streamable.createAnimationEventHandler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe } from "../../../functions.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import { EventEmitterLike_addEventListener, KeyedCollectionLike_get, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import Streamable_createAnimationGroupEventHandler from "./Streamable.createAnimationGroupEventHandler.js";
const createAnimationEventHandlerStream = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Stream_delegatingMixin(), Delegating_mixin()), function AnimationEventHandlerStream(instance, animation, creationOptions, scheduler, streamOptions) {
        const streamDelegate = Streamable_createAnimationGroupEventHandler({ v: animation }, creationOptions)[StreamableLike_stream](scheduler, streamOptions);
        init(Stream_delegatingMixin(), instance, streamDelegate);
        init(Delegating_mixin(), instance, streamDelegate);
        const animationEventsPublisher = streamDelegate[KeyedCollectionLike_get]("v");
        const publisher = pipe(EventPublisher_create(), Disposable_addTo(instance));
        instance.publisher = publisher;
        animationEventsPublisher[EventEmitterLike_addEventListener](publisher);
        streamDelegate[EventEmitterLike_addEventListener](publisher);
        return instance;
    }, props({
        publisher: none,
    }), {
        [EventEmitterLike_addEventListener](listener) {
            this.publisher[EventEmitterLike_addEventListener](listener);
        },
    }));
})();
const Streamable_createAnimationEventHandler = ((animation, createOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => createAnimationEventHandlerStream(animation, createOptions, scheduler, options),
}));
export default Streamable_createAnimationEventHandler;
