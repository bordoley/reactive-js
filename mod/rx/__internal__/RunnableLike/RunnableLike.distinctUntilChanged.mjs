/// <reference types="./RunnableLike.distinctUntilChanged.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__distinctUntilChanged from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged.mjs';
import { pipe } from '../../../functions.mjs';
import SinkLike__distinctUntilChangedMixin from '../SinkLike/SinkLike.distinctUntilChangedMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDistinctUntilChangedSinkMixin = SinkLike__distinctUntilChangedMixin();
    return pipe(createInstanceFactory(typedDistinctUntilChangedSinkMixin), StatefulContainerLike__distinctUntilChanged(RunnableLike__liftT));
})();

export { RunnableLike__distinctUntilChanged as default };
