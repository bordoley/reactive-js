/// <reference types="./Observable.takeUntil.d.ts" />

import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import Disposable_bindTo from "../../../core/Disposable/__internal__/Disposable.bindTo.js";
import { pipe } from "../../../functions.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
import Observable_takeFirst from "./Observable.takeFirst.js";
const Observable_takeUntil = ((notifier) => {
    const operator = (delegate) => pipe(Observer_createWithDelegate(delegate), Disposable_bindTo(delegate), Disposable_bindTo(pipe(notifier, Observable_takeFirst(), Observable_subscribeWithConfig(delegate, delegate), Disposable_addTo(delegate))));
    return pipe(operator, Observable_lift(notifier));
});
export default Observable_takeUntil;
