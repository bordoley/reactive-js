/// <reference types="./Sink.everySatisfyMixin.d.ts" />

import { getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { compose, negate } from "../../../functions.js";
import Observer_satisfyMixin from "./Sink.satisfyMixin.js";
const Observer_everySatisfyMixin = (fromReadonlyArray) => {
    const typedSatisfySinkMixin = Observer_satisfyMixin(fromReadonlyArray, true);
    return mix(include(typedSatisfySinkMixin), function EverySatisfySink(instance, delegate, predicate) {
        init(typedSatisfySinkMixin, instance, delegate, compose(predicate, negate));
        return instance;
    }, props({}), getPrototype(typedSatisfySinkMixin));
};
export default Observer_everySatisfyMixin;
