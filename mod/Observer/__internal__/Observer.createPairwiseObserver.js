/// <reference types="./Observer.createPairwiseObserver.d.ts" />

import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import Sink_pairwiseMixin from "../../Sink/__internal__/Sink.pairwiseMixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import Observer_decorateNotifyWithStateAssert from "./Observer.decorateNotifyWithStateAssert.js";
const Observer_createPairwiseObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Sink_pairwiseMixin()), function PairwiseObserver(instance, delegate) {
    init(Sink_pairwiseMixin(), instance, delegate);
    init(Observer_delegatingMixin(), instance, delegate, delegate);
    return instance;
}, props({}), Observer_decorateNotifyWithStateAssert(Sink_pairwiseMixin()))))();
export default Observer_createPairwiseObserver;
