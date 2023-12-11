/// <reference types="./Observable.keep.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import KeepSinkMixin from "../../../events/__mixins__/KeepSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createKeepObserver = /*@__PURE__*/ (() => createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(ObserverMixin(), KeepSinkMixin()), function KeepObserver(instance, delegate, predicate) {
    init(KeepSinkMixin(), instance, delegate, predicate);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}))))();
const Observable_keep = (predicate) => pipe((Observer_createKeepObserver), partial(predicate), Observable_liftPure);
export default Observable_keep;
