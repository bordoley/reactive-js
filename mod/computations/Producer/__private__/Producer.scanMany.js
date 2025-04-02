/// <reference types="./Producer.scanMany.d.ts" />

import { ComputationLike_isPure, EventSourceLike_subscribe, } from "../../../computations.js";
import { bindMethod, invoke, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { EventListenerLike_notify } from "../../../utils.js";
import Broadcaster_toProducer from "../../Broadcaster/__private__/Broadcaster.toProducer.js";
import Computation_isPure from "../../Computation/__private__/Computation.isPure.js";
import * as Publisher from "../../Publisher.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_switchAll from "./Producer.switchAll.js";
import Producer_withLatestFrom from "./Producer.withLatestFrom.js";
const Producer_scanMany = ((scanner, initialValue, innerType) => (source) => DeferredEventSource.create((consumer) => {
    const accFeedbackPublisher = pipe(Publisher.create(), Disposable.addTo(consumer));
    const feedbackSource = pipe(accFeedbackPublisher, Broadcaster_toProducer());
    pipe(source, Producer_withLatestFrom(feedbackSource, (next, acc) => scanner(acc, next)), Producer_switchAll({
        [ComputationLike_isPure]: false,
    }), Producer_forEach(bindMethod(accFeedbackPublisher, EventListenerLike_notify)), invoke(EventSourceLike_subscribe, consumer));
    accFeedbackPublisher[EventListenerLike_notify](initialValue());
}, {
    [ComputationLike_isPure]: Computation_isPure(source) && Computation_isPure(innerType ?? {}),
}));
export default Producer_scanMany;
