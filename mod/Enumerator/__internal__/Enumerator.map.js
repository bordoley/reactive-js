/// <reference types="./Enumerator.map.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, MappingLike_selector, } from "../../__internal__/types.js";
import { error, none, pipe } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_map = /*@__PURE__*/ (() => {
    const createMapEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Delegating_mixin(), Disposable_mixin), function MapEnumerator(instance, delegate, mapper) {
        init(MutableEnumerator_mixin(), instance);
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);
        pipe(instance, Disposable_add(delegate));
        instance[MappingLike_selector] = mapper;
        return instance;
    }, props({
        [MappingLike_selector]: none,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            const delegate = this[DelegatingLike_delegate];
            const delegateHasCurrent = delegate[EnumeratorLike_move]();
            try {
                if (delegateHasCurrent) {
                    this[EnumeratorLike_current] = this[MappingLike_selector](delegate[EnumeratorLike_current]);
                }
            }
            catch (e) {
                // Catch errors thrown by the selector
                this[DisposableLike_dispose](error(e));
                this[MutableEnumeratorLike_reset]();
            }
            if (delegate[DisposableLike_isDisposed]) {
                this[DisposableLike_dispose]();
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (selector) => (delegate) => createMapEnumerator(delegate, selector);
})();
export default Enumerator_map;
