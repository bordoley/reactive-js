/// <reference types="./AsyncEnumerable.takeWhile.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_delegatingMixin from "./AsyncEnumerator.delegatingMixin.js";
const AsyncEnumerable_takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileStream = createInstanceFactory(mix(include(AsyncEnumerator_delegatingMixin()), function TakeWhileStream(instance, delegate, predicate, inclusive) {
        init(AsyncEnumerator_delegatingMixin(), instance, delegate, Observable_takeWhile(predicate, { inclusive }));
        return instance;
    }, props({}), {}));
    return (predicate, options = {}) => {
        const { inclusive = false } = options;
        return pipe(createTakeWhileStream, partial(predicate, inclusive), AsyncEnumerable_lift(true, true));
    };
})();
export default AsyncEnumerable_takeWhile;
