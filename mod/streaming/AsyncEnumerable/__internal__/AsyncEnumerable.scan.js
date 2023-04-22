/// <reference types="./AsyncEnumerable.scan.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_lift from "./AsyncEnumerator.lift.js";
const AsyncEnumerable_scan = (reducer, initialValue) => pipe(Observable_scan(reducer, initialValue), AsyncEnumerator_lift, AsyncEnumerable_lift(true, true));
export default AsyncEnumerable_scan;
