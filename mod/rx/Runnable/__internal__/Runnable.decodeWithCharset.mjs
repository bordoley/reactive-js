/// <reference types="./Runnable.decodeWithCharset.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnable from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.mjs';
import StatefulContainer_decodeWithCharset from '../../../containers/StatefulContainer/__internal__/StatefulContainer.decodeWithCharset.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_decodeWithCharsetMixin from '../../Sink/__internal__/Sink.decodeWithCharsetMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink_decodeWithCharsetMixin(ReadonlyArray_toRunnable());
    return pipe(createInstanceFactory(typedDecodeWithCharsetMixin), StatefulContainer_decodeWithCharset(Runnable_liftT));
})();

export { Runnable_decodeWithCharset as default };
