/// <reference types="./Runnable.someSatisfy.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$toRunnable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Sink$someSatisfyMixin from '../Sink/Sink.someSatisfyMixin.mjs';
import Runnable$lift from './Runnable.lift.mjs';

const Runnable$someSatisfy = 
/*@__PURE__*/ (() => {
    const typedSomeSatisfySinkMixin = Sink$someSatisfyMixin(ReadonlyArray$toRunnable());
    return (predicate) => pipe(createInstanceFactory(typedSomeSatisfySinkMixin), partial(predicate), Runnable$lift);
})();

export { Runnable$someSatisfy as default };
