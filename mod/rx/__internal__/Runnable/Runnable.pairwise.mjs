/// <reference types="./Runnable.pairwise.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import { pipe, returns } from '../../../functions.mjs';
import Sink$pairwiseMixin from '../Sink/Sink.pairwiseMixin.mjs';
import Runnable$lift from './Runnable.lift.mjs';

const Runnable$pairwise = /*@__PURE__*/ (() => {
    const typedPairwiseSinkMixin = Sink$pairwiseMixin();
    return pipe(createInstanceFactory(typedPairwiseSinkMixin), Runnable$lift, returns);
})();

export { Runnable$pairwise as default };
