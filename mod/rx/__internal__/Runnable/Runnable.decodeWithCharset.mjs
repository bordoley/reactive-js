/// <reference types="./Runnable.decodeWithCharset.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import StatefulContainer$decodeWithCharset from '../../../containers/__internal__/StatefulContainer/StatefulContainer.decodeWithCharset.mjs';
import { pipe } from '../../../functions.mjs';
import Sink$decodeWithCharsetMixin from '../Sink/Sink.decodeWithCharsetMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = Sink$decodeWithCharsetMixin(ReadonlyArray$toRunnable());
    return pipe(createInstanceFactory(typedDecodeWithCharsetMixin), StatefulContainer$decodeWithCharset(Runnable$liftT));
})();

export { Runnable$decodeWithCharset as default };
