/// <reference types="./Observable.subscribeOn.d.ts" />

import { pipe } from "../../../functions.js";
import { DispatcherLike_complete, ObserverLike_dispatcher, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Queueable_pushTo from "../../../util/Queue/__internal__/Queueable.pushTo.js";
import Observable_create from "./Observable.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
Observable_create(observer => pipe(observable, Observable_forEach(Queueable_pushTo(observer[ObserverLike_dispatcher])), Observable_subscribe(scheduler), Disposable_onComplete(() => observer[ObserverLike_dispatcher][DispatcherLike_complete]()), Disposable_addTo(observer)));
export default Observable_subscribeOn;
