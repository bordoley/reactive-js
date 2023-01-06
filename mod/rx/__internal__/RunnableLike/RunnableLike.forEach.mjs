/// <reference types="./RunnableLike.forEach.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__forEach from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach.mjs';
import { pipe } from '../../../functions.mjs';
import { SinkLike__forEachMixin } from '../SinkLike/SinkLike.forEachMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__forEach = /*@__PURE__*/ (() => {
    const typedForEachSinkMixin = SinkLike__forEachMixin();
    return pipe(createInstanceFactory(typedForEachSinkMixin), StatefulContainerLike__forEach(RunnableLike__liftT));
})();

export { RunnableLike__forEach as default };
