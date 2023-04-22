/// <reference types="./AsyncEnumerable.keep.d.ts" />

import { compose, none, pipe } from "../../../functions.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep.js";
import { QueueableLike_enqueue } from "../../../util.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_lift from "./AsyncEnumerator.lift.js";
const AsyncEnumerable_keep = (predicate) => pipe((delegate) => pipe(delegate, AsyncEnumerator_lift(compose(Observable_forEach(x => {
    if (!predicate(x)) {
        delegate[QueueableLike_enqueue](none);
    }
}), Observable_keep(predicate)))), AsyncEnumerable_lift(true, true));
export default AsyncEnumerable_keep;
