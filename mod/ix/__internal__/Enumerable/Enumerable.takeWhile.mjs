/// <reference types="./Enumerable.takeWhile.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$takeWhile from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeWhile.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import DelegatingEnumerator$mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator$move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerable$liftT from './Enumerable.liftT.mjs';

const Enumerable$takeWhile = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin), function TakeWhileEnumerator(instance, delegate, predicate, inclusive) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.predicate = predicate;
        instance.inclusive = inclusive;
        return instance;
    }, props({
        predicate: none,
        inclusive: false,
        done: false,
    }), {
        [SourceLike_move]() {
            const { inclusive, predicate } = this;
            if (this.done && !Disposable$isDisposed(this)) {
                pipe(this, Disposable$dispose());
            }
            else if (DelegatingEnumerator$move(this)) {
                const current = Enumerator$getCurrent(this);
                try {
                    const satisfiesPredicate = predicate(current);
                    if (!satisfiesPredicate && inclusive) {
                        this.done = true;
                    }
                    else if (!satisfiesPredicate) {
                        pipe(this, Disposable$dispose());
                    }
                }
                catch (e) {
                    pipe(this, Disposable$dispose(error(e)));
                }
            }
        },
    })), StatefulContainer$takeWhile(Enumerable$liftT));
})();

export { Enumerable$takeWhile as default };
