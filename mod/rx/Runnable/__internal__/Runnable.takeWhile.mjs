/// <reference types="./Runnable.takeWhile.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer_takeWhile from '../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_takeWhileMixin from '../../Sink/__internal__/Sink.takeWhileMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_takeWhile = 
/*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = Sink_takeWhileMixin();
    return pipe(createInstanceFactory(typedTakeWhileSinkMixin), StatefulContainer_takeWhile(Runnable_liftT));
})();

export { Runnable_takeWhile as default };
