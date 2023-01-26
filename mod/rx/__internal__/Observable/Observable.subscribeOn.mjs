/// <reference types="./Observable.subscribeOn.d.ts" />
import { pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher } from '../../../rx.mjs';
import Dispatcher$dispatchTo from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatchTo.mjs';
import Disposable$bindTo from '../../../util/__internal__/Disposable/Disposable.bindTo.mjs';
import Observable$create from './Observable.create.mjs';
import Observable$forEach from './Observable.forEach.mjs';
import Observable$subscribe from './Observable.subscribe.mjs';

const Observable$subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
Observable$create(({ [ObserverLike_dispatcher]: dispatcher }) => pipe(observable, Observable$forEach(Dispatcher$dispatchTo(dispatcher)), Observable$subscribe(scheduler), Disposable$bindTo(dispatcher)));

export { Observable$subscribeOn as default };
