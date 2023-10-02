/// <reference types="./Enumerator.fromIterator.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, returns } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../../ix.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../utils.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import MutableEnumeratorMixin, { MutableEnumeratorLike_reset, } from "../../__mixins__/MutableEnumeratorMixin.js";
const Enumerator_fromIterator = /*@__PURE__*/ (() => {
    const IteratorEnumerator_iterator = Symbol("IteratorEnumerator_iterator");
    const createEnumerator = createInstanceFactory(mix(include(DisposableMixin, MutableEnumeratorMixin()), function IteratorEnumerator(instance, iterator) {
        init(MutableEnumeratorMixin(), instance);
        init(DisposableMixin, instance);
        instance[IteratorEnumerator_iterator] = iterator;
        return instance;
    }, props({
        [IteratorEnumerator_iterator]: none,
    }), {
        [EnumeratorLike_move]() {
            if (this[MutableEnumeratorLike_reset]()) {
                return false;
            }
            if (this[DisposableLike_isDisposed]) {
                return false;
            }
            try {
                const next = this[IteratorEnumerator_iterator].next();
                if (!next.done) {
                    this[EnumeratorLike_current] = next.value;
                }
                else {
                    this[DisposableLike_dispose]();
                }
            }
            catch (e) {
                // Catch any errors thrown by the iterator
                this[DisposableLike_dispose](error(e));
            }
            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return returns(createEnumerator);
})();
export default Enumerator_fromIterator;
