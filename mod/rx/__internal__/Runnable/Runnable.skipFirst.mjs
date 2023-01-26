/// <reference types="./Runnable.skipFirst.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import StatefulContainer$skipFirst from '../../../containers/__internal__/StatefulContainer/StatefulContainer.skipFirst.mjs';
import { pipe } from '../../../functions.mjs';
import Sink$skipFirstMixin from '../Sink/Sink.skipFirstMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$skipFirst = 
/*@__PURE__*/ (() => {
    const typedSkipFirstSinkMixin = Sink$skipFirstMixin();
    return pipe(createInstanceFactory(typedSkipFirstSinkMixin), StatefulContainer$skipFirst(Runnable$liftT));
})();

export { Runnable$skipFirst as default };
