/// <reference types="./RunnableLike.takeLast.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toRunnable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable.mjs';
import StatefulContainerLike__takeLast from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast.mjs';
import { pipe } from '../../../functions.mjs';
import SinkLike__takeLastMixin from '../SinkLike/SinkLike.takeLastMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__takeLast = 
/*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = SinkLike__takeLastMixin(ReadonlyArrayLike__toRunnable());
    return pipe(createInstanceFactory(typedTakeLastSinkMixin), StatefulContainerLike__takeLast(RunnableLike__liftT));
})();

export { RunnableLike__takeLast as default };
