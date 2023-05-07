/// <reference types="./Observable.subscribeWithConfig.d.ts" />

import { ObservableLike_observe } from "../../../rx.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";
const Observable_subscribeWithConfig = (scheduler, config) => observable => {
    const observer = Observer_create(scheduler, config);
    observable[ObservableLike_observe](observer);
    return observer;
};
export default Observable_subscribeWithConfig;
