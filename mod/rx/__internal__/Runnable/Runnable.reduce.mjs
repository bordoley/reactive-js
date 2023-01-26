/// <reference types="./Runnable.reduce.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import StatefulContainer$reduce from '../../../containers/__internal__/StatefulContainer/StatefulContainer.reduce.mjs';
import { pipe } from '../../../functions.mjs';
import Sink$reduceMixin from '../Sink/Sink.reduceMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = Sink$reduceMixin(ReadonlyArray$toRunnable());
    return pipe(createInstanceFactory(typedReduceSinkMixin), StatefulContainer$reduce(Runnable$liftT));
})();

export { Runnable$reduce as default };
