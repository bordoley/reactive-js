/// <reference types="./PauseableObservable.forEach.d.ts" />

import Observer_createForEachObserver from "../../Observer/__internal__/Observer.createForEachObserver.js";
import { partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_forEach = ((effect) => pipe(Observer_createForEachObserver, partial(effect), PauseableObservable_lift));
export default PauseableObservable_forEach;
