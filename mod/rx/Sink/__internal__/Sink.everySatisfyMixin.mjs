/// <reference types="./Sink.everySatisfyMixin.d.ts" />
import { mix, include, init } from '../../../__internal__/mixins.mjs';
import { compose, negate } from '../../../functions.mjs';
import Sink_satisfyMixin from './Sink.satisfyMixin.mjs';

const Sink_everySatisfyMixin = (fromReadonlyArray) => {
    const typedSatisfySinkMixin = Sink_satisfyMixin(fromReadonlyArray, true);
    return mix(include(typedSatisfySinkMixin), function EverySatisfySink(instance, delegate, predicate) {
        init(typedSatisfySinkMixin, instance, delegate, compose(predicate, negate));
        return instance;
    });
};

export { Sink_everySatisfyMixin as default };
