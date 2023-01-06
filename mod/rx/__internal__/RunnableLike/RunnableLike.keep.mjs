/// <reference types="./RunnableLike.keep.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__keep from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep.mjs';
import { pipe } from '../../../functions.mjs';
import SinkLike__keepMixin from '../SinkLike/SinkLike.keepMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__keep = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = SinkLike__keepMixin();
    return pipe(createInstanceFactory(typedKeepSinkMixin), StatefulContainerLike__keep(RunnableLike__liftT));
})();

export { RunnableLike__keep as default };
