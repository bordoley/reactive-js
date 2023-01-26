/// <reference types="./Runnable.keep.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer_keep from '../../../containers/__internal__/StatefulContainer/StatefulContainer.keep.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_keepMixin from '../Sink/Sink.keepMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_keep = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = Sink_keepMixin();
    return pipe(createInstanceFactory(typedKeepSinkMixin), StatefulContainer_keep(Runnable_liftT));
})();

export { Runnable_keep as default };
