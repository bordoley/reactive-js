/// <reference types="./AsyncEnumerable.scanLast.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_lift from "./AsyncEnumerator.lift.js";
const AsyncEnumerable_scanLast = (reducer, initialValue) => pipe(Observable_scanLast(reducer, initialValue), AsyncEnumerator_lift, AsyncEnumerable_lift(false, false));
export default AsyncEnumerable_scanLast;
