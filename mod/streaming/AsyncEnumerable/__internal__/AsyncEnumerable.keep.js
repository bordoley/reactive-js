/// <reference types="./AsyncEnumerable.keep.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { compose, none, partial, pipe } from "../../../functions.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep.js";
import { QueueableLike_push } from "../../../util.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_delegatingMixin from "./AsyncEnumerator.delegatingMixin.js";
const AsyncEnumerable_keep = /*@__PURE__*/ (() => {
    const createKeepStream = createInstanceFactory(mix(include(AsyncEnumerator_delegatingMixin()), function KeepStream(instance, delegate, predicate) {
        const op = compose(Observable_forEach(x => {
            if (!predicate(x)) {
                delegate[QueueableLike_push](none);
            }
        }), Observable_keep(predicate));
        init(AsyncEnumerator_delegatingMixin(), instance, delegate, op);
        return instance;
    }, props({}), {}));
    return ((predicate) => pipe(createKeepStream, partial(predicate), AsyncEnumerable_lift(true, true)));
})();
export default AsyncEnumerable_keep;
