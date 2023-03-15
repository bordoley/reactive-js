/// <reference types="./AsyncEnumerable.scanLast.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_delegatingMixin from "./AsyncEnumerator.delegatingMixin.js";
const AsyncEnumerable_scanLast = /*@__PURE__*/ (() => {
    const createScanLastStream = createInstanceFactory(mix(include(AsyncEnumerator_delegatingMixin()), function ScanLastStream(instance, delegate, reducer, initialValue) {
        init(AsyncEnumerator_delegatingMixin(), instance, delegate, Observable_scanLast(reducer, initialValue));
        return instance;
    }, props({}), {}));
    return (reducer, initialValue) => pipe(createScanLastStream, partial(reducer, initialValue), AsyncEnumerable_lift(false, false));
})();
export default AsyncEnumerable_scanLast;
