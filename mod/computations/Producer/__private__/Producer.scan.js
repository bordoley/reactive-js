/// <reference types="./Producer.scan.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ScanOperator from "../../__internal__/operators/ScanOperator.js";
import Producer_lift from "./Producer.lift.js";
const Producer_scan = ((reducer, initialValue) => pipe((ScanOperator.create), partial(reducer, initialValue), Producer_lift()));
export default Producer_scan;
