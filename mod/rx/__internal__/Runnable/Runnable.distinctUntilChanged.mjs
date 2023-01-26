/// <reference types="./Runnable.distinctUntilChanged.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer$distinctUntilChanged from '../../../containers/__internal__/StatefulContainer/StatefulContainer.distinctUntilChanged.mjs';
import { pipe } from '../../../functions.mjs';
import Sink$distinctUntilChangedMixin from '../Sink/Sink.distinctUntilChangedMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDistinctUntilChangedSinkMixin = Sink$distinctUntilChangedMixin();
    return pipe(createInstanceFactory(typedDistinctUntilChangedSinkMixin), StatefulContainer$distinctUntilChanged(Runnable$liftT));
})();

export { Runnable$distinctUntilChanged as default };
