/// <reference types="./Producer.scan.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ScanSink from "../../__internal__/sinks/ScanSink.js";
import Producer_lift from "./Producer.lift.js";
const Producer_scan = ((reducer, initialValue) => pipe((ScanSink.create), partial(reducer, initialValue), Producer_lift()));
export default Producer_scan;
