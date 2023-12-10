/// <reference types="./Observable.subscribeWithConfig.d.ts" />

import { ObservableLike_observe, } from "../../../concurrent.js";
import Observer_create from "../../Observer/__private__/Observer.create.js";
const Observable_subscribeWithConfig = (scheduler, config) => (observable) => {
    const observer = Observer_create(scheduler, config);
    observable[ObservableLike_observe](observer);
    return observer;
};
export default Observable_subscribeWithConfig;
