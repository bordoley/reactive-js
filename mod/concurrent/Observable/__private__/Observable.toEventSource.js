/// <reference types="./Observable.toEventSource.d.ts" />

import { SinkLike_notify } from "../../../events.js";
import * as EventSource from "../../../events/EventSource.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_toEventSource = (scheduler, options) => (obs) => EventSource.create(listener => pipe(obs, Observable_forEach(bindMethod(listener, SinkLike_notify)), Observable_subscribe(scheduler, options), Disposable.bindTo(listener)));
export default Observable_toEventSource;
