/// <reference types="./Runnable.scan.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer_scan from '../../../containers/StatefulContainer/__internal__/StatefulContainer.scan.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_scanMixin from '../../Sink/__internal__/Sink.scanMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_scan = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = Sink_scanMixin();
    return pipe(createInstanceFactory(typedScanSinkMixin), StatefulContainer_scan(Runnable_liftT));
})();

export { Runnable_scan as default };
