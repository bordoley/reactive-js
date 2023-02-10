/// <reference types="./Runnable.forEach.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer_forEach from '../../../containers/StatefulContainer/__internal__/StatefulContainer.forEach.mjs';
import { pipe } from '../../../functions.mjs';
import { Sink_forEachMixin } from '../../Sink/__internal__/Sink.forEachMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_forEach = /*@__PURE__*/ (() => {
    const typedForEachSinkMixin = Sink_forEachMixin();
    return pipe(createInstanceFactory(typedForEachSinkMixin), StatefulContainer_forEach(Runnable_liftT));
})();

export { Runnable_forEach as default };
