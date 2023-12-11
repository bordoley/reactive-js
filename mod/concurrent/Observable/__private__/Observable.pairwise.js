/// <reference types="./Observable.pairwise.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import PairwiseSinkMixin from "../../../events/__mixins__/PairwiseSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createPairwiseObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), decorateNotifyWithObserverStateAssert(PairwiseSinkMixin())), function PairwiseObserver(instance, delegate) {
    init(PairwiseSinkMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
})))();
const Observable_pairwise = () => Observable_liftPure((Observer_createPairwiseObserver));
export default Observable_pairwise;
