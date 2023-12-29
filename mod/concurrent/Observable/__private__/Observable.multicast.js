/// <reference types="./Observable.multicast.d.ts" />

import { SinkLike_notify } from "../../../events.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Subject from "../../Subject.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_multicast = (scheduler, options = {}) => observable => {
    const subject = Subject.create(options);
    pipe(observable, Observable_forEach(bindMethod(subject, SinkLike_notify)), Observable_subscribe(scheduler, options), Disposable.bindTo(subject));
    return subject;
};
export default Observable_multicast;
