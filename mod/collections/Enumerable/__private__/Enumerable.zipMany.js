/// <reference types="./Enumerable.zipMany.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { invoke, none, pipeLazy } from "../../../functions.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_create from "./Enumerable.create.js";
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
    return createInstanceFactory(mix(include(MutableEnumeratorMixin()), function ZipEnumerator(instance, enumerators) {
        init(MutableEnumeratorMixin(), instance);
        instance[ZipEnumerator_enumerators] = enumerators;
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
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
})();
const Enumerable_zipMany = (observables) => Enumerable_create(pipeLazy(observables.map(invoke(EnumerableLike_enumerate)), Enumerator_zipMany));
export default Enumerable_zipMany;
