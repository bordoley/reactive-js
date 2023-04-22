/// <reference types="./AsyncEnumerable.takeWhile.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_lift from "./AsyncEnumerator.lift.js";
const AsyncEnumerable_takeWhile = (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(Observable_takeWhile(predicate, { inclusive }), AsyncEnumerator_lift, AsyncEnumerable_lift(true, true));
};
export default AsyncEnumerable_takeWhile;
