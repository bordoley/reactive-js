/// <reference types="./AsyncEnumerable.scan.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { ObservableLike_observe, } from "../../../rx.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
const AsyncEnumerable_scan = /*@__PURE__*/ (() => {
    const ScanLastEnumerator_op = Symbol("ScanLastEnumerator_op");
    const createScanStream = createInstanceFactory(mix(include(Stream_delegatingMixin()), function KeepStream(instance, delegate, reducer, acc) {
        init(Stream_delegatingMixin(), instance, delegate);
        instance[ScanLastEnumerator_op] = Observable_scan(reducer, acc);
        return instance;
    }, props({
        [ScanLastEnumerator_op]: none,
    }), {
        [ObservableLike_observe](observer) {
            pipe(this[DelegatingLike_delegate], this[ScanLastEnumerator_op], Observable_observeWith(observer));
        },
    }));
    return ((reducer, initialValue) => pipe(createScanStream, partial(reducer, initialValue), AsyncEnumerable_lift(true, true)));
})();
export default AsyncEnumerable_scan;
