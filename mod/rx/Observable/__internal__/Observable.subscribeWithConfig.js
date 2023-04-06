/// <reference types="./Observable.subscribeWithConfig.d.ts" />

import { pipe } from "../../../functions.js";
import { DispatcherLike_scheduler } from "../../../rx.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Observer_create from "../../Observer/__internal__/Observer.create.js";
import sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
const Observable_subscribeWithConfig = (config) => observable => pipe(Observer_create(config[DispatcherLike_scheduler], config[BufferLike_capacity], config[QueueableLike_backpressureStrategy]), Disposable_addToIgnoringChildErrors(config[DispatcherLike_scheduler]), sourceFrom(observable));
export default Observable_subscribeWithConfig;
