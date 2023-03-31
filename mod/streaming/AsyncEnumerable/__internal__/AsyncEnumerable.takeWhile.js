/// <reference types="./AsyncEnumerable.takeWhile.d.ts" />

import { partial, pipe } from "../../../functions.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_create from "./AsyncEnumerator.create.js";
const AsyncEnumerable_takeWhile = (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(AsyncEnumerator_create(), partial(Observable_takeWhile(predicate, { inclusive })), AsyncEnumerable_lift(true, true));
};
export default AsyncEnumerable_takeWhile;
