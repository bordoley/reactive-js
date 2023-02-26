/// <reference types="./Sink.someSatisfyMixin.d.ts" />

import { getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import Sink_satisfyMixin from "./Sink.satisfyMixin.js";
const Sink_someSatisfyMixin = (fromReadonlyArray) => {
    const typedSatisfySinkMixin = Sink_satisfyMixin(fromReadonlyArray, false);
    return mix(include(typedSatisfySinkMixin), function EverySatisfySink(instance, delegate, predicate) {
        init(typedSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    }, props({}), getPrototype(typedSatisfySinkMixin));
};
export default Sink_someSatisfyMixin;
