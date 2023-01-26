/// <reference types="./Runnable.decodeWithCharset.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import StatefulContainer_decodeWithCharset from '../../../containers/__internal__/StatefulContainer/StatefulContainer.decodeWithCharset.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_decodeWithCharsetMixin from '../Sink/Sink.decodeWithCharsetMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink_decodeWithCharsetMixin(ReadonlyArray_toRunnable());
    return pipe(createInstanceFactory(typedDecodeWithCharsetMixin), StatefulContainer_decodeWithCharset(Runnable_liftT));
})();

export { Runnable_decodeWithCharset as default };
