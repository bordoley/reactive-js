/// <reference types="./Runnable.forEach.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer$forEach from '../../../containers/__internal__/StatefulContainer/StatefulContainer.forEach.mjs';
import { pipe } from '../../../functions.mjs';
import { Sink$forEachMixin } from '../Sink/Sink.forEachMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$forEach = /*@__PURE__*/ (() => {
    const typedForEachSinkMixin = Sink$forEachMixin();
    return pipe(createInstanceFactory(typedForEachSinkMixin), StatefulContainer$forEach(Runnable$liftT));
})();

export { Runnable$forEach as default };
