/// <reference types="./Observable.takeUntil.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observer_createWithDelegate from "../../Observer/__private__/Observer.createWithDelegate.js";
import Observable_lift, { ObservableLift_isStateless, } from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
import Observable_takeFirst from "./Observable.takeFirst.js";
const Observable_takeUntil = ((notifier) => {
    const operator = (delegate) => pipe(Observer_createWithDelegate(delegate), Disposable.bindTo(delegate), Disposable.bindTo(pipe(notifier, Observable_takeFirst(), Observable_subscribeWithConfig(delegate, delegate), Disposable.addTo(delegate))));
    return pipe(operator, Observable_lift({
        [ObservableLift_isStateless]: false,
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isPure]: notifier[ObservableLike_isPure],
        [ObservableLike_isRunnable]: notifier[ObservableLike_isRunnable],
    }));
});
export default Observable_takeUntil;
