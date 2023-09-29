/// <reference types="./Enumerable.map.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, partial, pipe } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Disposable_mixin from "../../../utils/Disposable/__internal__/Disposable.mixin.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import Enumerable_lift from "./Enumerable.lift.js";
const Enumerable_map = /*@__PURE__*/ (() => {
    const MapEnumerator_delegate = Symbol("MapEnumerator_delegate");
    const MapEnumerator_selector = Symbol("MapEnumerator_selector");
    const createMapEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Disposable_mixin), function MapEnumerator(instance, delegate, mapper) {
        init(MutableEnumerator_mixin(), instance);
        init(Disposable_mixin, instance);
        pipe(instance, Disposable.add(delegate));
        instance[MapEnumerator_delegate] = delegate;
        instance[MapEnumerator_selector] = mapper;
        return instance;
    }, props({
        [MapEnumerator_delegate]: none,
        [MapEnumerator_selector]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            const delegate = this[MapEnumerator_delegate];
            const delegateHasCurrent = delegate[EnumeratorLike_move]();
            try {
                if (delegateHasCurrent) {
                    this[EnumeratorLike_current] = this[MapEnumerator_selector](delegate[EnumeratorLike_current]);
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
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (selector) => pipe(createMapEnumerator, partial(selector), Enumerable_lift);
})();
export default Enumerable_map;
