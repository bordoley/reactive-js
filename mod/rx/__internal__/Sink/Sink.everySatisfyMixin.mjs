/// <reference types="./Sink.everySatisfyMixin.d.ts" />
import { mix, include, init } from '../../../__internal__/mixins.mjs';
import { compose, negate } from '../../../functions.mjs';
import Sink$satisfyMixin from './Sink.satisfyMixin.mjs';

const Sink$everySatisfyMixin = (fromArray) => {
    const typedSatisfySinkMixin = Sink$satisfyMixin(fromArray, true);
    return mix(include(typedSatisfySinkMixin), function EverySatisfySink(instance, delegate, predicate) {
        init(typedSatisfySinkMixin, instance, delegate, compose(predicate, negate));
        return instance;
    });
};

export { Sink$everySatisfyMixin as default };
