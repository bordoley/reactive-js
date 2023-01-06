/// <reference types="./RunnableLike.throwIfEmpty.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__throwIfEmpty from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty.mjs';
import { pipe } from '../../../functions.mjs';
import SinkLike__throwIfEmptyMixin from '../SinkLike/SinkLike.throwIfEmptyMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedThrowIfEmptySinkMixin = SinkLike__throwIfEmptyMixin();
    return pipe(createInstanceFactory(typedThrowIfEmptySinkMixin), StatefulContainerLike__throwIfEmpty(RunnableLike__liftT));
})();

export { RunnableLike__throwIfEmpty as default };
