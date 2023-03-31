/// <reference types="./AsyncEnumerable.scanLast.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_create from "./AsyncEnumerator.create.js";
const AsyncEnumerable_scanLast = (reducer, initialValue) => pipe(AsyncEnumerator_create(), partial(Observable_scanLast(reducer, initialValue)), AsyncEnumerable_lift(false, false));
export default AsyncEnumerable_scanLast;
