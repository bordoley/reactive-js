/// <reference types="./SinkLike.someSatisfyMixin.d.ts" />
import { mix, include, init } from '../../../__internal__/mixins.mjs';
import SinkLike__satisfyMixin from './SinkLike.satisfyMixin.mjs';

const SinkLike__someSatisfyMixin = (fromArray) => {
    const typedSatisfySinkMixin = SinkLike__satisfyMixin(fromArray, false);
    return mix(include(typedSatisfySinkMixin), function EverySatisfySink(instance, delegate, predicate) {
        init(typedSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
};

export { SinkLike__someSatisfyMixin as default };
