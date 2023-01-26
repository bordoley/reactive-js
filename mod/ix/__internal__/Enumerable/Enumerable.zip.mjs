/// <reference types="./Enumerable.zip.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_every from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every.mjs';
import ReadonlyArray_forEach from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.forEach.mjs';
import ReadonlyArray_map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Enumerator_getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from '../Enumerator/Enumerator.hasCurrent.mjs';
import MutableEnumerator_mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Source_move from '../Source/Source.move.mjs';
import Enumerable_create from './Enumerable.create.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';

const Enumerable_zip = /*@__PURE__*/ (() => {
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            Source_move(enumerator);
        }
    };
    const allHaveCurrent = (enumerators) => pipe(enumerators, ReadonlyArray_every(Enumerator_hasCurrent));
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const createZipEnumerator = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function ZipEnumerator(instance, enumerators) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.enumerators = enumerators;
        return instance;
    }, props({
        enumerators: none,
    }), {
        [SourceLike_move]() {
            if (!Disposable_isDisposed(this)) {
                const { enumerators } = this;
                moveAll(enumerators);
                if (allHaveCurrent(enumerators)) {
                    this[EnumeratorLike_current] = pipe(enumerators, ReadonlyArray_map(Enumerator_getCurrent));
                }
                else {
                    pipe(this, Disposable_dispose());
                }
            }
        },
    }));
    const zipEnumerators = (enumerators) => {
        const instance = createZipEnumerator(enumerators);
        pipe(enumerators, ReadonlyArray_forEach(Disposable_addTo(instance)));
        return instance;
    };
    return (...enumerables) => Enumerable_create(() => pipe(enumerables, ReadonlyArray_map(Enumerable_enumerate()), zipEnumerators));
})();

export { Enumerable_zip as default };
