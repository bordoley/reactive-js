/// <reference types="./Runnable.buffer.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import StatefulContainer$buffer from '../../../containers/__internal__/StatefulContainer/StatefulContainer.buffer.mjs';
import { pipe } from '../../../functions.mjs';
import Sink$bufferMixin from '../Sink/Sink.bufferMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$buffer = /*@__PURE__*/ (() => {
    const typedBufferSinkMixin = Sink$bufferMixin(ReadonlyArray$toRunnable());
    return pipe(createInstanceFactory(typedBufferSinkMixin), StatefulContainer$buffer(Runnable$liftT));
})();

export { Runnable$buffer as default };
