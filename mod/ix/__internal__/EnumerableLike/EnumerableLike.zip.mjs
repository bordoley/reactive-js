/// <reference types="./EnumerableLike.zip.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import every from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every.mjs';
import forEach from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach.mjs';
import map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import { isDisposed, dispose, addTo } from '../../../util/DisposableLike.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import hasCurrent from '../EnumeratorLike/EnumeratorLike.hasCurrent.mjs';
import mutableMixin from '../MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import move from '../SourceLike/SourceLike.move.mjs';
import create from './EnumerableLike.create.mjs';
import enumerate from './EnumerableLike.enumerate.mjs';

const zip = /*@__PURE__*/ (() => {
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            move(enumerator);
        }
    };
    const allHaveCurrent = (enumerators) => pipe(enumerators, every(hasCurrent));
    const typedMutableEnumeratorMixin = mutableMixin();
    const createZipEnumerator = createInstanceFactory(mix(include(disposableMixin, typedMutableEnumeratorMixin), function ZipEnumerator(instance, enumerators) {
        init(disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.enumerators = enumerators;
        return instance;
    }, props({
        enumerators: none,
    }), {
        [SourceLike_move]() {
            if (!isDisposed(this)) {
                const { enumerators } = this;
                moveAll(enumerators);
                if (allHaveCurrent(enumerators)) {
                    this[EnumeratorLike_current] = pipe(enumerators, map(getCurrent));
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    }));
    const zipEnumerators = (enumerators) => {
        const instance = createZipEnumerator(enumerators);
        pipe(enumerators, forEach(addTo(instance)));
        return instance;
    };
    return (...enumerables) => create(() => pipe(enumerables, map(enumerate()), zipEnumerators));
})();

export { zip as default };
