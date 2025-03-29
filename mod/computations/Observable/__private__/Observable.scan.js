/// <reference types="./Observable.scan.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ScanSink from "../../__internal__/sinks/ScanSink.js";
import Observable_lift from "./Observable.lift.js";
const Observable_scan = ((reducer, initialValue) => pipe((ScanSink.create), partial(reducer, initialValue), Observable_lift()));
export default Observable_scan;
