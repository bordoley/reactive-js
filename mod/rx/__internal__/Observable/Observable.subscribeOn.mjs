/// <reference types="./Observable.subscribeOn.d.ts" />
import { pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher } from '../../../rx.mjs';
import Dispatcher_dispatchTo from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatchTo.mjs';
import Disposable_bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Observable_create from './Observable.create.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

const Observable_subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
Observable_create(({ [ObserverLike_dispatcher]: dispatcher }) => pipe(observable, Observable_forEach(Dispatcher_dispatchTo(dispatcher)), Observable_subscribe(scheduler), Disposable_bindTo(dispatcher)));

export { Observable_subscribeOn as default };
