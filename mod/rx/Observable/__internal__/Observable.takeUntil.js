/// <reference types="./Observable.takeUntil.d.ts" />

import { pipe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
import Observable_takeFirst from "./Observable.takeFirst.js";
const Observable_takeUntil = (notifier) => {
    const operator = (delegate) => pipe(Observer_createWithDelegate(delegate), Disposable_bindTo(delegate), Disposable_bindTo(pipe(notifier, Observable_takeFirst(), Observable_subscribe(delegate[ObserverLike_scheduler]))));
    return pipe(operator, Observable_lift(notifier[ObservableLike_isEnumerable], notifier[ObservableLike_isRunnable]));
};
export default Observable_takeUntil;
