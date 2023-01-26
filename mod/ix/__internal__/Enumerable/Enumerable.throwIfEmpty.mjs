/// <reference types="./Enumerable.throwIfEmpty.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_throwIfEmpty from '../../../containers/__internal__/StatefulContainer/StatefulContainer.throwIfEmpty.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_addIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import DelegatingEnumerator_mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    return pipe(createInstanceFactory(mix(include(Disposable_mixin, typedDelegatingEnumeratorMixin), function TakeWhileEnumerator(instance, delegate, factory) {
        init(Disposable_mixin, instance);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.isEmpty = true;
        pipe(instance, Disposable_addIgnoringChildErrors(delegate));
        pipe(delegate, Disposable_onComplete(() => {
            let err = none;
            if (instance.isEmpty) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
            }
            pipe(instance, Disposable_dispose(err));
        }));
        return instance;
    }, props({
        isEmpty: true,
    }), {
        [SourceLike_move]() {
            if (DelegatingEnumerator_move(this)) {
                this.isEmpty = false;
            }
        },
    })), StatefulContainer_throwIfEmpty(Enumerable_liftT));
})();

export { Enumerable_throwIfEmpty as default };
