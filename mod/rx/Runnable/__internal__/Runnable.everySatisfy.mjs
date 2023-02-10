/// <reference types="./Runnable.everySatisfy.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_toRunnable from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Sink_everySatisfyMixin from '../../Sink/__internal__/Sink.everySatisfyMixin.mjs';
import Runnable_lift from './Runnable.lift.mjs';

const Runnable_everySatisfy = 
/*@__PURE__*/ (() => {
    const typedEverySatisfySinkMixin = Sink_everySatisfyMixin(ReadonlyArray_toRunnable());
    return (predicate) => pipe(createInstanceFactory(typedEverySatisfySinkMixin), partial(predicate), Runnable_lift);
})();

export { Runnable_everySatisfy as default };
