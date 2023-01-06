/// <reference types="./RunnableLike.takeWhile.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__takeWhile from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile.mjs';
import { pipe } from '../../../functions.mjs';
import SinkLike__takeWhileMixin from '../SinkLike/SinkLike.takeWhileMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__takeWhile = 
/*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = SinkLike__takeWhileMixin();
    return pipe(createInstanceFactory(typedTakeWhileSinkMixin), StatefulContainerLike__takeWhile(RunnableLike__liftT));
})();

export { RunnableLike__takeWhile as default };
