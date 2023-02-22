/// <reference types="./ReadonlyArray.toEnumerable.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe } from "../../../functions.js";
import { EnumeratorLike_current, SourceLike_move, } from "../../../ix.js";
import Enumerable_create from "../../../ix/Enumerable/__internal__/Enumerable.create.js";
import MutableEnumerator_mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
const createReadonlyArrayEnumerator = /*@__PURE__*/ (() => {
    const ReadonlyArrayEnumerator_array = Symbol("ReadonlyArrayEnumerator_array");
    const ReadonlyArrayEnumerator_count = Symbol("ReadonlyArrayEnumerator_count");
    const ReadonlyArrayEnumerator_index = Symbol("ReadonlyArrayEnumerator_index");
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    return createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function ReadonlyArrayEnumerator(instance, array, start, count) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance[ReadonlyArrayEnumerator_array] = array;
        instance[ReadonlyArrayEnumerator_index] =
            count >= 0 ? start - 1 : start + 1;
        instance[ReadonlyArrayEnumerator_count] = count;
        return instance;
    }, props({
        [ReadonlyArrayEnumerator_array]: none,
        [ReadonlyArrayEnumerator_count]: 0,
        [ReadonlyArrayEnumerator_index]: 0,
    }), {
        [SourceLike_move]() {
            const { [ReadonlyArrayEnumerator_array]: array } = this;
            if (!Disposable_isDisposed(this)) {
                const { [ReadonlyArrayEnumerator_count]: count, [ReadonlyArrayEnumerator_index]: prevIndex, } = this;
                if (count !== 0) {
                    this[ReadonlyArrayEnumerator_index] =
                        count > 0 ? prevIndex + 1 : prevIndex - 1;
                    this[ReadonlyArrayEnumerator_count] =
                        count > 0 ? count - 1 : count + 1;
                    const { [ReadonlyArrayEnumerator_index]: index } = this;
                    this[EnumeratorLike_current] = array[index];
                }
                else {
                    pipe(this, Disposable_dispose());
                }
            }
        },
    }));
})();
const ReadonlyArray_toEnumerable = /*@__PURE__*/ ReadonlyArray_toContainer((array, start, count) => Enumerable_create(() => createReadonlyArrayEnumerator(array, start, count)));
export default ReadonlyArray_toEnumerable;
