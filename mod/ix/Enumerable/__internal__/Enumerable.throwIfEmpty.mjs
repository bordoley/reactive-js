/// <reference types="./Enumerable.throwIfEmpty.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_throwIfEmpty from '../../../containers/StatefulContainer/__internal__/StatefulContainer.throwIfEmpty.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable_addIgnoringChildErrors from '../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';
import Disposable_onComplete from '../../../util/Disposable/__internal__/Disposable.onComplete.mjs';
import DelegatingEnumerator_mixin from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator_move from '../../__internal__/DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable_liftT from './Enumerable.liftT.mjs';

const Enumerable_throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator_mixin();
    const ThrowIfEmptyEnumerator_isEmpty = Symbol("");
    return pipe(createInstanceFactory(mix(include(Disposable_mixin, typedDelegatingEnumeratorMixin), function ThrowIfEmptyEnumerator(instance, delegate, factory) {
        init(Disposable_mixin, instance);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance[ThrowIfEmptyEnumerator_isEmpty] = true;
        pipe(instance, Disposable_addIgnoringChildErrors(delegate));
        pipe(delegate, Disposable_onComplete(() => {
            let err = none;
            if (instance[ThrowIfEmptyEnumerator_isEmpty]) {
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
        [ThrowIfEmptyEnumerator_isEmpty]: true,
    }), {
        [SourceLike_move]() {
            if (DelegatingEnumerator_move(this)) {
                this[ThrowIfEmptyEnumerator_isEmpty] = false;
            }
        },
    })), StatefulContainer_throwIfEmpty(Enumerable_liftT));
})();

export { Enumerable_throwIfEmpty as default };
