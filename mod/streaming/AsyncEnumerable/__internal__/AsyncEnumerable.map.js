/// <reference types="./AsyncEnumerable.map.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_lift from "./AsyncEnumerator.lift.js";
const AsyncEnumerable_map = (selector) => pipe(selector, Observable_map, AsyncEnumerator_lift, AsyncEnumerable_lift(true, true));
export default AsyncEnumerable_map;
