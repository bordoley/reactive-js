/// <reference types="./RunnableLike.pairwise.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import { pipe, returns } from '../../../functions.mjs';
import SinkLike__pairwiseMixin from '../SinkLike/SinkLike.pairwiseMixin.mjs';
import RunnableLike__lift from './RunnableLike.lift.mjs';

const RunnableLike__pairwise = 
/*@__PURE__*/ (() => {
    const typedPairwiseSinkMixin = SinkLike__pairwiseMixin();
    return pipe(createInstanceFactory(typedPairwiseSinkMixin), RunnableLike__lift, returns);
})();

export { RunnableLike__pairwise as default };
