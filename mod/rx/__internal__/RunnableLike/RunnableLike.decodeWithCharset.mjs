/// <reference types="./RunnableLike.decodeWithCharset.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toRunnable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable.mjs';
import StatefulContainerLike__decodeWithCharset from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.decodeWithCharset.mjs';
import { pipe } from '../../../functions.mjs';
import SinkLike__decodeWithCharsetMixin from '../SinkLike/SinkLike.decodeWithCharsetMixin.mjs';
import RunnableLike__liftT from './RunnableLike.liftT.mjs';

const RunnableLike__decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = SinkLike__decodeWithCharsetMixin(ReadonlyArrayLike__toRunnable());
    return pipe(createInstanceFactory(typedDecodeWithCharsetMixin), StatefulContainerLike__decodeWithCharset(RunnableLike__liftT));
})();

export { RunnableLike__decodeWithCharset as default };
