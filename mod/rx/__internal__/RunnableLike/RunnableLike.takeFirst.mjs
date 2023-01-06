/// <reference types="./RunnableLike.takeFirst.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__takeFirst from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeFirst.mjs';
import { pipe } from '../../../functions.mjs';
import SinkLike__takeFirstMixin from '../SinkLike/SinkLike.takeFirstMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__takeFirst = 
/*@__PURE__*/ (() => {
    const typedTakeFirstSinkMixin = SinkLike__takeFirstMixin();
    return pipe(createInstanceFactory(typedTakeFirstSinkMixin), StatefulContainerLike__takeFirst(RunnableLike__liftT));
})();

export { RunnableLike__takeFirst as default };
