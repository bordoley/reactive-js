/// <reference types="./Observable.subscribeWithConfig.d.ts" />

import Observer_create from "../../Observer/__internal__/Observer.create.js";
import { BufferLike_capacity, ObservableLike_observe, QueueableLike_backpressureStrategy, } from "../../types.js";
const Observable_subscribeWithConfig = (scheduler, config) => (observable) => {
    const observer = Observer_create(scheduler, config);
    observable[ObservableLike_observe](observer);
    return observer;
};
export default Observable_subscribeWithConfig;
