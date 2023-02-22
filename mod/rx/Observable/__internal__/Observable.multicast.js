/// <reference types="./Observable.multicast.d.ts" />

import { pipe } from "../../../functions.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Subject_create from "../../Subject/__internal__/Subject.create.js";
import Subject_publishTo from "../../Subject/__internal__/Subject.publishTo.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_multicast = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = Subject_create({ replay });
    pipe(observable, Observable_forEach(Subject_publishTo(subject)), Observable_subscribe(scheduler), Disposable_bindTo(subject));
    return subject;
};
export default Observable_multicast;
