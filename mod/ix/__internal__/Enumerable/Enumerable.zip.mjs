/// <reference types="./Enumerable.zip.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import ReadonlyArray$every from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every.mjs';
import ReadonlyArray$forEach from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.forEach.mjs';
import ReadonlyArray$map from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$hasCurrent from '../Enumerator/Enumerator.hasCurrent.mjs';
import MutableEnumerator$mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Source$move from '../Source/Source.move.mjs';
import Enumerable$create from './Enumerable.create.mjs';
import Enumerable$enumerate from './Enumerable.enumerate.mjs';

const Enumerable$zip = /*@__PURE__*/ (() => {
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            Source$move(enumerator);
        }
    };
    const allHaveCurrent = (enumerators) => pipe(enumerators, ReadonlyArray$every(Enumerator$hasCurrent));
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    const createZipEnumerator = createInstanceFactory(mix(include(Disposable$mixin, typedMutableEnumeratorMixin), function ZipEnumerator(instance, enumerators) {
        init(Disposable$mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.enumerators = enumerators;
        return instance;
    }, props({
        enumerators: none,
    }), {
        [SourceLike_move]() {
            if (!Disposable$isDisposed(this)) {
                const { enumerators } = this;
                moveAll(enumerators);
                if (allHaveCurrent(enumerators)) {
                    this[EnumeratorLike_current] = pipe(enumerators, ReadonlyArray$map(Enumerator$getCurrent));
                }
                else {
                    pipe(this, Disposable$dispose());
                }
            }
        },
    }));
    const zipEnumerators = (enumerators) => {
        const instance = createZipEnumerator(enumerators);
        pipe(enumerators, ReadonlyArray$forEach(Disposable$addTo(instance)));
        return instance;
    };
    return (...enumerables) => Enumerable$create(() => pipe(enumerables, ReadonlyArray$map(Enumerable$enumerate()), zipEnumerators));
})();

export { Enumerable$zip as default };
