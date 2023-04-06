/// <reference types="./Streamable.createStatefulEventHandler.d.ts" />

import { compose, invoke, isTrue, pipe, } from "../../../functions.js";
import { ObservableLike_observe } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_endWith from "../../../rx/Observable/__internal__/Observable.endWith.js";
import Observable_exhaust from "../../../rx/Observable/__internal__/Observable.exhaust.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeMap from "../../../rx/Observable/__internal__/Observable.mergeMap.js";
import Observable_pairwise from "../../../rx/Observable/__internal__/Observable.pairwise.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import Observable_stateStore from "../../../rx/Observable/__internal__/Observable.stateStore.js";
import Observable_switchMap from "../../../rx/Observable/__internal__/Observable.switchMap.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import Observable_zipWithLatestFrom from "../../../rx/Observable/__internal__/Observable.zipWithLatestFrom.js";
import Publisher_create from "../../../rx/Publisher/__internal__/Publisher.create.js";
import { EventListenerLike_notify, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Streamable_create from "./Streamable.create.js";
const Streamable_createStatefulEventHandler = ((op, initialState, options) => {
    const { mode } = options;
    return Streamable_create(compose(Observable_stateStore(initialState, options), mode === "blocking"
        ? (obs) => Observable_create(observer => {
            // The previous state that the event stream blocked on
            const publisher = pipe(Publisher_create(), Disposable_addTo(observer));
            pipe(publisher, Observable_zipWithLatestFrom(obs, (prev, next) => pipe(op(prev, next), Observable_ignoreElements(), Observable_startWith(true), Observable_endWith(false), Observable_takeWhile(isTrue), Observable_forEach(_ => publisher[EventListenerLike_notify](next)))), Observable_exhaust(), Observable_startWith(false), invoke(ObservableLike_observe, observer));
        })
        : compose(Observable_pairwise(), mode === "switching"
            ? Observable_switchMap(([prev, next]) => pipe(op(prev, next), Observable_ignoreElements()))
            : Observable_mergeMap(([prev, next]) => pipe(op(prev, next), Observable_ignoreElements()), { ...options, maxConcurrency: 1 }))));
});
export default Streamable_createStatefulEventHandler;
