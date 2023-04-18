/// <reference types="./Enumerator.map.d.ts" />

import { MappingLike_selector, } from "../../../__internal__/containers.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { EnumeratorLike_current, EnumeratorLike_move, } from "../../../containers.js";
import { none } from "../../../functions.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_map = /*@__PURE__*/ (() => {
    const createMapEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Delegating_mixin()), function MapEnumerator(instance, delegate, mapper) {
        init(MutableEnumerator_mixin(), instance);
        init(Delegating_mixin(), instance, delegate);
        instance[MappingLike_selector] = mapper;
        return instance;
    }, props({
        [MappingLike_selector]: none,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            const delegate = this[DelegatingLike_delegate];
            const delegateHasCurrent = delegate[EnumeratorLike_move]();
            if (delegateHasCurrent) {
                this[EnumeratorLike_current] = this[MappingLike_selector](delegate[EnumeratorLike_current]);
            }
            return delegateHasCurrent;
        },
    }));
    return (selector) => (delegate) => createMapEnumerator(delegate, selector);
})();
export default Enumerator_map;
