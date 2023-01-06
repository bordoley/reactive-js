/// <reference types="./RunnableLike.buffer.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toRunnable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable.mjs';
import StatefulContainerLike__buffer from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.buffer.mjs';
import { pipe } from '../../../functions.mjs';
import SinkLike__bufferMixin from '../SinkLike/SinkLike.bufferMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__buffer = /*@__PURE__*/ (() => {
    const typedBufferSinkMixin = SinkLike__bufferMixin(ReadonlyArrayLike__toRunnable());
    return pipe(createInstanceFactory(typedBufferSinkMixin), StatefulContainerLike__buffer(RunnableLike__liftT));
})();

export { RunnableLike__buffer as default };
