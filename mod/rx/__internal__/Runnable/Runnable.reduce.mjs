/// <reference types="./Runnable.reduce.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import StatefulContainer_reduce from '../../../containers/__internal__/StatefulContainer/StatefulContainer.reduce.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_reduceMixin from '../Sink/Sink.reduceMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = Sink_reduceMixin(ReadonlyArray_toRunnable());
    return pipe(createInstanceFactory(typedReduceSinkMixin), StatefulContainer_reduce(Runnable_liftT));
})();

export { Runnable_reduce as default };
