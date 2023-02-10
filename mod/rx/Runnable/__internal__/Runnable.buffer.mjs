/// <reference types="./Runnable.buffer.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnable from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.mjs';
import StatefulContainer_buffer from '../../../containers/StatefulContainer/__internal__/StatefulContainer.buffer.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_bufferMixin from '../../Sink/__internal__/Sink.bufferMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_buffer = /*@__PURE__*/ (() => {
    const typedBufferSinkMixin = Sink_bufferMixin(ReadonlyArray_toRunnable());
    return pipe(createInstanceFactory(typedBufferSinkMixin), StatefulContainer_buffer(Runnable_liftT));
})();

export { Runnable_buffer as default };
