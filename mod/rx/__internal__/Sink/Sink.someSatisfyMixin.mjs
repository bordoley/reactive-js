/// <reference types="./Sink.someSatisfyMixin.d.ts" />
import { mix, include, init } from '../../../__internal__/mixins.mjs';
import Sink$satisfyMixin from './Sink.satisfyMixin.mjs';

const Sink$someSatisfyMixin = (fromArray) => {
    const typedSatisfySinkMixin = Sink$satisfyMixin(fromArray, false);
    return mix(include(typedSatisfySinkMixin), function EverySatisfySink(instance, delegate, predicate) {
        init(typedSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
};

export { Sink$someSatisfyMixin as default };
