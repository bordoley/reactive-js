/// <reference types="./Enumerator.zipMany.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_forEach from "../../ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { ZipLike_enumerators } from "../../__internal__/types.js";
import { none, pipe } from "../../functions.js";
import { DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../types.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "./MutableEnumerator.mixin.js";
const Enumerator_zipMany = /*@__PURE__*/ (() => {
    const Enumerator_getCurrent = (enumerator) => enumerator[EnumeratorLike_current];
    const Enumerator_hasCurrent = (enumerator) => enumerator[EnumeratorLike_hasCurrent];
    const allHaveCurrent = (enumerators) => pipe(enumerators, ReadonlyArray_everySatisfy(Enumerator_hasCurrent));
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            enumerator[EnumeratorLike_move]();
        }
        return allHaveCurrent(enumerators);
    };
    return createInstanceFactory(mix(include(MutableEnumerator_mixin(), Disposable_mixin), function ZipEnumerator(instance, enumerators) {
        init(Disposable_mixin, instance);
        init(MutableEnumerator_mixin(), instance);
        instance[ZipLike_enumerators] = pipe(enumerators, ReadonlyArray_forEach(Disposable_addTo(instance)));
        return instance;
    }, props({
        [ZipLike_enumerators]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            const enumerators = this[ZipLike_enumerators];
            if (moveAll(enumerators)) {
                const next = pipe(enumerators, ReadonlyArray_map(Enumerator_getCurrent));
                this[EnumeratorLike_current] = next;
            }
            else {
                this[DisposableLike_dispose]();
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
})();
export default Enumerator_zipMany;
