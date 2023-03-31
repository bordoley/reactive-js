/// <reference types="./AsyncEnumerable.scan.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_create from "./AsyncEnumerator.create.js";
const AsyncEnumerable_scan = (reducer, initialValue) => pipe(AsyncEnumerator_create(), partial(Observable_scan(reducer, initialValue)), AsyncEnumerable_lift(true, true));
export default AsyncEnumerable_scan;
