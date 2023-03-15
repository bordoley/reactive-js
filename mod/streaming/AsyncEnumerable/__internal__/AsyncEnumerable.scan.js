/// <reference types="./AsyncEnumerable.scan.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_delegatingMixin from "./AsyncEnumerator.delegatingMixin.js";
const AsyncEnumerable_scan = /*@__PURE__*/ (() => {
    const createScanStream = createInstanceFactory(mix(include(AsyncEnumerator_delegatingMixin()), function ScanStream(instance, delegate, reducer, acc) {
        init(AsyncEnumerator_delegatingMixin(), instance, delegate, Observable_scan(reducer, acc));
        return instance;
    }, props({}), {}));
    return ((reducer, initialValue) => pipe(createScanStream, partial(reducer, initialValue), AsyncEnumerable_lift(true, true)));
})();
export default AsyncEnumerable_scan;
