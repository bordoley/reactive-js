/// <reference types="./Observable.subscribeOn.d.ts" />

import { pipe } from "../../../functions.js";
import { ObserverLike_dispatcher } from "../../../rx.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Queueable_pushTo from "../../../util/Queue/__internal__/Queueable.pushTo.js";
import Observable_create from "./Observable.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
Observable_create(observer => pipe(observable, Observable_forEach(Queueable_pushTo(observer[ObserverLike_dispatcher])), Observable_subscribe(scheduler), Disposable_bindTo(observer[ObserverLike_dispatcher])));
export default Observable_subscribeOn;
