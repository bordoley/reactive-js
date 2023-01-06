/// <reference types="./RunnableLike.reduce.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toRunnable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable.mjs';
import StatefulContainerLike__reduce from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.reduce.mjs';
import { pipe } from '../../../functions.mjs';
import SinkLike__reduceMixin from '../SinkLike/SinkLike.reduceMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = SinkLike__reduceMixin(ReadonlyArrayLike__toRunnable());
    return pipe(createInstanceFactory(typedReduceSinkMixin), StatefulContainerLike__reduce(RunnableLike__liftT));
})();

export { RunnableLike__reduce as default };
