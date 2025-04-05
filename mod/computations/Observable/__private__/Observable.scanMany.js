/// <reference types="./Observable.scanMany.d.ts" />

import { ComputationLike_isPure, EventSourceLike_subscribe, } from "../../../computations.js";
import { bindMethod, invoke, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { EventListenerLike_notify } from "../../../utils.js";
import Broadcaster_toObservable from "../../Broadcaster/__private__/Broadcaster.toObservable.js";
import Computation_isPure from "../../Computation/__private__/Computation.isPure.js";
import * as Publisher from "../../Publisher.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_switchAll from "./Observable.switchAll.js";
import Observable_withLatestFrom from "./Observable.withLatestFrom.js";
const Observable_scanMany = ((scanner, initialValue, innerType) => (source) => DeferredEventSource.create((observer) => {
    const accFeedbackPublisher = pipe(Publisher.create(), Disposable.addTo(observer));
    const feedbackSource = pipe(accFeedbackPublisher, Broadcaster_toObservable());
    pipe(source, Observable_withLatestFrom(feedbackSource, (next, acc) => scanner(acc, next)), Observable_switchAll({
        [ComputationLike_isPure]: false,
    }), Observable_forEach(bindMethod(accFeedbackPublisher, EventListenerLike_notify)), invoke(EventSourceLike_subscribe, observer));
    accFeedbackPublisher[EventListenerLike_notify](initialValue());
}, {
    [ComputationLike_isPure]: Computation_isPure(source) && Computation_isPure(innerType ?? {}),
}));
export default Observable_scanMany;
