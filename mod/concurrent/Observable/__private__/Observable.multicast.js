/// <reference types="./Observable.multicast.d.ts" />

import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Subject from "../../Subject.js";
import Observable_notify from "./Observable.notify.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_multicast = (scheduler, options = {}) => observable => {
    const subject = Subject.create(options);
    pipe(observable, Observable_notify(subject), Observable_subscribe(scheduler, options), Disposable.bindTo(subject));
    return subject;
};
export default Observable_multicast;
