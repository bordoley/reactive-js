/// <reference types="./Observable.multicast.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { bindMethod, isFunction, pipe, } from "../../../functions.js";
import { SubjectLike_publish, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Subject_create from "../../Subject/__internal__/Subject.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithMaxBufferSize from "./Observable.subscribeWithMaxBufferSize.js";
const Observable_multicast = (schedulerOrFactory, options = {}) => observable => {
    const { maxBufferSize = MAX_SAFE_INTEGER, replay = 0 } = options;
    const subject = Subject_create({ replay });
    const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(subject))
        : schedulerOrFactory;
    pipe(observable, Observable_forEach(bindMethod(subject, SubjectLike_publish)), Observable_subscribeWithMaxBufferSize(scheduler, maxBufferSize), Disposable_bindTo(subject));
    return subject;
};
export default Observable_multicast;
