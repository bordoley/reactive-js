/// <reference types="./Enumerable.generate.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, pipe, error } from '../../../functions.mjs';
import { EnumeratorLike_current, SourceLike_move } from '../../../ix.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import MutableEnumerator_mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable_create from './Enumerable.create.mjs';

const Enumerable_generate = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const GenerateEnumerator_generator = Symbol("GenerateEnumerator_generator");
    const createGenerateEnumerator = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function GenerateEnumerator(instance, f, acc) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance[GenerateEnumerator_generator] = f;
        instance[EnumeratorLike_current] = acc;
        return instance;
    }, props({ [GenerateEnumerator_generator]: none }), {
        [SourceLike_move]() {
            if (!Disposable_isDisposed(this)) {
                try {
                    this[EnumeratorLike_current] = this[GenerateEnumerator_generator](this[EnumeratorLike_current]);
                }
                catch (e) {
                    pipe(this, Disposable_dispose(error(e)));
                }
            }
        },
    }));
    return (generator, initialValue) => Enumerable_create(() => createGenerateEnumerator(generator, initialValue()));
})();

export { Enumerable_generate as default };
