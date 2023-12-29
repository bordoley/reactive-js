/// <reference types="./EventSource.pairwise.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EventListenerLike_isErrorSafe, } from "../../../events.js";
import { pipe, returns } from "../../../functions.js";
import PairwiseSinkMixin from "../../__mixins__/PairwiseSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_pairwise = /*@__PURE__*/ (() => {
    const createPairwiseEventListener = createInstanceFactory(mix(include(PairwiseSinkMixin()), function PairwiseEventListener(instance, delegate) {
        init(PairwiseSinkMixin(), instance, delegate);
        return instance;
    }, props(), {
        [EventListenerLike_isErrorSafe]: false,
    }));
    return pipe(createPairwiseEventListener, EventSource_lift, returns);
})();
export default EventSource_pairwise;
