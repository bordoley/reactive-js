/// <reference types="./ReadonlyArrayLike.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import EnumerableLike__create from '../../../ix/__internal__/EnumerableLike/EnumerableLike.create.mjs';
import MutableEnumeratorLike__mixin from '../../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import { isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import DisposableLike__disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import ReadonlyArrayLike__toContainer from './ReadonlyArrayLike.toContainer.mjs';

const ReadonlyArrayLike__toEnumerable = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    const createReadonlyArrayEnumerator = createInstanceFactory(mix(include(DisposableLike__disposableMixin, typedMutableEnumeratorMixin), function ReadonlyArrayEnumerator(instance, array, start, count) {
        init(DisposableLike__disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.array = array;
        instance.index = start - 1;
        instance.count = count;
        return instance;
    }, props({
        array: none,
        count: 0,
        index: 0,
    }), {
        [SourceLike_move]() {
            const { array } = this;
            if (!isDisposed(this)) {
                this.index++;
                const { index, count } = this;
                if (count !== 0) {
                    this[EnumeratorLike_current] = array[index];
                    this.count = count > 0 ? this.count - 1 : this.count + 1;
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    }));
    return ReadonlyArrayLike__toContainer((array, start, count) => EnumerableLike__create(() => createReadonlyArrayEnumerator(array, start, count)));
})();

export { ReadonlyArrayLike__toEnumerable as default };
