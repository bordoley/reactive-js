/// <reference types="./Runnable.everySatisfy.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Sink$everySatisfyMixin from '../Sink/Sink.everySatisfyMixin.mjs';
import Runnable$lift from './Runnable.lift.mjs';

const Runnable$everySatisfy = 
/*@__PURE__*/ (() => {
    const typedEverySatisfySinkMixin = Sink$everySatisfyMixin(ReadonlyArray$toRunnable());
    return (predicate) => pipe(createInstanceFactory(typedEverySatisfySinkMixin), partial(predicate), Runnable$lift);
})();

export { Runnable$everySatisfy as default };
