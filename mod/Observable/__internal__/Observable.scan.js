/// <reference types="./Observable.scan.d.ts" />

import Enumerator_scan from "../../Enumerator/__internal__/Enumerator.scan.js";
import Observer_createScanObserver from "../../Observer/__internal__/Observer.createScanObserver.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_scan = (reducer, initialValue) => {
    const op = pipe((Observer_createScanObserver), partial(reducer, initialValue));
    return Observable_liftPure(Enumerator_scan(reducer, initialValue), op);
};
export default Observable_scan;
