/// <reference types="./Runnable.catchError.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Sink_catchErrorMixin from '../Sink/Sink.catchErrorMixin.mjs';
import Runnable_lift from './Runnable.lift.mjs';

const Runnable_catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (() => createInstanceFactory(Sink_catchErrorMixin()))();
    return (errorHandler => pipe(createCatchErrorObserver, partial(errorHandler), Runnable_lift));
})();

export { Runnable_catchError as default };
