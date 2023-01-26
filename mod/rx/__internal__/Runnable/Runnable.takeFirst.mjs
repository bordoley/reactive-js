/// <reference types="./Runnable.takeFirst.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer$takeFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeFirst.mjs';
import { pipe } from '../../../functions.mjs';
import Sink$takeFirstMixin from '../Sink/Sink.takeFirstMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$takeFirst = 
/*@__PURE__*/ (() => {
    const typedTakeFirstSinkMixin = Sink$takeFirstMixin();
    return pipe(createInstanceFactory(typedTakeFirstSinkMixin), StatefulContainer$takeFirst(Runnable$liftT));
})();

export { Runnable$takeFirst as default };
