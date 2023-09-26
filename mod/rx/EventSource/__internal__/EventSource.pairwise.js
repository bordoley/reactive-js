/// <reference types="./EventSource.pairwise.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe, returns } from "../../../functions.js";
import { EventListenerLike_isErrorSafe, } from "../../../rx.js";
import Sink_pairwiseMixin from "../../Sink/__internal__/Sink.pairwiseMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_pairwise = 
/*@__PURE__*/ (() => {
    const createPairwiseEventListener = (() => createInstanceFactory(mix(include(Sink_pairwiseMixin()), function PairwiseEventListener(instance, delegate) {
        init(Sink_pairwiseMixin(), instance, delegate);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: false,
    })))();
    return pipe(createPairwiseEventListener, EventSource_lift, returns);
})();
export default EventSource_pairwise;
