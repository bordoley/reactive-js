/// <reference types="./Observable.subscribeWithConfig.d.ts" />

import { pipe } from "../../../functions.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
const Observable_subscribeWithConfig = (scheduler, config) => observable => pipe(Observer_create(scheduler, config), Observer_sourceFrom(observable));
export default Observable_subscribeWithConfig;
