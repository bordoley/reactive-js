/// <reference types="./Observable.withCurrentTime.d.ts" />

import Observer_createWithCurrentTimeObserver from "../../Observer/__internal__/Observer.createWithCurrentTimeObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftRunnableBoundedObservableOperatorWithSideEffects from "./Observable.liftRunnableBoundedObservableOperatorWithSideEffects.js";
const Observable_withCurrentTime = (selector) => pipe(Observer_createWithCurrentTimeObserver, partial(selector), Observable_liftRunnableBoundedObservableOperatorWithSideEffects);
export default Observable_withCurrentTime;
