/// <reference types="./ReadonlyArray.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Enumerable$create from '../../../ix/__internal__/Enumerable/Enumerable.create.mjs';
import MutableEnumerator$mixin from '../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import ReadonlyArray$toContainer from './ReadonlyArray.toContainer.mjs';

const ReadonlyArray$toEnumerable = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    const createReadonlyArrayEnumerator = createInstanceFactory(mix(include(Disposable$mixin, typedMutableEnumeratorMixin), function ReadonlyArrayEnumerator(instance, array, start, count) {
        init(Disposable$mixin, instance);
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
            if (!Disposable$isDisposed(this)) {
                this.index++;
                const { index, count } = this;
                if (count !== 0) {
                    this[EnumeratorLike_current] = array[index];
                    this.count = count > 0 ? this.count - 1 : this.count + 1;
                }
                else {
                    pipe(this, Disposable$dispose());
                }
            }
        },
    }));
    return ReadonlyArray$toContainer((array, start, count) => Enumerable$create(() => createReadonlyArrayEnumerator(array, start, count)));
})();

export { ReadonlyArray$toEnumerable as default };
