/// <reference types="./Enumerable.throwIfEmpty.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$throwIfEmpty from '../../../containers/__internal__/StatefulContainer/StatefulContainer.throwIfEmpty.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable$addIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable$onComplete from '../../../util/__internal__/Disposable/Disposable.onComplete.mjs';
import DelegatingEnumerator$mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator$move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerable$liftT from './Enumerable.liftT.mjs';

const Enumerable$throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$mixin, typedDelegatingEnumeratorMixin), function TakeWhileEnumerator(instance, delegate, factory) {
        init(Disposable$mixin, instance);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.isEmpty = true;
        pipe(instance, Disposable$addIgnoringChildErrors(delegate));
        pipe(delegate, Disposable$onComplete(() => {
            let err = none;
            if (instance.isEmpty) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
            }
            pipe(instance, Disposable$dispose(err));
        }));
        return instance;
    }, props({
        isEmpty: true,
    }), {
        [SourceLike_move]() {
            if (DelegatingEnumerator$move(this)) {
                this.isEmpty = false;
            }
        },
    })), StatefulContainer$throwIfEmpty(Enumerable$liftT));
})();

export { Enumerable$throwIfEmpty as default };
