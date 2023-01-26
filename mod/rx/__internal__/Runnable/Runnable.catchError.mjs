/// <reference types="./Runnable.catchError.d.ts" />
import { createInstanceFactory } from '../../../__internal__/mixins.mjs';
import { pipe, partial } from '../../../functions.mjs';
import Sink$catchErrorMixin from '../Sink/Sink.catchErrorMixin.mjs';
import Runnable$lift from './Runnable.lift.mjs';

const Runnable$catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (() => createInstanceFactory(Sink$catchErrorMixin()))();
    return (errorHandler => pipe(createCatchErrorObserver, partial(errorHandler), Runnable$lift));
})();

export { Runnable$catchError as default };
