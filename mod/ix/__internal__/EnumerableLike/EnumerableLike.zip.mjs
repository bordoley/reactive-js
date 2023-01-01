/// <reference types="./EnumerableLike.zip.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArrayLike__every from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every.mjs';
import ReadonlyArrayLike__forEach from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach.mjs';
import ReadonlyArrayLike__map from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import { isDisposed, dispose, addTo } from '../../../util/DisposableLike.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__hasCurrent from '../EnumeratorLike/EnumeratorLike.hasCurrent.mjs';
import MutableEnumeratorLike__mixin from '../MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import SourceLike__move from '../SourceLike/SourceLike.move.mjs';
import EnumerableLike__create from './EnumerableLike.create.mjs';
import EnumerableLike__enumerate from './EnumerableLike.enumerate.mjs';

const EnumerableLike__zip = /*@__PURE__*/ (() => {
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            SourceLike__move(enumerator);
        }
    };
    const allHaveCurrent = (enumerators) => pipe(enumerators, ReadonlyArrayLike__every(EnumeratorLike__hasCurrent));
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    const createZipEnumerator = createInstanceFactory(mix(include(DisposableLike__mixin, typedMutableEnumeratorMixin), function ZipEnumerator(instance, enumerators) {
        init(DisposableLike__mixin, instance);
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
                    this[EnumeratorLike_current] = pipe(enumerators, ReadonlyArrayLike__map(EnumeratorLike__getCurrent));
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    }));
    const zipEnumerators = (enumerators) => {
        const instance = createZipEnumerator(enumerators);
        pipe(enumerators, ReadonlyArrayLike__forEach(addTo(instance)));
        return instance;
    };
    return (...enumerables) => EnumerableLike__create(() => pipe(enumerables, ReadonlyArrayLike__map(EnumerableLike__enumerate()), zipEnumerators));
})();

export { EnumerableLike__zip as default };
