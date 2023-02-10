/// <reference types="./Runnable.distinctUntilChanged.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer_distinctUntilChanged from '../../../containers/StatefulContainer/__internal__/StatefulContainer.distinctUntilChanged.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_distinctUntilChangedMixin from '../../Sink/__internal__/Sink.distinctUntilChangedMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDistinctUntilChangedSinkMixin = Sink_distinctUntilChangedMixin();
    return pipe(createInstanceFactory(typedDistinctUntilChangedSinkMixin), StatefulContainer_distinctUntilChanged(Runnable_liftT));
})();

export { Runnable_distinctUntilChanged as default };
