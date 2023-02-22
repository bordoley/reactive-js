/// <reference types="./Observable.subscribeOn.d.ts" />

import { pipe } from "../../../functions.js";
import { ObserverLike_dispatcher } from "../../../rx.js";
import Dispatcher_dispatchTo from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatchTo.js";
import Disposable_bindTo from "../../../util/Disposable/__internal__/Disposable.bindTo.js";
import Observable_create from "./Observable.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
const Observable_subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
Observable_create(({ [ObserverLike_dispatcher]: dispatcher }) => pipe(observable, Observable_forEach(Dispatcher_dispatchTo(dispatcher)), Observable_subscribe(scheduler), Disposable_bindTo(dispatcher)));
export default Observable_subscribeOn;
