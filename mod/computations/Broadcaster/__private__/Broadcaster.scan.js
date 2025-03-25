/// <reference types="./Broadcaster.scan.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ScanOperator from "../../__internal__/operators/ScanOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
const Broadcaster_scan = ((reducer, initialValue) => pipe((ScanOperator.create), partial(reducer, initialValue), (Broadcaster_lift)));
export default Broadcaster_scan;
