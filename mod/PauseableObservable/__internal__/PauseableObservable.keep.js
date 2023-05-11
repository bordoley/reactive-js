/// <reference types="./PauseableObservable.keep.d.ts" />

import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_keep = ((predicate) => pipe(Observer_createKeepObserver, partial(predicate), PauseableObservable_lift));
export default PauseableObservable_keep;
