/// <reference types="./RunnableLike.someSatisfy.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__toRunnable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import SinkLike__someSatisfyMixin from '../SinkLike/SinkLike.someSatisfyMixin.mjs';
import RunnableLike__lift from './RunnableLike.lift.mjs';

const RunnableLike__someSatisfy = 
/*@__PURE__*/ (() => {
    const typedSomeSatisfySinkMixin = SinkLike__someSatisfyMixin(ReadonlyArrayLike__toRunnable());
    return (predicate) => pipe(createInstanceFactory(typedSomeSatisfySinkMixin), partial(predicate), RunnableLike__lift);
})();

export { RunnableLike__someSatisfy as default };
