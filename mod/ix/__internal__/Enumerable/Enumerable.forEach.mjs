/// <reference types="./Enumerable.forEach.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$forEach from '../../../containers/__internal__/StatefulContainer/StatefulContainer.forEach.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import DelegatingEnumerator$mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator$move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerable$liftT from './Enumerable.liftT.mjs';

const Enumerable$forEach = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin), function forEachEnumerator(instance, delegate, effect) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.effect = effect;
        return instance;
    }, props({ effect: none }), {
        [SourceLike_move]() {
            if (DelegatingEnumerator$move(this)) {
                try {
                    this.effect(Enumerator$getCurrent(this));
                }
                catch (e) {
                    pipe(this, Disposable$dispose(error(e)));
                }
            }
        },
    })), StatefulContainer$forEach(Enumerable$liftT));
})();

export { Enumerable$forEach as default };
