/// <reference types="./Runnable.pairwise.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import { pipe, returns } from '../../../functions.mjs';
import Sink_pairwiseMixin from '../Sink/Sink.pairwiseMixin.mjs';
import Runnable_lift from './Runnable.lift.mjs';

const Runnable_pairwise = /*@__PURE__*/ (() => {
    const typedPairwiseSinkMixin = Sink_pairwiseMixin();
    return pipe(createInstanceFactory(typedPairwiseSinkMixin), Runnable_lift, returns);
})();

export { Runnable_pairwise as default };
