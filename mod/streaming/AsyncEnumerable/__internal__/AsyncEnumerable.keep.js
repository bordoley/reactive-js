/// <reference types="./AsyncEnumerable.keep.d.ts" />

import { compose, none, pipe } from "../../../functions.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep.js";
import { QueueableLike_enqueue } from "../../../util.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_create from "./AsyncEnumerator.create.js";
const AsyncEnumerable_keep = (predicate) => pipe((delegate) => AsyncEnumerator_create(delegate, compose(Observable_forEach(x => {
    if (!predicate(x)) {
        delegate[QueueableLike_enqueue](none);
    }
}), Observable_keep(predicate))), AsyncEnumerable_lift(true, true));
export default AsyncEnumerable_keep;
