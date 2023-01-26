/// <reference types="./Runnable.takeFirst.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer_takeFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeFirst.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_takeFirstMixin from '../Sink/Sink.takeFirstMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_takeFirst = 
/*@__PURE__*/ (() => {
    const typedTakeFirstSinkMixin = Sink_takeFirstMixin();
    return pipe(createInstanceFactory(typedTakeFirstSinkMixin), StatefulContainer_takeFirst(Runnable_liftT));
})();

export { Runnable_takeFirst as default };
