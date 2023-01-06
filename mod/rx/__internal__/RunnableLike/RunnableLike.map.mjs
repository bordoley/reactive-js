/// <reference types="./RunnableLike.map.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__map from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map.mjs';
import { pipe } from '../../../functions.mjs';
import { SinkLike__mapMixin } from '../SinkLike/SinkLike.mapMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = SinkLike__mapMixin();
    return pipe(createInstanceFactory(typedMapSinkMixin), StatefulContainerLike__map(RunnableLike__liftT));
})();

export { RunnableLike__map as default };
