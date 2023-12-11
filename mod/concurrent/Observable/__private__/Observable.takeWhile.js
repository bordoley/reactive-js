/// <reference types="./Observable.takeWhile.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import TakeWhileSinkMixin from "../../../events/__mixins__/TakeWhileSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createTakeWhileObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), decorateNotifyWithObserverStateAssert(TakeWhileSinkMixin())), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
    init(TakeWhileSinkMixin(), instance, delegate, predicate, inclusive);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
})))();
const Observable_takeWhile = (predicate, options = {}) => pipe(Observer_createTakeWhileObserver, partial(predicate, options?.inclusive ?? false), Observable_liftPure);
export default Observable_takeWhile;
