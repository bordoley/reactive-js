/// <reference types="./Sink.someSatisfyMixin.d.ts" />
import { mix, include, init } from '../../../__internal__/mixins.mjs';
import Sink_satisfyMixin from './Sink.satisfyMixin.mjs';

const Sink_someSatisfyMixin = (fromReadonlyArray) => {
    const typedSatisfySinkMixin = Sink_satisfyMixin(fromReadonlyArray, false);
    return mix(include(typedSatisfySinkMixin), function EverySatisfySink(instance, delegate, predicate) {
        init(typedSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
};

export { Sink_someSatisfyMixin as default };
