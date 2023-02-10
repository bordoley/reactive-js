/// <reference types="./Enumerable.concatAll.d.ts" />
import { createInstanceFactory, mix, include, delegatingMixin, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { pipe, returns } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Disposable_add from '../../../util/Disposable/__internal__/Disposable.add.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_disposed from '../../../util/Disposable/__internal__/Disposable.disposed.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import DisposableRef_mixin from '../../../util/DisposableRef/__internal__/DisposableRef.mixin.mjs';
import MutableRef_get from '../../../util/MutableRef/__internal__/MutableRef.get.mjs';
import MutableRef_set from '../../../util/MutableRef/__internal__/MutableRef.set.mjs';
import Enumerator_getCurrent from '../../Enumerator/__internal__/Enumerator.getCurrent.mjs';
import Enumerator_move from '../../Enumerator/__internal__/Enumerator.move.mjs';
import MutableEnumerator_mixin from '../../__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';
import Enumerable_lift from './Enumerable.lift.mjs';

const Enumerable_concatAll = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const typedDisposableRefMixin = DisposableRef_mixin();
    return pipe(createInstanceFactory(mix(include(Disposable_mixin, typedDisposableRefMixin, typedMutableEnumeratorMixin, delegatingMixin()), function ConcatAllEnumerator(instance, delegate) {
        init(Disposable_mixin, instance);
        init(typedDisposableRefMixin, instance, Disposable_disposed);
        init(typedMutableEnumeratorMixin, instance);
        init(delegatingMixin(), instance, delegate);
        pipe(instance, Disposable_add(delegate));
        return instance;
    }, props({}), {
        [SourceLike_move]() {
            const { [DelegatingLike_delegate]: delegate } = this;
            const innerEnumerator = MutableRef_get(this);
            if (Disposable_isDisposed(innerEnumerator) &&
                Enumerator_move(delegate)) {
                const next = pipe(delegate, Enumerator_getCurrent, Enumerable_enumerate());
                pipe(this, MutableRef_set(next));
            }
            while (!pipe(this, MutableRef_get, Disposable_isDisposed)) {
                const innerEnumerator = MutableRef_get(this);
                if (Enumerator_move(innerEnumerator)) {
                    this[EnumeratorLike_current] =
                        Enumerator_getCurrent(innerEnumerator);
                    break;
                }
                else if (Enumerator_move(delegate)) {
                    const next = pipe(delegate, Enumerator_getCurrent, Enumerable_enumerate());
                    pipe(this, MutableRef_set(next));
                }
                else {
                    pipe(this, Disposable_dispose());
                }
            }
        },
    })), Enumerable_lift, returns);
})();

export { Enumerable_concatAll as default };
