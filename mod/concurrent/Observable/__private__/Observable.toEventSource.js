/// <reference types="./Observable.toEventSource.d.ts" />

import * as EventSource from "../../../events/EventSource.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_notify from "./Observable.notify.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_toEventSource = (scheduler, options) => (obs) => EventSource.create(listener => pipe(obs, Observable_notify(listener), Observable_subscribe(scheduler, options), Disposable.bindTo(listener)));
export default Observable_toEventSource;
