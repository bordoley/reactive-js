/// <reference types="./PauseableObservable.map.d.ts" />

import Observer_createMapObserver from "../../Observer/__internal__/Observer.createMapObserver.js";
import { partial, pipe } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_map = ((selector) => pipe(Observer_createMapObserver, partial(selector), PauseableObservable_lift));
export default PauseableObservable_map;
