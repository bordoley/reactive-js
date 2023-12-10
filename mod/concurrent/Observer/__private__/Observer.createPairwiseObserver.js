/// <reference types="./Observer.createPairwiseObserver.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import PairwiseSinkMixin from "../../../events/__mixins__/PairwiseSinkMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
const Observer_createPairwiseObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ObserverMixin(), PairwiseSinkMixin()), function PairwiseObserver(instance, delegate) {
    init(PairwiseSinkMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(PairwiseSinkMixin()))))();
export default Observer_createPairwiseObserver;
