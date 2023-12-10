/// <reference types="./Observable.pairwise.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import PairwiseSinkMixin from "../../../events/__mixins__/PairwiseSinkMixin.js";
import Observer_decorateNotifyWithStateAssert from "../../Observer/__private__/Observer.decorateNotifyWithStateAssert.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createPairwiseObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), PairwiseSinkMixin()), function PairwiseObserver(instance, delegate) {
    init(PairwiseSinkMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(PairwiseSinkMixin()))))();
const Observable_pairwise = () => Observable_liftPure((Observer_createPairwiseObserver));
export default Observable_pairwise;
