/// <reference types="./Runnable.takeLast.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import StatefulContainer$takeLast from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeLast.mjs';
import { pipe } from '../../../functions.mjs';
import Sink$takeLastMixin from '../Sink/Sink.takeLastMixin.mjs';
import Runnable$liftT from './Runnable.liftT.mjs';

const Runnable$takeLast = /*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = Sink$takeLastMixin(ReadonlyArray$toRunnable());
    return pipe(createInstanceFactory(typedTakeLastSinkMixin), StatefulContainer$takeLast(Runnable$liftT));
})();

export { Runnable$takeLast as default };
