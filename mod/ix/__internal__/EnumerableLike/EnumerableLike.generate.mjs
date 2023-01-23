/// <reference types="./EnumerableLike.generate.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, pipe, error } from '../../../functions.mjs';
import { EnumeratorLike_current, SourceLike_move } from '../../../ix.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import MutableEnumeratorLike__mixin from '../MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import EnumerableLike__create from './EnumerableLike.create.mjs';

const EnumerableLike__generate = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    const createGenerateEnumerator = createInstanceFactory(mix(include(DisposableLike__mixin, typedMutableEnumeratorMixin), function GenerateEnumerator(instance, f, acc) {
        init(DisposableLike__mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.f = f;
        instance[EnumeratorLike_current] = acc;
        return instance;
    }, props({ f: none }), {
        [SourceLike_move]() {
            if (!DisposableLike__isDisposed(this)) {
                try {
                    this[EnumeratorLike_current] = this.f(this[EnumeratorLike_current]);
                }
                catch (e) {
                    pipe(this, DisposableLike__dispose(error(e)));
                }
            }
        },
    }));
    return (generator, initialValue) => EnumerableLike__create(() => createGenerateEnumerator(generator, initialValue()));
})();

export { EnumerableLike__generate as default };
