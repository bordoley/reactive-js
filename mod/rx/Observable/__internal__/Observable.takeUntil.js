/// <reference types="./Observable.takeUntil.d.ts" />

import { pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../rx.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../../util.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";
import Observable_takeFirst from "./Observable.takeFirst.js";
const Observable_takeUntil = ((notifier) => {
    const operator = (delegate) => pipe(Observer_createWithDelegate(delegate), Disposable_bindTo(delegate), Disposable_bindTo(pipe(notifier, Observable_takeFirst(), Observable_subscribeWithCapacityAndBackpressureStrategy(delegate[DispatcherLike_scheduler], delegate[QueueableLike_capacity], delegate[QueueableLike_backpressureStrategy]))));
    return pipe(operator, Observable_lift(notifier[ObservableLike_isEnumerable], notifier[ObservableLike_isRunnable]));
});
export default Observable_takeUntil;
