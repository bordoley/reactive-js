/// <reference types="./PauseableObservable.dispatchTo.d.ts" />

import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import { partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_dispatchTo = ((dispatcher) => pipe(Observer_createDispatchToObserver, partial(dispatcher), PauseableObservable_lift));
export default PauseableObservable_dispatchTo;
