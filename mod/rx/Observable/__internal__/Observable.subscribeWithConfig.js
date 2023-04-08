/// <reference types="./Observable.subscribeWithConfig.d.ts" />

import { pipe } from "../../../functions.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";
import sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
const Observable_subscribeWithConfig = (scheduler, config) => observable => pipe(Observer_create(scheduler, config), Disposable_addToIgnoringChildErrors(scheduler), sourceFrom(observable));
export default Observable_subscribeWithConfig;
