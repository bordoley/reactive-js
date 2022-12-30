/// <reference types="./SinkLike.someSatisfyMixin.d.ts" />
import { mix, include, init } from '../../../__internal__/mixins.mjs';
import satisfyMixin from './SinkLike.satisfyMixin.mjs';

const someSatisfyMixin = (fromArray) => {
    const typedSatisfySinkMixin = satisfyMixin(fromArray, false);
    return mix(include(typedSatisfySinkMixin), function EverySatisfySink(instance, delegate, predicate) {
        init(typedSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
};

export { someSatisfyMixin as default };
