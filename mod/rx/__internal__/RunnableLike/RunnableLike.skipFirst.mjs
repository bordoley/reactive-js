/// <reference types="./RunnableLike.skipFirst.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__skipFirst from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.skipFirst.mjs';
import { pipe } from '../../../functions.mjs';
import SinkLike__skipFirstMixin from '../SinkLike/SinkLike.skipFirstMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__skipFirst = 
/*@__PURE__*/ (() => {
    const typedSkipFirstSinkMixin = SinkLike__skipFirstMixin();
    return pipe(createInstanceFactory(typedSkipFirstSinkMixin), StatefulContainerLike__skipFirst(RunnableLike__liftT));
})();

export { RunnableLike__skipFirst as default };
