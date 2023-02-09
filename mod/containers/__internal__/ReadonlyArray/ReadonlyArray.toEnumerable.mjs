/// <reference types="./ReadonlyArray.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Enumerable_create from '../../../ix/__internal__/Enumerable/Enumerable.create.mjs';
import MutableEnumerator_mixin from '../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import ReadonlyArray_toContainer from './ReadonlyArray.toContainer.mjs';

const ReadonlyArray_toEnumerable = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const ReadonlyArrayEnumerator_array = Symbol("ReadonlyArrayEnumerator_array");
    const ReadonlyArrayEnumerator_count = Symbol("ReadonlyArrayEnumerator_count");
    const ReadonlyArrayEnumerator_index = Symbol("ReadonlyArrayEnumerator_index");
    const createReadonlyArrayEnumerator = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function ReadonlyArrayEnumerator(instance, array, start, count) {
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
    return ReadonlyArray_toContainer((array, start, count) => Enumerable_create(() => createReadonlyArrayEnumerator(array, start, count)));
})();

export { ReadonlyArray_toEnumerable as default };
