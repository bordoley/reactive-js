/// <reference types="./Enumerable.fromIteratorFactory.d.ts" />

import { Iterator_done, Iterator_next, Iterator_value, } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../collections.js";
import { none, returns } from "../../../functions.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_create from "./Enumerable.create.js";
const Enumerable_fromIteratorFactory = /*@__PURE__*/ (() => {
    const IteratorEnumerator_iterator = Symbol("IteratorEnumerator_iterator");
    const createEnumerator = mixInstanceFactory(include(MutableEnumeratorMixin()), function IteratorEnumerator(instance, iterator) {
        init(MutableEnumeratorMixin(), instance);
        instance[IteratorEnumerator_iterator] = iterator;
        return instance;
    }, props({
        [IteratorEnumerator_iterator]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            const next = this[IteratorEnumerator_iterator][Iterator_next]();
            if (!next[Iterator_done]) {
                this[EnumeratorLike_current] = next[Iterator_value];
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    });
    return returns((f) => Enumerable_create(() => createEnumerator(f())));
})();
export default Enumerable_fromIteratorFactory;
