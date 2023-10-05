/// <reference types="./PauseableObservable.scan.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createScanObserver from "../../Observer/__internal__/Observer.createScanObserver.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_scan = (reducer, initialValue) => pipe((Observer_createScanObserver), partial(reducer, initialValue), PauseableObservable_lift);
export default PauseableObservable_scan;
