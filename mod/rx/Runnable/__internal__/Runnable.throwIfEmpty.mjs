/// <reference types="./Runnable.throwIfEmpty.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer_throwIfEmpty from '../../../containers/StatefulContainer/__internal__/StatefulContainer.throwIfEmpty.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_throwIfEmptyMixin from '../../Sink/__internal__/Sink.throwIfEmptyMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedThrowIfEmptySinkMixin = Sink_throwIfEmptyMixin();
    return pipe(createInstanceFactory(typedThrowIfEmptySinkMixin), StatefulContainer_throwIfEmpty(Runnable_liftT));
})();

export { Runnable_throwIfEmpty as default };
