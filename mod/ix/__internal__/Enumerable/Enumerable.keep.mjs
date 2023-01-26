/// <reference types="./Enumerable.keep.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$keep from '../../../containers/__internal__/StatefulContainer/StatefulContainer.keep.mjs';
import { pipe, none, error } from '../../../functions.mjs';
import { SourceLike_move } from '../../../ix.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import DelegatingEnumerator$mixin from '../DelegatingEnumerator/DelegatingEnumerator.mixin.mjs';
import DelegatingEnumerator$move from '../DelegatingEnumerator/DelegatingEnumerator.move.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerable$liftT from './Enumerable.liftT.mjs';

const Enumerable$keep = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumerator$mixin();
    return pipe(createInstanceFactory(mix(include(Disposable$delegatingMixin, typedDelegatingEnumeratorMixin), function KeepEnumerator(instance, delegate, predicate) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.predicate = predicate;
        return instance;
    }, props({ predicate: none }), {
        [SourceLike_move]() {
            const { predicate } = this;
            try {
                while (DelegatingEnumerator$move(this) &&
                    !predicate(Enumerator$getCurrent(this))) { }
            }
            catch (e) {
                pipe(this, Disposable$dispose(error(e)));
            }
        },
    })), StatefulContainer$keep(Enumerable$liftT));
})();

export { Enumerable$keep as default };
