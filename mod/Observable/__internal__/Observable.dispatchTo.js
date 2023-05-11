/// <reference types="./Observable.dispatchTo.d.ts" />

import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";
const Observable_dispatchTo = (dispatcher) => pipe(Observer_createDispatchToObserver, partial(dispatcher), Observable_liftSource);
export default Observable_dispatchTo;
