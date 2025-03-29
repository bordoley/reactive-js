/// <reference types="./Broadcaster.scan.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ScanSink from "../../__internal__/sinks/ScanSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_scan = ((reducer, initialValue) => pipe((ScanSink.create), partial(reducer, initialValue), (Broadcaster_lift)));
export default Broadcaster_scan;
