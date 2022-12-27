/// <reference types="./ReadonlyArrayLike.toEnumerable.d.ts" />
import { create } from '../../../__internal__/ix/EnumerableLike.create.mjs';
import { mutableEnumeratorMixin } from '../../../__internal__/ix/EnumeratorLike.mutable.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import { isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import toContainer from './ReadonlyArrayLike.toContainer.mjs';

const toEnumerable = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    const createReadonlyArrayEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin), function ReadonlyArrayEnumerator(instance, array, start, count) {
        init(disposableMixin, instance);
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
    return toContainer((array, start, count) => create(() => createReadonlyArrayEnumerator(array, start, count)));
})();

export { toEnumerable as default };
