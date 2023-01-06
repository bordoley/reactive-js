/// <reference types="./RunnableLike.catchError.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import { pipe, partial } from '../../../functions.mjs';
import SinkLike__catchErrorMixin from '../SinkLike/SinkLike.catchErrorMixin.mjs';
import RunnableLike__lift from './RunnableLike.lift.mjs';

const RunnableLike__catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (() => createInstanceFactory(SinkLike__catchErrorMixin()))();
    return (errorHandler => pipe(createCatchErrorObserver, partial(errorHandler), RunnableLike__lift));
})();

export { RunnableLike__catchError as default };
