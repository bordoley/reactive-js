/// <reference types="./Observable.scan.d.ts" />

import { partial, pipe } from "../../../functions.js";
import * as ScanOperator from "../../__internal__/operators/ScanOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_scan = ((reducer, initialValue) => pipe((ScanOperator.create), partial(reducer, initialValue), Observable_lift()));
export default Observable_scan;
