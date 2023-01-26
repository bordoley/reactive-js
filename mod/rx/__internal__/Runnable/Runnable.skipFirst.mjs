/// <reference types="./Runnable.skipFirst.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer_skipFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.skipFirst.mjs';
import { pipe } from '../../../functions.mjs';
import Sink_skipFirstMixin from '../Sink/Sink.skipFirstMixin.mjs';
import Runnable_liftT from './Runnable.liftT.mjs';

const Runnable_skipFirst = 
/*@__PURE__*/ (() => {
    const typedSkipFirstSinkMixin = Sink_skipFirstMixin();
    return pipe(createInstanceFactory(typedSkipFirstSinkMixin), StatefulContainer_skipFirst(Runnable_liftT));
})();

export { Runnable_skipFirst as default };
