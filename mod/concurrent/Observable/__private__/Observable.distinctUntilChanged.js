/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import DistinctUntilChangedSinkMixin from "../../../events/__mixins__/DistinctUntilChangedSinkMixin.js";
import { partial, pipe, strictEquality } from "../../../functions.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createDistinctUntilChangedObserver = /*@__PURE__*/ (() => createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(ObserverMixin(), DistinctUntilChangedSinkMixin()), function DistinctUntilChangedObserver(instance, delegate, equality) {
    init(DistinctUntilChangedSinkMixin(), instance, delegate, equality);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}))))();
const Observable_distinctUntilChanged = (options) => pipe(Observer_createDistinctUntilChangedObserver, partial(options?.equality ?? strictEquality), Observable_liftPure);
export default Observable_distinctUntilChanged;
