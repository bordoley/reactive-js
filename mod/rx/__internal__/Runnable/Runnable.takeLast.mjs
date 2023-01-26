/// <reference types="./Runnable.takeLast.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import StatefulContainer_takeLast from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeLast.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_takeLastMixin from '../Sink/Sink.takeLastMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_takeLast = /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = Sink_takeLastMixin(ReadonlyArray_toRunnable());
    return pipe(createInstanceFactory(typedTakeLastSinkMixin), StatefulContainer_takeLast(Runnable_liftT));
})();

export { Runnable_takeLast as default };
