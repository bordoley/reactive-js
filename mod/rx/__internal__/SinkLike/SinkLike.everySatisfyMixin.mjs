/// <reference types="./SinkLike.everySatisfyMixin.d.ts" />
import { mix, include, init } from '../../../__internal__/mixins.mjs';
import { compose, negate } from '../../../functions.mjs';
import SinkLike__satisfyMixin from './SinkLike.satisfyMixin.mjs';

const SinkLike__everySatisfyMixin = (fromArray) => {
    const typedSatisfySinkMixin = SinkLike__satisfyMixin(fromArray, true);
    return mix(include(typedSatisfySinkMixin), function EverySatisfySink(instance, delegate, predicate) {
        init(typedSatisfySinkMixin, instance, delegate, compose(predicate, negate));
        return instance;
    });
};

export { SinkLike__everySatisfyMixin as default };
