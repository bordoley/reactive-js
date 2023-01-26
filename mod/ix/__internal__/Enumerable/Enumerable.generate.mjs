/// <reference types="./Enumerable.generate.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, pipe, error } from '../../../functions.mjs';
import { EnumeratorLike_current, SourceLike_move } from '../../../ix.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import MutableEnumerator$mixin from '../MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable$create from './Enumerable.create.mjs';

const Enumerable$generate = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    const createGenerateEnumerator = createInstanceFactory(mix(include(Disposable$mixin, typedMutableEnumeratorMixin), function GenerateEnumerator(instance, f, acc) {
        init(Disposable$mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.f = f;
        instance[EnumeratorLike_current] = acc;
        return instance;
    }, props({ f: none }), {
        [SourceLike_move]() {
            if (!Disposable$isDisposed(this)) {
                try {
                    this[EnumeratorLike_current] = this.f(this[EnumeratorLike_current]);
                }
                catch (e) {
                    pipe(this, Disposable$dispose(error(e)));
                }
            }
        },
    }));
    return (generator, initialValue) => Enumerable$create(() => createGenerateEnumerator(generator, initialValue()));
})();

export { Enumerable$generate as default };
