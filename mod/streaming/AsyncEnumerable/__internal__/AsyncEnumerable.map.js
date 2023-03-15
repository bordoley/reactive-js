/// <reference types="./AsyncEnumerable.map.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
import AsyncEnumerator_delegatingMixin from "./AsyncEnumerator.delegatingMixin.js";
const AsyncEnumerable_map = /*@__PURE__*/ (() => {
    const createMapStream = createInstanceFactory(mix(include(AsyncEnumerator_delegatingMixin()), function MapStream(instance, delegate, mapper) {
        init(AsyncEnumerator_delegatingMixin(), instance, delegate, Observable_map(mapper));
        return instance;
    }, props({}), {}));
    return ((mapper) => pipe(createMapStream, partial(mapper), AsyncEnumerable_lift(true, true)));
})();
export default AsyncEnumerable_map;
