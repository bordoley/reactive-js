/// <reference types="./Observable.subscribe.d.ts" />

import { pipe } from "../../../functions.js";
import * as DefaultScheduler from "../../../utils/DefaultScheduler.js";
import Producer_subscribe from "../../Producer/__private__/Producer.subscribe.js";
import Observable_toProducer from "./Observable.toProducer.js";
const Observable_subscribe = (options) => (observable) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    return pipe(observable, Observable_toProducer({ scheduler }), Producer_subscribe());
};
export default Observable_subscribe;
