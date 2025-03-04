/// <reference types="./Observable.multicast.d.ts" />

import * as Computation from "../../../computations/Computation.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Subject from "../../Subject.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const ObservableModule = {
    forEach: Observable_forEach,
};
const Observable_multicast = (scheduler, options = {}) => observable => {
    const subject = Subject.create(options);
    pipe(observable, Computation.notify(ObservableModule)(subject), Observable_subscribe(scheduler, options), Disposable.bindTo(subject));
    return subject;
};
export default Observable_multicast;
