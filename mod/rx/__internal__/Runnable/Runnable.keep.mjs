/// <reference types="./Runnable.keep.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer$keep from '../../../containers/__internal__/StatefulContainer/StatefulContainer.keep.mjs';
import { pipe } from '../../../functions.mjs';
import Sink$keepMixin from '../Sink/Sink.keepMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$keep = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = Sink$keepMixin();
    return pipe(createInstanceFactory(typedKeepSinkMixin), StatefulContainer$keep(Runnable$liftT));
})();

export { Runnable$keep as default };
