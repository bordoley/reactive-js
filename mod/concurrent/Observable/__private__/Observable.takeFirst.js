/// <reference types="./Observable.takeFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import TakeFirstSinkMixin from "../../../events/__mixins__/TakeFirstSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createTakeFirstObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), decorateNotifyWithObserverStateAssert(TakeFirstSinkMixin())), function TakeFirstObserver(instance, delegate, takeCount) {
    init(TakeFirstSinkMixin(), instance, delegate, takeCount);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
})))();
const Observable_takeFirst = (options = {}) => pipe(Observer_createTakeFirstObserver, partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPure);
export default Observable_takeFirst;
