/// <reference types="./Runnable.scan.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ScanSink from "../../__internal__/sinks/ScanSink.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_scan = (reducer, initialValue) => pipe((ScanSink.create), partial(reducer, initialValue), Runnable_lift());
export default Runnable_scan;
