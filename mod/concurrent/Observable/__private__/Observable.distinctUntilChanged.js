/// <reference types="./Observable.distinctUntilChanged.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import DistinctUntilChangedSinkMixin from "../../../events/__mixins__/DistinctUntilChangedSinkMixin.js";
import { partial, pipe, strictEquality } from "../../../functions.js";
import Observer_decorateNotifyWithStateAssert from "../../Observer/__private__/Observer.decorateNotifyWithStateAssert.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createDistinctUntilChangedObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), DistinctUntilChangedSinkMixin()), function DistinctUntilChangedObserver(instance, delegate, equality) {
    init(DistinctUntilChangedSinkMixin(), instance, delegate, equality);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(DistinctUntilChangedSinkMixin()))))();
const Observable_distinctUntilChanged = (options) => pipe(Observer_createDistinctUntilChangedObserver, partial(options?.equality ?? strictEquality), Observable_liftPure);
export default Observable_distinctUntilChanged;
