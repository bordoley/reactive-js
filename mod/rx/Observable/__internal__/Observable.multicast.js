/// <reference types="./Observable.multicast.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { bindMethod, isFunction, pipe, } from "../../../functions.js";
import { PublisherLike_publish, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithCapacity from "./Observable.subscribeWithCapacity.js";
const Observable_multicast = (schedulerOrFactory, options = {}) => observable => {
    const { capacity = MAX_SAFE_INTEGER, replay = 0 } = options;
    const publisher = Publisher_create({ replay });
    const scheduler = isFunction(schedulerOrFactory)
        ? pipe(schedulerOrFactory(), Disposable_addTo(publisher))
        : schedulerOrFactory;
    pipe(observable, Observable_forEach(bindMethod(publisher, PublisherLike_publish)), Observable_subscribeWithCapacity(scheduler, capacity), Disposable_bindTo(publisher));
    return publisher;
};
export default Observable_multicast;
