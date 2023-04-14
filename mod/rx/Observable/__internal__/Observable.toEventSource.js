/// <reference types="./Observable.toEventSource.d.ts" />

import { bindMethod, pipe } from "../../../functions.js";
import { EventListenerLike_notify, } from "../../../util.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_toEventSource = (scheduler, options = {}) => obs => {
    const eventPublisher = EventPublisher_create(options);
    pipe(obs, Observable_forEach(bindMethod(eventPublisher, EventListenerLike_notify)), Observable_subscribe(scheduler, options), Disposable_bindTo(eventPublisher));
    return eventPublisher;
};
export default Observable_toEventSource;
