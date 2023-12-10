/// <reference types="./Observable.skipFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import SkipFirstSinkMixin from "../../../events/__mixins__/SkipFirstSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import Observer_decorateNotifyWithStateAssert from "../../Observer/__private__/Observer.decorateNotifyWithStateAssert.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createSkipFirstObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), SkipFirstSinkMixin()), function SkipFirstObserver(instance, delegate, skipCount) {
    init(SkipFirstSinkMixin(), instance, delegate, skipCount);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(SkipFirstSinkMixin()))))();
const Observable_skipFirst = (options = {}) => pipe(Observer_createSkipFirstObserver, partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPure);
export default Observable_skipFirst;
