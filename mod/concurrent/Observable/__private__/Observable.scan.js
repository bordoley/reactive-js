/// <reference types="./Observable.scan.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observer_createScanObserver from "../../Observer/__private__/Observer.createScanObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_scan = (reducer, initialValue) => pipe((Observer_createScanObserver), partial(reducer, initialValue), Observable_liftPure);
export default Observable_scan;
