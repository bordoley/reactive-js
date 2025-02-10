/// <reference types="./Observable.notify.d.ts" />

import { EventListenerLike_notify, } from "../../../events.js";
import { bindMethod } from "../../../functions.js";
import Observable_forEach from "./Observable.forEach.js";
const Observable_notify = (eventListener) => Observable_forEach(bindMethod(eventListener, EventListenerLike_notify));
export default Observable_notify;
