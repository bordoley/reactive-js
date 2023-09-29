/// <reference types="./Enumerator.zipMany.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
const ZipEnumerator_enumerators = Symbol("ZipEnumerator_enumerators");
const Enumerator_zipMany = /*@__PURE__*/ (() => {
    const Enumerator_getCurrent = (enumerator) => enumerator[EnumeratorLike_current];
    const Enumerator_hasCurrent = (enumerator) => enumerator[EnumeratorLike_hasCurrent];
    const allHaveCurrent = (enumerators) => enumerators.every(Enumerator_hasCurrent);
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            enumerator[EnumeratorLike_move]();
        }
        return allHaveCurrent(enumerators);
    };
    return createInstanceFactory(mix(include(MutableEnumeratorMixin(), DisposableMixin), function ZipEnumerator(instance, enumerators) {
        init(DisposableMixin, instance);
        init(MutableEnumeratorMixin(), instance);
        instance[ZipEnumerator_enumerators] = enumerators;
        for (const enumerator of enumerators) {
            pipe(instance, Disposable.add(enumerator));
        }
        return instance;
    }, props({
        [ZipEnumerator_enumerators]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            const enumerators = this[ZipEnumerator_enumerators];
            if (moveAll(enumerators)) {
                const next = enumerators.map(Enumerator_getCurrent);
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
