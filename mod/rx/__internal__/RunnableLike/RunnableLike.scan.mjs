/// <reference types="./RunnableLike.scan.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__scan from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan.mjs';
import { pipe } from '../../../functions.mjs';
import SinkLike__scanMixin from '../SinkLike/SinkLike.scanMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__scan = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = SinkLike__scanMixin();
    return pipe(createInstanceFactory(typedScanSinkMixin), StatefulContainerLike__scan(RunnableLike__liftT));
})();

export { RunnableLike__scan as default };
