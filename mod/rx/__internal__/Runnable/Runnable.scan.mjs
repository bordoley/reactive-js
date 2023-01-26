/// <reference types="./Runnable.scan.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer$scan from '../../../containers/__internal__/StatefulContainer/StatefulContainer.scan.mjs';
import { pipe } from '../../../functions.mjs';
import Sink$scanMixin from '../Sink/Sink.scanMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$scan = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = Sink$scanMixin();
    return pipe(createInstanceFactory(typedScanSinkMixin), StatefulContainer$scan(Runnable$liftT));
})();

export { Runnable$scan as default };
