/// <reference types="./Observable.scan.d.ts" />

import Observer_createScanObserver from "../../Observer/__internal__/Observer.createScanObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";
const Observable_scan = (reducer, initialValue) => pipe((Observer_createScanObserver), partial(reducer, initialValue), Observable_liftSource);
export default Observable_scan;
