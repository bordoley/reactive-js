/// <reference types="./Runnable.someSatisfy.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnable from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Sink_someSatisfyMixin from '../../Sink/__internal__/Sink.someSatisfyMixin.mjs';
import Runnable_lift from './Runnable.lift.mjs';

const Runnable_someSatisfy = 
/*@__PURE__*/ (() => {
    const typedSomeSatisfySinkMixin = Sink_someSatisfyMixin(ReadonlyArray_toRunnable());
    return (predicate) => pipe(createInstanceFactory(typedSomeSatisfySinkMixin), partial(predicate), Runnable_lift);
})();

export { Runnable_someSatisfy as default };
