/// <reference types="./Runnable.takeWhile.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer$takeWhile from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeWhile.mjs';
import { pipe } from '../../../functions.mjs';
import Sink$takeWhileMixin from '../Sink/Sink.takeWhileMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$takeWhile = 
/*@__PURE__*/ (() => {
    const typedTakeWhileSinkMixin = Sink$takeWhileMixin();
    return pipe(createInstanceFactory(typedTakeWhileSinkMixin), StatefulContainer$takeWhile(Runnable$liftT));
})();

export { Runnable$takeWhile as default };
