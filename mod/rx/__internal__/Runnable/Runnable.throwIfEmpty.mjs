/// <reference types="./Runnable.throwIfEmpty.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer$throwIfEmpty from '../../../containers/__internal__/StatefulContainer/StatefulContainer.throwIfEmpty.mjs';
import { pipe } from '../../../functions.mjs';
import Sink$throwIfEmptyMixin from '../Sink/Sink.throwIfEmptyMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedThrowIfEmptySinkMixin = Sink$throwIfEmptyMixin();
    return pipe(createInstanceFactory(typedThrowIfEmptySinkMixin), StatefulContainer$throwIfEmpty(Runnable$liftT));
})();

export { Runnable$throwIfEmpty as default };
