/// <reference types="./Observable.toEventSource.d.ts" />

import { bindMethod, pipe } from "../../../functions.js";
import { EventListenerLike_notify, } from "../../../util.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import EventSource_create from "../../../util/EventSource/__internal__/EventSource.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_toEventSource = (scheduler, options = {}) => obs => EventSource_create(publisher => pipe(obs, Observable_forEach(bindMethod(publisher, EventListenerLike_notify)), Observable_subscribe(scheduler, options), Disposable_bindTo(publisher)), options);
export default Observable_toEventSource;
