/// <reference types="./Observable.keep.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import KeepSinkMixin from "../../../events/__mixins__/KeepSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import Observer_decorateNotifyWithStateAssert from "../../Observer/__private__/Observer.decorateNotifyWithStateAssert.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createKeepObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), KeepSinkMixin()), function KeepObserver(instance, delegate, predicate) {
    init(KeepSinkMixin(), instance, delegate, predicate);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(KeepSinkMixin()))))();
const Observable_keep = (predicate) => pipe((Observer_createKeepObserver), partial(predicate), Observable_liftPure);
export default Observable_keep;
