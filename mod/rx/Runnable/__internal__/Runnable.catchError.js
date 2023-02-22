/// <reference types="./Runnable.catchError.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import Sink_catchErrorMixin from "../../Sink/__internal__/Sink.catchErrorMixin.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_catchError = 
/*@__PURE__*/ (() => {
    const createCatchErrorObserver = (() => createInstanceFactory(Sink_catchErrorMixin()))();
    return (errorHandler => pipe(createCatchErrorObserver, partial(errorHandler), Runnable_lift));
})();
export default Runnable_catchError;
