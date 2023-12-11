/// <reference types="./Observable.skipFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import SkipFirstSinkMixin from "../../../events/__mixins__/SkipFirstSinkMixin.js";
import { partial, pipe } from "../../../functions.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createSkipFirstObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), decorateNotifyWithObserverStateAssert(SkipFirstSinkMixin())), function SkipFirstObserver(instance, delegate, skipCount) {
    init(SkipFirstSinkMixin(), instance, delegate, skipCount);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
})))();
const Observable_skipFirst = (options = {}) => pipe(Observer_createSkipFirstObserver, partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPure);
export default Observable_skipFirst;
