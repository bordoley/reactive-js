/// <reference types="./RunnableLike.everySatisfy.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toRunnable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import SinkLike__everySatisfyMixin from '../SinkLike/SinkLike.everySatisfyMixin.mjs';
import RunnableLike__lift from './RunnableLike.lift.mjs';

const RunnableLike__everySatisfy = 
/*@__PURE__*/ (() => {
    const typedEverySatisfySinkMixin = SinkLike__everySatisfyMixin(ReadonlyArrayLike__toRunnable());
    return (predicate) => pipe(createInstanceFactory(typedEverySatisfySinkMixin), partial(predicate), RunnableLike__lift);
})();

export { RunnableLike__everySatisfy as default };
