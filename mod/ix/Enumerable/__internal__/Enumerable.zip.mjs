/// <reference types="./Enumerable.zip.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArray_every from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.every.mjs';
import ReadonlyArray_forEach from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.forEach.mjs';
import ReadonlyArray_map from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import Enumerator_getCurrent from '../../Enumerator/__internal__/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from '../../Enumerator/__internal__/Enumerator.hasCurrent.mjs';
import Source_move from '../../Source/__internal__/Source.move.mjs';
import MutableEnumerator_mixin from '../../__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
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
    const ZipEnumerator_enumerators = Symbol("ZipEnumerator_enumerators");
    const createZipEnumerator = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function ZipEnumerator(instance, enumerators) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance[ZipEnumerator_enumerators] = enumerators;
        return instance;
    }, props({
        [ZipEnumerator_enumerators]: none,
    }), {
        [SourceLike_move]() {
            if (!Disposable_isDisposed(this)) {
                const { [ZipEnumerator_enumerators]: enumerators } = this;
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
