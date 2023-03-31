/// <reference types="./AsyncEnumerable.map.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_create from "./AsyncEnumerator.create.js";
const AsyncEnumerable_map = (mapper) => pipe(AsyncEnumerator_create(), partial(Observable_map(mapper)), AsyncEnumerable_lift(true, true));
export default AsyncEnumerable_map;
