/// <reference types="./Runnable.reduce.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnable from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.mjs';
import StatefulContainer_reduce from '../../../containers/StatefulContainer/__internal__/StatefulContainer.reduce.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_reduceMixin from '../../Sink/__internal__/Sink.reduceMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = Sink_reduceMixin(ReadonlyArray_toRunnable());
    return pipe(createInstanceFactory(typedReduceSinkMixin), StatefulContainer_reduce(Runnable_liftT));
})();

export { Runnable_reduce as default };
